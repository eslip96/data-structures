// 1
let person = {
  id: 1996,
  name: "Enoka Silipa",
  age: 28,
  dob: "1996-05-07",
  gradesCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  extraActivities: {
    serviceProject: "Food Drive",
    charity: {
      name: "John Hopkins",
    },
  },
  deleteMe: "Im a Virus",
};

console.log(
  `person ${person.id} has been through grade ${
    person.gradesCompleted[person.gradesCompleted.length - 1]
  }, etc...`
);

console.log(person);

delete person.deleteMe;
delete person.extraActivities;

console.log(person);

// 2

let user = {
  firstName: "Enoka",
  lastName: "Silipa",
  city: "Vernal",
  semesters: {
    semesterOne: "incomplete",
    semesterTwo: "incomplete",
    semesterThree: "incomplete",
    semesterFour: "incomplete",
  },
};

user.semesters.semesterOne = "complete";
user.semesters.semesterTwo = "complete";
user.semesters.semesterThree = "complete";

delete user.semesters.semesterFour;

user.favoriteLanguage = "Python";

console.log(user);
