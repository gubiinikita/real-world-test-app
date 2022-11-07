/// <reference types="cypress"/>

import homePage from '../support/pages/homePage';
import user from '../fixtures/user.json';
import { loginViaAPI } from '../support/helper';
import likes from '../fixtures/articleMock.json'

const likesCount = 100;

beforeEach('Login', () => {
    likes.articles[0].favoritesCount = likesCount
    cy.intercept('GET', '**/articles?limit=10&offset=0', likes)
    loginViaAPI(user);
})

it('Mock likes', {retries: 2}, () => {
    homePage.visit();
    homePage.getProfileButton().should('be.visible');
    homePage.globalFeedOpen();
    homePage.checkLikesQuantity(likesCount);
});
