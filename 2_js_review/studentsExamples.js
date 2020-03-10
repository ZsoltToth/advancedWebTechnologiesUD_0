
var students = [
    { name : "Alice", score : 42},
    { name : "Bob", score : 59},
    { name : "Charlie", score : 87},
    { name : "Denis", score : 21},
];

var avgScore = students.reduce(
    (total, current)=>{
        return total + current.score}
    ,0) / students.length;

console.log(avgScore);
//Filter out the failed students
console.log(students.filter((student)=>{
    return student.score >= 50;
}));
students.map((student)=>{
    var result = student.score >= 50 ? "passed" : "failed";
    console.log("%s has %s", student.name, result);
});
