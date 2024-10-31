//const { expect } = require("chai")

describe ('Питомцы', () => {

 
    it('Создание питомца', () => {

      const newID=100500
      const newname="Bim"
      
      cy.request ('POST', 'https://petstore.swagger.io/v2/pet', {
  "id": newID,
  "category": {
    "id": 0,
    "name": "string"
  },
  "name": "FooBar",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"  
    }).then((response)=>{
      cy.log(response)
      expect(response.status).eq(200);
      expect(response.body.id).eq(newID)


      cy.request ('https://petstore.swagger.io/v2/pet/' + newID).then((res)=>{
       expect(res.status).eq(200);
       expect(res.body.id).eq(newID)
       cy.log(response.body.name)
      }) 


      cy.request ('PUT', 'https://petstore.swagger.io/v2/pet', {
        "id": newID,
        "category": {
          "id": 0,
          "name": "string"
        },
        "name": newname,
        "photoUrls": [
          "string"
        ],
        "tags": [
          {
            "id": 0,
            "name": "string"
          }
        ],
        "status": "available"
      }).then((response)=>{
            cy.log(response)
            expect(response.status).eq(200);
            expect(response.body.name).eq(newname)
            expect(response.body.id).eq(newID)
            cy.log(response.body.name)
      })


      cy.request ('DELETE','https://petstore.swagger.io/v2/pet/' + newID).then((res)=>{
        expect(res.status).eq(200);
        
       }) 



      cy.request ({
        url: 'https://petstore.swagger.io/v2/pet/' + newID, failOnStatusCode: false

      }).then((res)=>{
        expect(res.status).eq(404)
      }) 

  })


  })

})
