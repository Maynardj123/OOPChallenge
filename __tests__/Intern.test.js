const Intern = require("../lib/Intern")

test("make sure the school works using the constructor", () => {
    const testValue = "UT"
    const employ = new Intern("jacob",1,"jacobamaynard@gmail.com", testValue)
    expect(employ.school).toBe(testValue)
})

test("make sure getRole works", () => {
    const testValue = "Intern"
    const employ = new Intern("jacob",1,"jacobamaynard@gmail.com", "UT")
    expect(employ.getRole()).toBe(testValue)
})

test("make sure the school works using getSchool", () => {
    const testValue = "UT"
    const employ = new Intern("jacob",1,"jacobamaynard@gmail.com", testValue)
    expect(employ.getSchool()).toBe(testValue)
})