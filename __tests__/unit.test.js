// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// for isPhoneNumber
test('should return true', () => {
  expect(isPhoneNumber("951-888-8888")).toBe(true);
});
test('should return true', () => {
  expect(isPhoneNumber("(951) 111-7778")).toBe(true);
});
test('should return false', () => {
  expect(isPhoneNumber("951")).toBe(false);
});
test('should return false', () => {
  expect(isPhoneNumber("")).toBe(false);
});


// for isEmail
test('should return true', () => {
  expect(isEmail("wowbingo@gmail.com")).toBe(true);
});
test('should return true', () => {
  expect(isEmail("420blazeit@yahoo.com")).toBe(true);
});
test('should return falsee', () => {
  expect(isEmail("helloworld")).toBe(false);
});
test('should return false', () => {
  expect(isEmail("")).toBe(false);
});

// for isStrongPassword
test('should return true', () => {
  expect(isStrongPassword("saviiscool")).toBe(true);
});
test('should return true', () => {
  expect(isStrongPassword("s919191")).toBe(true);
});
test('should return true', () => {
  expect(isStrongPassword("")).toBe(false);
});
test('should return true', () => {
  expect(isStrongPassword("$")).toBe(false);
});

// for isDate
test('should return true', () => {
  expect(isDate("12/1/2023")).toBe(true);
});
test('should return true', () => {
  expect(isDate("01/23/1469")).toBe(true);
});
test('should return true', () => {
  expect(isDate("")).toBe(false);
});
test('should return true', () => {
  expect(isDate("420")).toBe(false);
});

// for isHex
test('should return true', () => {
  expect(isHexColor("#000000")).toBe(true);
});
test('should return true', () => {
  expect(isHexColor("#FFF")).toBe(true);
});
test('should return true', () => {
  expect(isHexColor("")).toBe(false);
});
test('should return true', () => {
  expect(isHexColor("42")).toBe(false);
});