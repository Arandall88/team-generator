// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Intern = require("../lib/Intern");
    
test("Can set school via contructor", () => {
  const testValue = "UCLA";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});
test('getRole() should return "Intern"', () => {
  const e = new Intern();
  expect(e.getRole()).toBe(testValue);
});
test("Can get school via getSchool()", () => {
  const testValue= new "UCLA";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(getSchool()).toBe(testValue);
});
 