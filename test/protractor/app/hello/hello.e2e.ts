import { browser, by, element } from 'protractor';

describe('Hello', () => {

    beforeEach(() => {
        browser.get('/#/');
    });

    it('should say hello', () => {

        let bodyText = element(by.css('body')).getText();

        expect(bodyText).toEqual('Hello!');

    });

});
