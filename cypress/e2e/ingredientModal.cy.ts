import { email, password } from "../fixtures/loginRequest.json";

import "@4tw/cypress-drag-drop";

describe("Test on open ingredient modal", function () {
  beforeEach(function () {
    // Посещаем главную страницу
    cy.visit("");

    // Добавляем ингредиенты
    cy.get("[class^=IngredientCard_cardContainer]").as("ingredients");
    cy.get("@ingredients").first().as("bun");
    cy.get("@ingredients").eq(3).as("ingredient");

    // Добавляем заглушки
    cy.get("[class^=EmptyElement_container__]").as("plugs");

    // Добавляем Drop Zone
    cy.get("[class^=BurgerConstructor_burgerConstructor]").as("dropTarget");
  });

  it("should find ingredients on the page", function () {
    cy.get("@ingredients").should("have.length.at.least", 3);
  });

  it("should open modal, check content and then close it", function () {
    // Открытие модального с деталями ингредиентов
    cy.get("@ingredients").first().click();

    // Проверяем правильность информации об ингредиенте
    cy.get("h2[class^=Modal_title]").should("exist");
    cy.get("[class^=IngredientDetails_title]").should(
      "have.text",
      "Краторная булка N-200i"
    );
    cy.get("li[class^=IngredientDetails_nutrientsItem]").as("nutrients");
    cy.get("@nutrients").first().should("contain", 420);
    cy.get("@nutrients").last().should("contain", 53);
    cy.get("[class^=Modal_closeButton__]").click();
  });

  it("should test dnd and order functionality", function () {
    // Проверяем заглушки
    cy.get("@plugs").should("have.length", 3);
    cy.get("@plugs").first().contains("Выберите булку");
    cy.get("@plugs").eq(1).contains("Добавьте ингредиенты");
    cy.get("@plugs").last().contains("Выберите булку");

    // DnD bun
    cy.get("@bun").drag("@dropTarget");

    // Проверяем наличие булки в конструкторе
    cy.get("@plugs").should("exist").and("have.length", 1);
    cy.get("span[class=constructor-element__text]")
      .first()
      .contains("Краторная булка N-200i (верх)");

    // DnD ingredient
    cy.get("@ingredient").drag("@dropTarget");

    // Проверяем наличие ингредиента в конструкторе
    cy.get("@plugs").should("have.length", 0);
    cy.get("span[class=constructor-element__text]")
      .eq(1)
      .contains("Соус фирменный Space Sauce");

    // Проверяем функциональность кнопки "Оформить заказ"
    cy.get("button").contains("Оформить заказ").click();

    // Запросы
    cy.intercept("POST", "api/auth/login", {
      fixture: "userResponse.json",
    }).as("loginRequest");
    cy.intercept("GET", "api/auth/user", {
      fixture: "loginResponse.json",
    });

    // Заполняем форму
    cy.get("[name=email]").type(`${email}{enter}`);
    cy.get("[name=password]").type(`${password}{enter}`);

    // Нажимаем кнопку повторно
    cy.get("button").contains("Оформить заказ").click();

    // Проверяем тело заказа
    cy.intercept("POST", "api/orders", {
      fixture: "orderResponse.json",
    }).as("orderRequest");

    // Проверяем содержимое заказа
    cy.get("[class^=OrderModal_orderId]").contains("1337");
    cy.get("[class^=OrderModal_title]").contains("Test burger name");

    // Проверяем закрытие модалки
    cy.get("[class^=Modal_closeButton__]").click();
  });
});

