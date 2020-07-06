import { Person } from "../src/person-class.js";

describe('create Person class instance', () => {

  test('should create Person class instance', () => {
    const newPerson = new Person("Sue", "female", 33, 65, 140);
    
    expect(newPerson).toMatchObject({
      name : "Sue",
      gender: "female",
      age: 33,
      height: 65,
      weight: 140
    });
  });
});

