/// <reference types="cypress"/>
export class Hijo {
  click_selecionarHijo() {
    cy.get(":nth-child(3) > .wonderly-login-hijo-trigger > .mb-0").click();
  }
}
