import authorizationPage from '../support/pages/authorizationPage';
import user from '../fixtures/user.json';

it('Authorization', () => {
    authorizationPage.visit();
  
    authorizationPage.submitLoginForm(user.email, user.password);
    
});