import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getText() {
    return element(by.tagName('body')).getText() as Promise<string>;
  }
}
