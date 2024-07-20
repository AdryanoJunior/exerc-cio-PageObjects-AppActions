/// <reference types="cypress" />

export const carrinhoPage = {
    adicionarProduto() {
      cy.get('[data-testid="__CAROUSEL_ITEM_0_READY__"] > .r-1kihuf0 > .r-1jnx3et > .r-13w96dm > [data-testid="banner"] > .css-146c3p1').click()
      cy.get('[style="padding: 8px;"] > :nth-child(1) > .r-18u37iz > :nth-child(1) > [data-testid="productDetails"]').click()
      cy.get('[data-testid="addToCart"] > .css-146c3p1').click()
      cy.get('[data-testid="selectAddressOrContinueToPayment"] > .css-146c3p1').click()
    }
}

