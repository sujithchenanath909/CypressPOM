
class AboutPage{

    static checkTitle(){
        cy.title().should('eq','About | ゼヒトモ【Zehitomo】');
    }
}
export default AboutPage;