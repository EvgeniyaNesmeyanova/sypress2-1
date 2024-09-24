import tests from '../fixtures/seats.json';
describe('Бронирование билетов', () => {

  beforeEach(()=>{
    cy.visit('/');
  })

  it('Проверка недели на 7 дней', () => {
    cy.get('a.page/nav__day').should('have.length', 7);
  })

  cy.fixture('tests').then((tests)=>{
      tests.forEach((test)=>{
        it(test.name,(test)=>{
           cy.get('a.page-nav__day:nth-of-type(4)').click();
           cy.get('.movie').first().contains('13:00').click();
           test.data.forEach((seat) => {
               cy.get(`.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})`).click();
           })
           cy.get('.acceptin-button').click();
           cy.contains('Вы выбрали билеты:').should('be.visible');

        })
      })
  })

})