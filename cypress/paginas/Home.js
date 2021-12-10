/// <reference types="cypress" />

export class Home {
  click_moverFechaAdelante() {
    cy.get(".slick-next").click();
  }
  click_moverFechaAtras() {
    cy.get(".slick-prev").click();
  }
  click_Ingresar() {
    cy.get("#menu-item-139 > .nav-link").click();
  }
  click_Destrezas() {
    cy.get("#menu-item-17 > .nav-link").click();
  }
  click_PorqueWonderly() {
    cy.get("#menu-item-14 > .nav-link").click();
  }

  click_PruebaGratis() {
    cy.get("#free-trial-home > .btn").click();
  }

  click_Wonderly() {
    cy.get(".custom-logo").click();
  }

  click_botonExplorarNuestrasDestrezas() {
    cy.get(".mb-5 > .btn").click();
  }

  click_PruebaPor7dias() {
    cy.get(".mb-0 > .btn").click();
  }

  click_botonMoverAlCalendario() {
    cy.get(".down-link").click();
  }

  click_botonWhatsapp() {
    cy.get(".image-whastapp").click();
  }

  click_Enviar() {
    cy.get("form > button").click();
  }

  click_botonMoverArriba() {
    cy.get(".up-link").click();
  }

  click_seleccionarFechaDelCalendario() {
    cy.get(
      '[data-slick-index="4"] > div > li > .trigger-schedule-clases'
    ).click();
  }
}
