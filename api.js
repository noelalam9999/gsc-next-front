import axios from 'axios';
import React, { Component } from "react"
import { selectFields } from './selectFields';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";





class Api extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      activeItem: {
        name: "",
        alias: ""
        
      },
      todoList: []
      };
  }

    async componentDidMount() {
      try {
        const res = await fetch('https://ci-gsc.com/heroes/?format=json');
        console.log(res)
        const todoList = await res.json();
        this.setState({
          todoList
        });
      } catch (e) {
        console.log(e);
    }
    }


    RenderItems = () => {
      const { viewCompleted } = this.state;
      const newItems = this.state.todoList
      return newItems.map(item => (
        <li 
          key={item.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          <span 
            className={`todo-title mr-2 ${
              this.state.viewCompleted ? "completed-todo" : ""
            }`}
            title={item.name}
            >
              {item.alias}
            </span>
        </li>
      ));
    };


    refreshList = () => {
      axios
        .get("https://ci-gsc.com/students")
        .then((res) => this.setState({ todoList: res.data }))
        .catch((err) => console.log(err));
    };
  
    toggle = () => {
      this.setState({ modal: !this.state.modal });
    };

    handleChange = (e) => {
      let { name, value } = e.target;

  
      const activeItem = { ...this.state.activeItem, [name]: value };
  
      this.setState({ activeItem });
    };


handleSubmit = (item) => {
    this.toggle();
console.log(item)
    if (item.id) {
      axios
        .put(`https://ci-gsc.com/heroes/${item.id}/`, item)
        .then((res) => this.refreshList());
      return;
    }
    axios
      .post("https://ci-gsc.com/heroes/", item)
      .then((res) => this.refreshList());
  };
    render() {
      
      return (
        <main className="content">
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <ul className="list-group list-group-flush">
                {this.RenderItems()}
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
        <Form>
            <FormGroup>
              <Label for="todo-title">Title</Label>
              <Input
                type="text"
                id="todo-title"
                name="name"
                value={this.state.activeItem.name}
                onChange={this.handleChange}
                placeholder="Enter Todo Title"
              />
            </FormGroup>
            <FormGroup>
              <Label for="todo-description">Description</Label>
              <Input
                type="text"
                id="todo-description"
                name="alias"
                value={this.state.activeItem.alias}
                onChange={this.handleChange}
                placeholder="Enter Todo description"
              />
            </FormGroup>
            <Button
            color="success"
            onClick={() => this.handleSubmit(this.state.activeItem)}
          >
            Save
          </Button>
          </Form>
        </div>
      </main>
      )
    }
  }
  
export default Api;