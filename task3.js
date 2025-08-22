const employees = new Set([
  { name: "John", salary: 50000, department: "IT" },
  { name: "Jane", salary: 60000, department: "HR" },
  { name: "Bob", salary: 55000, department: "IT" },
  { name: "Sophie", salary: 75000, department: "HR" },
  { name: "Mike", salary: 65000, department: "IT" },
  { name: "Emily", salary: 80000, department: "HR" },
  { name: "David", salary: 70000, department: "IT" },
]);

function employ(set) {
  if (set.size === 0) {
    console.log("Error in set given");
    return;
  }

  let averageHR = 0, countHR = 0;
  let averageIT = 0, countIT = 0;

  Array.from(set).forEach(employee => {
    if (employee.department === "HR") {
      averageHR += employee.salary;
      countHR++;
    }
    if (employee.department === "IT") {
      averageIT += employee.salary;
      countIT++;
    }
  });

  averageHR = averageHR / countHR;
  averageIT = averageIT / countIT;

  let ans;
  if (averageHR > averageIT) {
    ans = [{ department: "HR", average: averageHR.toFixed(0) }];
  } else {
    ans = [{ department: "IT", average: averageIT.toFixed(0) }];
  }

  console.log(ans);
}

employ(employees);
