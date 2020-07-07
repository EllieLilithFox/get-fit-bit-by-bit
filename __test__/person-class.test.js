import { Person } from "../src/person-class.js";

describe('create Person class instance', () => {

  test('should create Person class instance', () => {
    const newPerson = new Person("Sue", 140);
    
    expect(newPerson).toMatchObject({
      name : "Sue",
      weight: 140
    });
  });
});

