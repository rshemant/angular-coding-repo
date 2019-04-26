import { browser, by, element, logging } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }

  getPetInfoCardsCount() {
    browser.waitForAngular();
    const list = element.all(by.css('.pet-info-card'));
    return list ? list.count() : null;
  }

  getPetInfoCardsHeading() {
    const list = element.all(by.css('.pet-info-card h2')).map( elm =>  elm.getText());
    return list ? list : null;
  }

  getListPresentStatus() {
    return element.all(by.css('app-pet-list>ul>li')).isPresent();
  }
}
