class Employee {
  constructor(public name: string, public age: number) {}
}

class Person {
  constructor(public name: string, public age: number) {}
}

let employee: Employee = new Person("Name", 20); // perfectly fine!
let person: Person = new Employee("Name", 10); // perfectly fine!

class BankEmployee {
  constructor(
    public name: string,
    public age: number,
    public secretEmail: string
  ) {}
}

let bankEmployeeWithoutInheritance: Employee = new BankEmployee(
  "a",
  2,
  "email"
);
