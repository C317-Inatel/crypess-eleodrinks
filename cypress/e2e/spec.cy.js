describe("Criando cenários de testes para o site da Elo Drinks", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/");
  });

  const secoes = [
    { id: "#btn-home", secao: "#home" },
    { id: "#btn-sobre", secao: "#sobre" },
    { id: "#btn-servicos", secao: "#servicos" },
    { id: "#btn-cardapio", secao: "#cardapio" },
    { id: "#btn-galeria", secao: "#galeria" },
    { id: "#btn-contato", secao: "#contato" },
    { id: "#btn-conhecaservicos", secao: "#servicos" },
  ];

  it("deve rolar para cada seção ao clicar no botao correspondente", () => {
    secoes.forEach(({ id, secao }) => {
      cy.get(id).click();

      cy.wait(400);

      cy.get(secao)
        .should("be.visible")
        .and(($el) => {
          const rect = $el[0].getBoundingClientRect();
          expect(rect.top).to.be.greaterThan(-5);
          expect(rect.top).to.be.lessThan(300);
        });

      cy.scrollTo("top");
    });
  });

  it("deve mostrar a opção do cardápio ao clicar no botão", () => {
    cy.contains("button", "Clássicos").click();
    cy.contains("button", "Autorais").click();
    cy.contains("button", "Especiais").click();
  });

  it("deve mostrar o feedbakc dos clientes no carrossel", () => {
    cy.get('button[aria-label="Próximo depoimento"]').click();
  });

    it("deve preencher o orçamento", () => {
      cy.get('[data-component-line="163"] > .flex').type("Ana");
      cy.get('[data-component-line="169"] > .flex').type("Fazenda");
      cy.get('[data-component-line="175"] > .flex').type("ana@gmail.com");
      cy.get('[data-component-line="181"] > .flex').type("999999999");
      cy.get('[data-component-line="187"] > .flex').type("Evento de teste");
      cy.get('[data-component-line="193"] > .flex').type("2025-06-04");
      cy.get('[data-component-line="199"] > .flex').type("18:00");
      cy.get('[data-component-line="205"] > .flex').type("100");
      cy.get('[data-lov-name="SelectTrigger"]').click();
      cy.contains("Balcão próprio").click({ force: true });

      const drinks = {
        tradicionais: ["Cerveja", "Gin", "Vodka", "Whisky", "Drinks clássicos",],
        especiais: ["Moscow Mule", "Basil Smash", "Penicilin", "Fitzgerald", "Classic Tonic",],
        softs: ["Cirque Blue", "Pink Lemonade", "Pina Descolada", "Lichia Paradise", "Sonho Brilhante",],
      };

      Object.values(drinks).forEach((categoria) => {
        categoria.forEach((drink) => {
          cy.contains(drink).click({ force: true });
        });
      });

      cy.get(':nth-child(13) > .flex').clear().type("3");
      cy.get(':nth-child(14) > .flex').clear().type("2");
      cy.get(':nth-child(15) > .flex').clear().type("1");
      cy.get(':nth-child(16) > .flex').clear().type("1");

      cy.get('[data-component-line="302"] > .flex').type("Observações do teste")
      cy.get('form > .inline-flex').click();

  });
});
