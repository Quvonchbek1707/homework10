const students = new Set([
  { name: "Alice", scores: [90, 85, 92] },
  { name: "Bob", scores: [75, 80, 85] },
  { name: "Charlie", scores: [90, 95, 85] },
  { name: "Jack", scores: [100, 100, 100] }
]);

function topStudent(set){
    set.forEach(student => {
        const total = student.scores.reduce((sum, score) => sum + score, 0);
        const average = total / student.scores.length;
        student.scores = [average];
    });
    let maxScore = 0;
    set.forEach(student => {
        if (student.scores[0] > maxScore) maxScore = student.scores[0];
    });
    const topStudents = []
    set.forEach(student => {
        if (student.scores[0] === maxScore) {
        topStudents.push(student);
        }
    });
    return topStudents
}

console.log(topStudent(students))