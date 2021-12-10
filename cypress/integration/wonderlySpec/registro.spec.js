/// <reference types="cypress" />
import { Registro } from "../../paginas/Registro";

describe("registro", () => {
  const registro = new Registro();
  beforeEach(() => {
    cy.visit("https://developers.learnwonderly.com/registrar-padre/");
  });
  it("Creacion de usuario", () => {
    registro.type_nombre("Belen");
    registro.type_apellidos("Delgadillo");
    registro.type_correo("belen2@mailinator.com");
    registro.type_contrasenia("abcABC123");
    registro.type_numero("65266222");
    registro.hacerclickenSiguiente();
    cy.get("h2").should("be.visible");
  });
});
