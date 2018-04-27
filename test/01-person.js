const Person = artifacts.require('Person')

chai = require('chai')
chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

expect = chai.expect

contract('Person', accounts => {
  describe('Contract', () => {
    it('should get an instance', () => {
      Person.deployed()
        .then(instance => {
          person = instance
          expect(person).not.to.be.null
        })
    })
  })

  describe('Variables', () => {
    describe('Name', () => {
      it('should save the person name', () => {
        person.setName('John Doe')
          .then(response => {
            expect(response.tx).to.match(/\w{66}/)
          })
      })

      it('should retrieve the name saved before', () => {
        person.name()
          .then(name => {
            expect(name).to.be.equal('John Doe')
          })
      })

      it('should reject transactions from unauthorized accounts', () => {
        expect(person.setName('Jane Doe', {from: accounts[5]}))
          .to.be.eventually.rejected
      })

      it('should retrieve the name saved originally', () => {
        person.name()
          .then(name => {
            expect(name).to.be.equal('John Doe')
          })
      })
    })
  })
})
