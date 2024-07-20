/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

class CadastroPage {
    get #firstname() { return cy.get('[data-testid="firstName"]')}
    get #lastname() { return cy.get('[data-testid="lastName"]')}
    get #phonenumber() { return cy.get('[data-testid="phone"]')}
    get #email() { return cy.get(':nth-child(7) > .css-175oi2r > [data-testid="email"]')}
    get #password() { return cy.get(':nth-child(8) > .css-175oi2r > [data-testid="password"]')}
    get #repassword() { return cy.get('[data-testid="repassword"]')}
    get #btnCreate() { return cy.get('[data-testid="create"]')}
    
   cadastro(firstname, lastname, phonenumber, email, password, repassword) {
        this.#firstname.type(firstname)
        this.#lastname.type(lastname)
        this.#phonenumber.type(phonenumber)
        this.#email.type(faker.internet.email())
        this.#password.type(password)
        this.#repassword.type(repassword)
        this.#btnCreate.click()

   }

}    

module.exports = new CadastroPage();
