class HomePage{
    visit(){
        cy.visit('/');
    }

    getLoginButton(){
        return cy.get('[href="/user/login"]')
    }

    clickLoginButton(){
        this.getLoginButton().click();
    } 

    getProfileButton(){
        return cy.get('[href*="/profile/"]')
    }

    clickProfileButton(){
        this.getProfileButton().click();
    } 

    getTagsList(){
        return cy.get('.tag-list');
    }

    getTagChip(){
        return cy.get('.link.tag-default.tag-pill');
    }

    getGlobalFeed(){
        return cy.get('[class="nav-item"]').contains('Global Feed')
    }
    globalFeedOpen(){
        this.getGlobalFeed().click();
    }

} export default new HomePage();