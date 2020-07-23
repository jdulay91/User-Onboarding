const { iteratee } = require("lodash")


describe('One and Done', () => {
    it('Site navigation',()=>{
        cy.visit('http://localhost:3000')
        cy.url().should('include','localhost')
    })

    it('Getting Name',()=>{
        cy.get('input[name="name"]')
        .type('Julli')
        .should('have.value','Julli')
    })

    it('Getting Email',()=>{
        cy.get('input[name="email"]')
        .type('Julli@julli.com')
        .should('have.value','Julli@julli.com')
    })

    it('Getting Password',()=>{
        cy.get('input[name="password"]')
        .type('Jullipassword')
        .should('have.value','Jullipassword')
    })

    it('check that checkbox', () =>{
        cy.get('[type="checkbox"]').check()
        .should('have.value','on')
    })

    it('check if add user is clickable', ()=>{
        cy.get('button').should('not.be.disabled')
        .click()
    })

    it('Empty Name',()=>{
        cy.get('input[name="name"]')        
        .should('have.value','')
    })

    it('Empty Email',()=>{
        cy.get('input[name="email"]')        
        .should('have.value','')
    })

    it('Empty Password',()=>{
        cy.get('input[name="password"]')       
        .should('have.value','')
    })




})