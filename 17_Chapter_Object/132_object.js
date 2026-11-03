let a={
    name:"Bhavin"
}

let a1={status:"Pass"};
console.log(a.status);
console.log(a["status"]);

//Keys are case sensitive

// keys are case sensitive.
let a22 = { status: "pass", Status: "fail" };
console.log(a22["status"]);
console.log(a22["Status"]);
