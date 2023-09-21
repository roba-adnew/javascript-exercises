const findTheOldest = function(people) {
    const older = people.sort((p1, p2) => {

        const living = new Date().getFullYear();

        const p1YearOfDeath = p1.yearOfDeath ? p1.yearOfDeath : living;
        const p1Age = p1YearOfDeath - p1.yearOfBirth;

        const p2YearOfDeath = p2.yearOfDeath ? p2.yearOfDeath : living;
        const p2Age = p2YearOfDeath - p2.yearOfBirth;

        return p1Age > p2Age ? 1 : -1
    })
    return older[older.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
