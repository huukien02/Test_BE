class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  // Method greeting sử dụng chung interface với function greet ở ngoài
  // Nhưng trả ra đoạn text khác nếu person là một đối tượng Person
  greeting(): void {
    console.log(`Hello, ${this.name}!`);
  }

  // Method printValue sử dụng chung interface với function printValue ở ngoài
  // Nhưng trả ra đoạn text khác nếu value là một chuỗi
  printValue(): void {
    console.log(`The value is a string: ${this.name}`);
  }
}

// Function greet sử dụng interface chung với method greeting của class Person
// Nhưng trả ra đoạn text khác nếu person là một đối tượng Person
function greet(person: Person | string): void {
  if (person instanceof Person) {
    person.greeting();
  } else if (typeof person === "string") {
    console.log(`Hello, ${person}!`);
  }
}

// Function printValue sử dụng interface chung với method printValue của class Person
// Nhưng trả ra đoạn text khác nếu value là một chuỗi
function printValue(value: string | number): void {
  if (typeof value === "string") {
    console.log(`The value is a string: ${value}`);
  } else if (typeof value === "number") {
    console.log(`The value is a number: ${value}`);
  }
}
