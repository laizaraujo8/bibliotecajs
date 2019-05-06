const chai = require('chai');
const expect = chai.expect;
const valid = require('../lib/index');
describe('Validar CPF', () => {
  describe('Verificar números de CPF', () => {
    it('Retornar true para CPF válido 45227211531', () => {
      expect(valid.cpfValidator('45227211531')).to.equal(true);
    });
    it('Retornar true para CPF válido 92786436028', () => {
      expect(valid.cpfValidator('92786436028')).to.equal(true);
    });
    it('Retornar true para primeiro verificador 0 78512226307', () => {
      expect(valid.cpfValidator('78512226307')).to.equal(true);
    });
    it('Retornar true para segundo verificador 0 42086758880', () => {
      expect(valid.cpfValidator('42086758880')).to.equal(true);
    });
    it('Retornar false para CPF inválido 45227211533', () => {
      expect(valid.cpfValidator('45227211533')).to.equal(false);
    });
  });
  describe('Verificar números de CPF iguais', () => {
    it('Retornar false para 11111111111', () => {
      expect(valid.cpfValidator('11111111111')).to.equal(false);
    });
    it('Retornar false para 00000000000', () => {
      expect(valid.cpfValidator('00000000000')).to.equal(false);
    });
    it('Retornar false para 55555555555', () => {
      expect(valid.cpfValidator('55555555555')).to.equal(false);
    });
  });
  describe('Verificar se foi digitado os 11 números padrão', () => {
    it('Retornar false para 10 números digitados 9278643602', () => {
      expect(valid.cpfValidator('9278643602')).to.equal(false);
    });
    it('Retornar false para 12 números digitados 927864360285', () => {
      expect(valid.cpfValidator('927864360285')).to.equal(false);
    });
    it('Retornar false para 5 números iguais digitados 22222', () => {
      expect(valid.cpfValidator('22222')).to.equal(false);
    });
  });
  describe('Verificar se foi aceito caracteres separadores', () => {
    it('Retornar true para CPF válido mesmo com caracteres separadores 452.272.115-31', () => {
      expect(valid.cpfValidator('452.272.115-31')).to.equal(true);
    });
    it('Retornar false para CPF inválido mesmo com caracteres separadores 802.683.114-45', () => {
      expect(valid.cpfValidator('802.683.114-45')).to.equal(false);
    });
  });
  describe('Verificar caracteres inválidos', () => {
    it('Retornar false se for number', () => {
      expect(valid.cpfValidator(45227211531)).to.equal(false);
    });
    it('Retornar false para letras Abc.dEf.Ghi-jK', () => {
      expect(valid.cpfValidator('Abc.dEf.Ghi-jK')).to.equal(false);
    });
    it('Retornar nada caso o campo esteja vazio: ""', () => {
      expect('').to.be.empty;
    });
  });
});
