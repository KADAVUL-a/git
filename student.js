let students = [
  { name: "Bharani", marks: [80, 70, 60] },
  { name: "Thyagesh", marks: [90, 85, 95] }
];
let a = students.map(student => ({
  name: student.name,
  total: student.marks.reduce((sum, mark) => sum + mark, 0)
}));
console.log(a);
let highScorers = a.filter(student => student.total > 200);
console.log(highScorers);
let b = a.reduce((max, student) => {
  return student.total > max ? student.total : max;
}, 0);
console.log(b);
