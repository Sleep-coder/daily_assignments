// STUDENT OBJECT
const student = {
  name: "Aarush",
  age: 21,
  grade: "A",
  subjects: ["CSS", "JAVASCRIPT", "HTML"],
};

// DISPLAY INFO FUNCTION
function displayInfo() {
  console.log(this.name, this.age, this.grade);
}
// BIND FUNCTION
const boundDisplayInfo = displayInfo.bind(student);

boundDisplayInfo();

// MOdified function

function displayInfo1(message) {
  console.log(message + this.name);
}

// invoking call and apply
displayInfo1.apply(student, ["Hello "]);
displayInfo1.call(student, "Good Morning ");

// function processSubjects

function processSubjects(callback) {
  student.subjects.forEach((subject) => callback(subject));
}

// Example callback function to print each subject
function printSubject(subject) {
  console.log(`Subject: ${subject}`);
}

// printSubject callback
processSubjects(printSubject);

// double grades
function doubleGrades(student) {
  // Use map to create a new array with doubled grades
  const doubledGrades = student.grade.map((grades) => ({
    grade: student.grade * 2,
  }));
  console.log("Original Grades:", this.grade);
  console.log("Doubled Grades:", doubledGrades);
}
doubleGrades(student);
