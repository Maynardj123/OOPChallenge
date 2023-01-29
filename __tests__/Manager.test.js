const Manager = require("../lib/Manager")

test("make sure the github works using the constructor", () => {
    const testValue = "gitHubUser"
    const employ = new Engineer("jacob",1,"jacobamaynard@gmail.com", testValue)
    expect(employ.github).toBe(testValue)
})

test("make sure getRole works", () => {
    const testValue = "Engineer"
    const employ = new Engineer("jacob",1,"jacobamaynard@gmail.com", testValue)
    expect(employ.getRole()).toBe(testValue)
})

test("make sure the github works using getGithub", () => {
    const testValue = "gitHubUser"
    const employ = new Engineer("jacob",1,"jacobamaynard@gmail.com", testValue)
    expect(employ.getGithub).toBe(testValue)
})