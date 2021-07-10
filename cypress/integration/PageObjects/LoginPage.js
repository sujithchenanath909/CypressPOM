class LoginPage{
    static checkTitle(){
        cy.title().should('eq','Log In - Zehitomo');
    }

}
export default LoginPage