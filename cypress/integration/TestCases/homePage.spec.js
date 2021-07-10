import homePage from '../PageObjects/homePage'
import AboutPage from '../PageObjects/AboutPage'
import proPage from '../PageObjects/proPage'
import LoginPage from '../PageObjects/LoginPage'
describe('HomePageTestSuite',()=>{


it('landingPageTest',()=>{
    cy.homePage();
    homePage.checkHomePageTitle();
})

it('LogoLinkClickTest',()=>{
   homePage.LogoClick();
   homePage.checkHomePageTitle();
})
it('AboutLinkClickTest',()=>{
    homePage.aboutLinkClick();
    AboutPage.checkTitle();
 })
 it('proLinkClickTest',()=>{
     cy.homePage();
    homePage.proLinkClick();
    proPage.checkTitle();
 })
 it('LoginLinkClickTest',()=>{
    cy.homePage();
    homePage.loginLinkClick();
    LoginPage.checkTitle();
 })
 it('HomeBannerProLinkTest',()=>{
    cy.homePage();
    homePage.homeBannerProLinkClick();
    proPage.checkTitle();
 })

})