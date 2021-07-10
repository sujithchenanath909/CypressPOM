
class HomePage{

static checkHomePageTitle(){
    cy.title().should('eq','Zehitomo | Connect with the best Local Service Professionals')
}

static LogoClick(){
    cy.get('.Header_brand__1BplI > svg').click();
}
//Testing nav links on page
static aboutLinkClick(){
    cy.get('.HeaderItem_menu-item__1_FB2[data-test-id=header-link-about__desktop]').click({ force: true });
}
static proLinkClick(){
    cy.get('[data-test-id=header-link-pro__desktop]').click({ force: true });
}
static loginLinkClick(){
    cy.get('[data-test-id=header-link-login__desktop]').click({ force: true });
}

static homeBannerProLinkClick(){
    cy.log('inside homebanner method')
    cy.get('.HomeBanner_pro-page-link__233cl').click();
}

static enterSearch(value){
    cy.get('.react-autosuggest__input').type(value);
}

static selectAutoSuggest(value){
    cy.get('.react-autosuggest__input').type(value);
}


}
export default HomePage;