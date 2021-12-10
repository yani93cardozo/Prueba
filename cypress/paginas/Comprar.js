/// <reference types="cypress" />
export class Comprar {
  click_botonComprarExplorador() {
    cy.get(
      ".slick-current > :nth-child(1) > .mb-3 > .description > .btn"
    ).click();
  }
  click_botonComprarInventor() {
    cy.get(
      '[data-slick-index="1"] > :nth-child(1) > .mb-3 > .description > .btn'
    ).click();
  }
  click_botonComprarGenio() {
    cy.get(
      '[data-slick-index="2"] > :nth-child(1) > .mb-3 > .description > .btn'
    ).click();
  }
}
