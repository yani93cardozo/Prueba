///<reference types="cypress" />

export class Reserva {
  click_reservarmiClase() {
    cy.get("#4004").click();
  }

  click_aceptarBotonClaseReservada() {
    cy.get(
      "#modalBooking > .modal-dialog > .modal-content > .modal-footer > .btn"
    ).click();
  }

  click_claseyaReservada() {
    cy.get("#4004")
      .invoke("text")
      .then((text) => {
        if (text == "Reservar mi clase") {
          cy.get("#4004").click();
        } else cy.log("Esta clase ya esta reservada");
      });
  }

  click_clasenoReservada() {
    cy.get("#4004")
      .invoke("text")
      .then((text) => {
        if (text != "Reservar mi clase") {
          cy.get("#4004").click();
        } else cy.log("Esta clase no esta reservada");
      });
  }
  click_botonCancelarReservadeClase() {
    cy.get(".mt-2").click();
  }

  click_Aceptar_modal() {
    cy.get("#deleteClassButton").click();
  }
}
