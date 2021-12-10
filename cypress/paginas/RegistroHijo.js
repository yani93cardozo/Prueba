/// <reference types="cypress"  />
export class RegistroHijo {
  type_Nombre(nombre) {
    cy.get("#nombre").type(nombre);
  }
  type_Apellido(apellido) {
    cy.get("#apellido").type(apellido);
  }

  type_FechaDeNacimiento(fechadenacimiento) {
    cy.get("#fecha_nacimiento").type(fechadenacimiento);
  }

  click_RegistrarHijo() {
    cy.get("#registrar-hijo-submit").click();
  }
}
