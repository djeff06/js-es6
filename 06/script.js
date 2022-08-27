const job = { salary: 4000, title: "Developer" };
const details = { format: "Full-Time", experience: 4 };
const jobInfo = {...job, ...details};

/*
Combine the properties of job (object) using the spread operator into jobInfo (object)

-Desired outcome:

console.log(jobInfo) // {salary: 4000, title: "Developer", format: "Full-Time", experience: 4}

*/


console.log(jobInfo) 