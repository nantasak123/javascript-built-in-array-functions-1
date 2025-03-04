const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students,currentValue) {
  // Start coding here
  return students + currentValue
}
function onlyNumber(number){
  return number.score
}
let result = students.map(onlyNumber)
let averageNumber = (result.reduce(getAverageStudentScore)) / result.length
console.log(averageNumber)  