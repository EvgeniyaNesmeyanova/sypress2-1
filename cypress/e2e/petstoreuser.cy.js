
const newUser = require('../fixtures/newUser.json');
const updateUser = require('../fixtures/updateUser.json')


describe ('API-test user', () => {

 
  it('создание пользователя', () => {
    cy.request('POST', 'https://petstore.swagger.io/v2/pet', newUser).then((response) => { 
    expect(response.status).to.equal(200);
    // cy.log(response.body.id);
    // cy.log(newUser.id);
    expect(response.body.id).equal(newUser.id)
    });
    });
    
    it('получение имени пользователя', () => {
    cy.request('GET', '/Petr98').then((response) => {
    expect(response.status).to.equal(200);
    //cy.log(response.body.username);
    });
    })
    
    it('изменение имени пользователя', () => {
    cy.request('GET', '/login?username=Petr98&password=1111',
    ).then((response) => {
    expect(response.status).to.equal(200);
    cy.request('PUT', '/Petr98', updateUser).then((response) => {
    expect(response.status).to.equal(200);
    });
    cy.request('GET', '/Petr908').then((response) => {
    expect(response.status).to.equal(200);
    });
    });
    });
    
    it('удалить пользователя по имени', () => {
    cy.request('DELETE', 'user/Petr908').then((response) => {
    expect(response.status).to.equal(200);
    });
    cy.request({ method: 'GET', url: 'user/Petr908', failOnStatusCode: false }).then(
    (response) => {
    expect(response.status).to.equal(200);
    });
    })
    
  })