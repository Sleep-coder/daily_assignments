// STUDENT OBJECT
const student = {
  name: "Aarush",
  age: 21,
  grade: "A",
  subjects: [
    { name: "CSS", grade: 80 },
    { name: "JAVASCRIPT", grade: 65 },
    { name: "HTML", grade: 90 },
  ],
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

function processSubjects(arrSub, callback) {
  arrSub.forEach((subject) => {
    callback(subject);
  });
}

// Callback function to display each subject
function printSubject(subject) {
  console.log(`Subject: ${subject.name}, Score: ${subject.grade}`);
}

// Applying the processSubjects function with the displaySubject callback
processSubjects(student.subjects, printSubject);

// double grades
function doubleGrades(student) {
  const originalGrades = student.subjects.map((subject) => subject.grade);

  const modifiedGrades = student.subjects.map((subject) => {
    return {
      name: subject.name,
      grade: subject.grade * 2,
    };
  });

  console.log("Original Grades:", originalGrades);
  console.log(
    "Modified Grades:",
    modifiedGrades.map((subject) => subject.grade)
  );
}

doubleGrades(student);

// passing grade
function passingSubjects(passingGrade = 70) {
  // Use filter to find subjects with grades above passingGrade
  const passingSubjects = student.subjects.filter(
    (subject) => subject.grade >= passingGrade
  );

  if (passingSubjects.length > 0) {
    console.log(`Passing Subjects (grade >= ${passingGrade}):\n`);
    for (const subject of passingSubjects) {
      console.log(`- ${subject.name}: ${subject.grade}`);
    }
  } else {
    console.log(`No subjects found with passing grade (>= ${passingGrade})`);
  }
}

// Call the function
passingSubjects();
