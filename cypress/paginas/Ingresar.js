/// <reference types="cypress" />
import { Home } from "./Home";

const home = new Home();
const correo = "yani.cardozosalas@gmail.com";
const contrasena = "abcABC123";

export class Ingresar {
  type_Correo(correo) {
    cy.get("#input_1").type(correo);
  }

  type_contrasena(contrasena) {
    cy.get("#input_2").type(contrasena);
  }

  click_continuar() {
    cy.get("#gform_submit_button_0").click();
  }

  login() {
    cy.wait(1000);
    home.click_Ingresar();
    cy.get("#input_1").type(correo);
    cy.get("#input_2").type(contrasena);
    cy.get("#gform_submit_button_0").click();
  }
}
