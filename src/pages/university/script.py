import time
import random
from threading import Thread

import requests
import scrapy
from selenium import webdriver


def last_task(driver):
    resp = scrapy.Selector(text=driver.page_source)
    triess = 0
    while not (resp.css("span.text.ng-star-inserted")):
        resp = scrapy.Selector(text=driver.page_source)
        time.sleep(1)
        triess += 1
        if resp.css("h2.headline.text-center.header-bottom-no-ad ") or triess > 60:
            driver.close()
            break


def tasks(driver, i):
    try:
        time.sleep(2)
        print(i)
        # driver.execute_script("arguments[0].scrollIntoView();",driver.find_element_by_css_selector("div.body-wrapper.make-visible"))
        driver.execute_script("window.scrollTo(0,150)")
        try:
            driver.find_element_by_css_selector(
                "a.lv-button-component.new-button-style.lv-dark-btn.ng-star-inserted ").click()
            time.sleep(2)
        except:
            pass

        try:
            driver.find_elements_by_css_selector(
                "div.todo-items-wrapper-top-aligned mat-card.web.todo.mat-card.ng-star-inserted h5.h5-mobile-small.display-web-long")[
                0].click()
            time.sleep(6)
        except Exception as e:
            print(str(e))

        try:
            driver.find_element_by_css_selector("div.close-icon").click()
        except Exception as e:
            print(str(e))
        try:
            # driver.find_element_by_css_selector("mat-card.notification.todo.mat-card.ng-star-inserted h5").click()
            driver.find_element_by_xpath(
                '/html/body/lv-root/div[1]/mat-sidenav-container/mat-sidenav-content/div[2]/lv-redirect/div[1]/div[1]/div/div[1]/lv-redirect-second-page/lv-todo-block/mat-card[2]/div/div/div[3]/div[2]/mat-card[2]/div[2]/h5[2]').click()
            time.sleep(6)
        except Exception as e:
            print(str(e))

        try:
            driver.find_elements_by_css_selector("div.modal-header div.close-icon")[1].click()
        except Exception as e:
            print(str(e))
        try:
            driver.find_element_by_css_selector(
                 "a.lv-button-component.new-button-style.lv-dark-btn.ng-star-inserted").click()
        except Exception as e:
            print(str(e))
        last_task(driver)
        time.sleep(2)
        driver.close()
    except:
        driver.close()


def reload(driver, i):
    try:
        driver.get("https://link-center.net/390413/the-best-site-to-watch")
    except:
        pass
    resp = scrapy.Selector(text=driver.page_source)
    tries = 0
    while not (resp.css("iframe[title='reCAPTCHA']") or resp.css("h3.pointer")):
        resp = scrapy.Selector(text=driver.page_source)
        time.sleep(1)
        tries += 1
        if resp.css("iframe[title='reCAPTCHA']") or resp.css("h3.pointer"):
            break
        elif tries > 60:
            driver.close()
            process_link("https://link-center.net/390413/the-best-site-to-watch", i)


def captcha(driver):
    try:
        if driver.find_element_by_css_selector("iframe[title='reCAPTCHA']"):
            google_key = \
                driver.find_element_by_css_selector("iframe[title='reCAPTCHA']").get_attribute("src").split("&")[
                    1].split(
                    "=")[1]
            url = 'http://2captcha.com/in.php?key=93cc4be57ef6c0aeb2577aa00e75362f&method=userrecaptcha&googlekey={}&pageurl=https://linkvertise.com/390413/the-best-site-to-watch/1'.format(
                google_key)
            resp = requests.get(url=url)
            id = resp.text.split("|")[1]
            time.sleep(10)
            while True:
                res = requests.get(
                    url="http://2captcha.com/res.php?key=93cc4be57ef6c0aeb2577aa00e75362f&action=get&id={}".format(id))
                if "CAPCHA_NOT_READY" in res.text:
                    time.sleep(5)
                    continue
                else:
                    token = res.text
                    element = driver.find_element_by_id("g-recaptcha-response")
                    driver.execute_script("arguments[0].setAttribute('style', 'display: visible')", element)
                    element.send_keys(token.split("|")[1])
                    time.sleep(5)
                    try:
                        
                        driver.execute_script("___grecaptcha_cfg.clients[0].$.$.callback()")
                    except:
                      
                        driver.execute_script("___grecaptcha_cfg.clients[0].$.$.callback()")

                    break
    except:
        pass
    time.sleep(5)

def process_link(links, i):
    PROXY = random.choice(proxies)  # IP:PORT or HOST:PORT

    chrome_options = webdriver.ChromeOptions()
    chrome_options.add_argument('--proxy-server=%s' % PROXY)
    chrome_options.add_experimental_option("excludeSwitches", ["enable-automation"])
    chrome_options.add_experimental_option('useAutomationExtension', False)
    chrome_options.add_argument("--disable-blink-features=AutomationControlled")

    # driver = webdriver.Chrome()
    driver = webdriver.Chrome(options=chrome_options)
    driver.maximize_window()
    driver.set_page_load_timeout(30)
    try:
        try:
            driver.get(links)
        except Exception as e:
            pass
        # time.sleep(5)
        y = 9
        resp = scrapy.Selector(text=driver.page_source)
        tries = 0

        if not (resp.css("iframe[title='reCAPTCHA']") and resp.css('#g-recaptcha-response')):
            driver.close()
            return
        # while not resp.css("iframe[title='reCAPTCHA']"):
        #     resp = scrapy.Selector(text=driver.page_source)
        #     time.sleep(1)
        #     tries += 1
        #     if resp.css("iframe[title='reCAPTCHA']") or resp.css("h3.pointer"):
        #         break
        #     elif tries > 10:
        #         driver.close()
        #         process_link(links, i)

        try:
            if "Could not connect to the reCAPTCHA" in resp.css("div.if-js-enabled p::text").get():
                reload(driver, i)
                print(i, '-->', 'try if')
                captcha(driver)
                tasks(driver, i)
        except:
            if resp.css("h3.pointer"):
                captcha(driver)
                print(i, '-->', 'except if')
                tasks(driver, i)
            elif resp.css("iframe[title='reCAPTCHA']"):
                captcha(driver)
                print(i, '-->', 'except elif')
                tasks(driver, i)

    except:
        pass


if __name__ == '__main__':
    p_file = open('proxy.txt', 'r')
    proxies = p_file.read().split('\n')
    proxies = [p for p in proxies if p.strip()]
    while True:
        threads_list = []
        for i in range(5):
            newt = Thread(target=process_link, args=("https://link-center.net/390413/the-best-site-to-watch", i))
            # time.sleep(3)
            newt.start()
            threads_list.append(newt)
        for t in threads_list:
            t.join()
