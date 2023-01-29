const Employee = require("../lib/Employee");

test("creating a new employee", () => {
    const employ = new Employee();
    expect(typeof(employ)).toBe("object")
})

test("does the name value work", () => {
    const employ = new Employee(jacob);
    expect(typeof(employ.name)).toBe("jacob")
})

test("does the id value work", () => {
    const employ = new Employee(jacob, id)
    expect(typeof(employ.id)).toBe(id)
})

test("does the email value work", () => {
    const employ = new Employee(jacob, 2, email)
    expect(typeof(employ.email)).toBe(email)
})

test("")