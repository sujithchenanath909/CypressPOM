class ProPage{

    static checkTitle(){
        cy.title().should('eq','Pro Page | ゼヒトモ【Zehitomo】');
    }

}
export default ProPage;