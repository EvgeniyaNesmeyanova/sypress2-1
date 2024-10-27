// describe('template spec', () => {
  
//   beforeEach(()=>{
//     cy.visit('/');
//   })

//   it('Бронирование мест', () => {
//     cy.get('a.page-nav__day:nth-of-type(4)').click();
//     cy.get('.movie').first().contains('13:00').click();
    
//     cy.fixture('seat').then((seats)=>{
//       seats.forEach((seat)=>{
//         cy.get(`.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})`).click();
//       })
//     })
    
//   })
// })