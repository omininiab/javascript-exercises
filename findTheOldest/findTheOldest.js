age = function (yearOfBirth, yearOfDeath = 0) {
  if (yearOfDeath == 0) {
    d = new Date();
    return d.getFullYear() - yearOfBirth;
  }
  return yearOfDeath - yearOfBirth;
};

let maxCallback2 = (max, cur) => Math.max(max, cur);

let findTheOldest = function (people) {
  people.map(
    (person) => (person.age = age(person.yearOfBirth, person.yearOfDeath))
  );

  return people.reduce((oldest, person) =>
    oldest.age > person.age ? oldest : person
  );
};

module.exports = findTheOldest;
