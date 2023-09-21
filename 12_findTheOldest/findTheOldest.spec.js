const findTheOldest = require('./findTheOldest')

describe('findTheOldest', () => {
  test('finds the person with the greatest age!', () => {
    const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970, // 28
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011, // 49
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941, // 29
      },
    ]
    expect(findTheOldest(people).name).toBe('Ray');
  });
  test('finds the person with the greatest age if someone is still living', () => {
    const people = [
      {
        name: "Carly",
        yearOfBirth: 2018, //5
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011, //49
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941, //29
      },
    ]
    expect(findTheOldest(people).name).toBe('Ray');
  });
  test('finds the person with the greatest age if the OLDEST is still living', () => {
    const people = [
      {
        name: "Carly",
        yearOfBirth: 1066, //956
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011, //49
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941, //29
      },
    ]
    expect(findTheOldest(people).name).toBe('Carly');
  });
});
