// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
  }
  
  const toys = [
    new Toy("Action Figure", 14.99, 5),
    new Toy("Rare Toy", 17.99, 1)
  ];
  
  module.exports = {
    Toy,
    toys
  };
  