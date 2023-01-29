const Employee = require("../lib/Employee");

test("creating a new employee", () => {
    const employ = new Employee();
    expect(typeof(employ)).toBe("object")
})

test("does the name value work", () => {
    const name = "jacob"
    const employ = new Employee(name);
    expect(typeof(employ.name)).toBe(name)
})

test("does the id value work", () => {
    const id= 1
    const employ = new Employee("jacob", id)
    expect(typeof(employ.id)).toBe(id)
})

test("does the email value work", () => {
    const email = "jacobamaynard@gmail.com"
    const employ = new Employee(jacob, 2, email)
    expect(typeof(employ.email)).toBe(email)
})

test("make sure the getName works", () => {
    const testName = "jacob"
    const employ = new Employee(testName)
    expect(employ.getName()).toBe(testName)
})

test("make sure the getId works", () => {
    const testId = 1
    const employ = new Employee("jacob", testId)
    expect(employ.getId()).toBe(testId)
})

test("make sure the getEmail works", () => {
    const testEmail = "jacobamaynard@gmail.com"
    const employ = new Employee("jacob",1,testEmail)
    expect(employ.getEmail()).toBe(testEmail)
})

test("make sure the getRole works", () => {
    const testValue = "Employee"
    const employ = new Employee("jacob", 1, "jacobamaynard@gmail.com")
    expect(employ.getRole()).toBe(testValue)
})