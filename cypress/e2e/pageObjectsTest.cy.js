/// <reference types="cypress" />

import cadastroPage from "./pages/cadastro.page";

import { homePage } from "./pages/home.page";
import { carrinhoPage } from "./pages/produto.page";
const {firstname, lastname, phonenumber, email, password, repassword} = require('../fixtures/data.json')

describe('Teste de Autenticação', () => {

beforeEach(() => {
  cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
  cy.visit('/')
});

  it('Deve fazer o cadastro com sucesso', () => {
    homePage.openMenu('Account')
    cy.get('[data-testid="signUp"] > .css-146c3p1').click()
    cadastroPage.cadastro(firstname, lastname, phonenumber, email, password, repassword)
      
    });

    it('Deve adicionar um produto ao carrinho', () => {
      carrinhoPage.adicionarProduto()
      
    });
  
  })