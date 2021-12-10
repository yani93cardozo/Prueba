/// <reference types="cypress" />
import { Reserva } from "../../paginas/Reservar";
import { Ingresar } from "../../paginas/Ingresar";
import { Home } from "../../paginas/Home";
import { Registro } from "../../paginas/Registro";
import { RegistroHijo } from "../../paginas/RegistroHijo";
import { Hijo } from "../../paginas/Hijo";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Wonderly - Reserva", () => {
  const reserva = new Reserva();
  const ingresar = new Ingresar();
  const home = new Home();
  const registrar = new Registro();
  const registroHijo = new RegistroHijo();
  const hijo = new Hijo();

  beforeEach(() => {
    cy.visit("https://developers.learnwonderly.com/");
  });

  it("Verificar que un padre pueda registrarse desde el boton Prueba gratis para poder reservar una clase", () => {
    home.click_PruebaGratis();
    cy.wait(2000);
    registrar.type_nombre("Ana Maria");
    registrar.type_apellidos("Baspineiro");
    registrar.type_correo("anamaria23@mailinator.com");
    registrar.type_contrasenia("123456");
    registrar.type_numero("65266222");
    registrar.hacerclickenSiguiente();
    cy.wait(20000);
    home.click_seleccionarFechaDelCalendario();
    reserva.click_reservarmiClase();
    cy.wait(3000);
    registroHijo.type_Nombre("Dayana7");
    registroHijo.type_Apellido("Baspineiro");
    registroHijo.type_FechaDeNacimiento("09/12/2015");
    registroHijo.click_RegistrarHijo();
    cy.wait(2000);
    reserva.click_aceptarBotonClaseReservada();
    cy.wait(2000);
    cy.get(".tittle-schedule").should("be.visible");
  });

  it("Comprobar que el padre haga click en Reserva mi clase desde el Schedule y le redireccione para ingresar con su cuenta", () => {
    home.click_botonMoverAlCalendario();
    home.click_seleccionarFechaDelCalendario();
    reserva.click_reservarmiClase();
    home.click_Ingresar();
    ingresar.login();
    cy.wait(2000);
  });

  it.skip("Verificar que un padre logueado reserve una clase desde el Schedule", () => {
    home.click_Ingresar();
    ingresar.login();
    cy.wait(2000);
    hijo.click_selecionarHijo();
    home.click_botonMoverAlCalendario();
    home.click_seleccionarFechaDelCalendario();
    reserva.click_reservarmiClase();
    cy.wait(3000);
    reserva.click_aceptarBotonClaseReservada();
  });

  it.skip("Verificar que la clase ya esta reservada", () => {
    ingresar.login();
    cy.wait(2000);
    hijo.click_selecionarHijo();
    home.click_botonMoverAlCalendario();
    home.click_seleccionarFechaDelCalendario();
    reserva.click_reservarmiClase();
    reserva.click_claseyaReservada();
    cy.wait(3000);
  });

  it("Verificar que se pueda cancelar una clase ya reservada", () => {
    ingresar.login();
    cy.wait(2000);
    hijo.click_selecionarHijo();
    home.click_botonMoverAlCalendario();
    home.click_seleccionarFechaDelCalendario();
    reserva.click_reservarmiClase();
    cy.wait(3000);
    // reserva.click_aceptarBotonClaseReservada();
    reserva.click_claseyaReservada();
    cy.wait(2000);
    reserva.click_botonCancelarReservadeClase();
    // reserva.click_clasenoReservada();
    reserva.click_Aceptar_modal();
  });
});
