import LoginPage from "../support/pages/LoginPage";
import user from '../fixtures/user.json';


it('authorization', () => {

  LoginPage.visit();
  LoginPage.submitLoginForm(user.email, user.password);
})

