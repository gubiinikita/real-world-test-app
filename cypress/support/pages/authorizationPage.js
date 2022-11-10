class AuthorizationPage{
    visit(){
        cy.log('**Open login page**');
        cy.visit('/user/login');
    }

    getEmailField(){
        return cy.get('[type="email"]');
    }

    getPasswordField(){
        return cy.get('[type="password"]');
    }

    getLoginButton(){
        return cy.get('[type="submit"]');
    }

    typeTextInEmailField(email){
        cy.log(`Type username ${email} in login field`)
        this.getEmailField().type(email);
    }

    typeTextInPasswordField(password){
        cy.log(`Type password ${password} in password field`)
        this.getPasswordField().type(password);
    }

    submitLoginForm(email, password){
        cy.log(`Fill login form`);
        this.getEmailField().clear().type(email);
        this.getPasswordField().clear().type(password);

        cy.log(`Click login button`);
        this.getLoginButton().click();
    }

}
export default new AuthorizationPage();