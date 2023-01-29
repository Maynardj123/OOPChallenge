const Manager = require("../lib/Manager")

test("make sure the office number works using the constructor", () => {
    const testValue = 123
    const employ = new Manager("jacob",1,"jacobamaynard@gmail.com", testValue)
    expect(employ.officeNumber).toBe(testValue)
})

test("make sure getRole works", () => {
    const testValue = "Manager"
    const employ = new Manager("jacob",1,"jacobamaynard@gmail.com", 123)
    expect(employ.getRole()).toBe(testValue)
})

test("make sure the office number works using getOfficeNumber", () => {
    const testValue = 123
    const employ = new Manager("jacob",1,"jacobamaynard@gmail.com", testValue)
    expect(employ.getofficeNumber()).toBe(testValue)
})