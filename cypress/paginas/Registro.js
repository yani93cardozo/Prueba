/// <reference types="cypress" />
export class Registro {
  type_nombre(nombre) {
    cy.get("#input_21_19_3").type(nombre);
  }

  type_apellidos(apellidos) {
    cy.get("#input_21_19_6").type(apellidos);
  }

  type_correo(correo) {
    cy.get("#input_21_2").type(correo);
  }

  type_contrasenia(contrasenia) {
    cy.get("#input_21_20").type(contrasenia);
  }
  type_numero(numero) {
    cy.get("#input_21_12").type(numero);
  }
  hacerclickenSiguiente() {
    cy.get("#gform_submit_button_21").click();
  }
}
