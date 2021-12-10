/// <reference types="cypress" />
import { Comprar } from "../../paginas/Comprar";
import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";
import moment from "moment";
// import { Perfil } from "../..paginas/Perfil";
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Wonderly - Home Page", () => {
  const home = new Home();
  const ingresar = new Ingresar();
  const comprar = new Comprar();
  // const perfil = new Perfil();

  beforeEach(() => {
    cy.visit("https://developers.learnwonderly.com/");
  });
  it("Verificar que la primera vez que se redirecciona a Wonderly redireccione al Home Page", () => {
    cy.wait(2000);
    cy.get("h2").should("be.visible");
    // perfil.seleccionar_hijo("Lucio Cardozo")
  });

  it("Ir a la pagina de Porque Wonderly", () => {
    home.click_PorqueWonderly();
    cy.get("h2").should("be.visible");
  });

  it("Ir a la pagina de Destrezas", () => {
    cy.wait(2000);
    home.click_Destrezas();
    cy.get("h2").should("be.visible");
    cy.wait(2000);
  });

  it("Ir a la pagina de Destrezas desde el boton Explorar nuestras destrezas", () => {
    cy.wait(2000);
    home.click_botonExplorarNuestrasDestrezas();
    cy.get("h2").should("be.visible");
    cy.wait(2000);
  });

  it("Ir al Schedule que te permite mover al Calendario", () => {
    home.click_Wonderly();
    cy.wait(1000);
    home.click_botonMoverAlCalendario();
    cy.get(".tittle-schedule").should("be.visible");
    cy.wait(2000);
  });

  it("Mover la fecha del Schedule hacia delante", () => {
    cy.wait(3000);
    home.click_botonMoverAlCalendario();
    const maniana = moment().add(1, "day").format("DD/MM");
    const semanaSiguiente = moment().add(5, "days").format("DD/MM");
    cy.get(".slick-current > div > li > .trigger-schedule-clases").eq;
    console.log("********************", maniana);
    home.click_moverFechaAdelante();
    cy.wait(2000);
  });

  it("Mover la fecha del Schedule hacia atras", () => {
    cy.wait(3000);
    home.click_botonMoverAlCalendario();
    home.click_moverFechaAdelante();
    cy.wait(1000);
    home.click_moverFechaAtras();
    cy.wait(2000);
  });

  it("Seleccionar una fecha del Schedule", () => {
    home.click_botonMoverAlCalendario();
    cy.wait(7000);
    home.click_seleccionarFechaDelCalendario();
    cy.wait(2000);
  });

  it("Iniciar sesion en Wonderly", () => {
    home.click_Ingresar();
    ingresar.login();
    home.click_Wonderly();
  });

  it("Verificar que el boton Comprar en la categoria Explorador redireccione al formulario correspondiente", () => {
    ingresar.login();
    home.click_Wonderly();
    comprar.click_botonComprarExplorador();
    cy.get(".card-body > :nth-child(1)").should("be.visible");
    cy.wait(2000);
  });

  it("Verificar que el boton Comprar en la categoria Inventor redireccione al formulario correspondiente", () => {
    ingresar.login();
    home.click_Wonderly();
    comprar.click_botonComprarInventor();
    cy.get(".card-body > :nth-child(1)").should("be.visible");
    cy.wait(2000);
  });

  it("Verificar que el boton Comprar en la categoria Genio redireccione al formulario correspondiente", () => {
    ingresar.login();
    home.click_Wonderly();
    comprar.click_botonComprarGenio();
    cy.get(".card-body > :nth-child(1)").should("be.visible");
    cy.wait(2000);
  });

  // it("Verificar que el boton de WhatsApp redireccione correctamente", () => {
  //   home.click_botonWhatsapp;
  //   home.click_Enviar();
  // });
});
