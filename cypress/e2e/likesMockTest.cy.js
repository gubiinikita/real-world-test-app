/// <reference types="cypress"/>

import homePage from '../support/pages/homePage';
import user from '../fixtures/user.json';
import { loginViaAPI } from '../support/helper';
import likes from '../fixtures/articleMock.json'

beforeEach('Login', () => {
    likes.articles.favoritesCount = 100
    cy.intercept('GET', '**/articles?limit=10&offset=0', likes)
    loginViaAPI(user);
})

it('Mock likes', {retries: 2}, () => {
    homePage.visit();
    homePage.getProfileButton().should('be.visible');
    homePage.globalFeedOpen();
    


});
