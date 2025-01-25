// if

const score = 200;
if (score > 100) {
  const power = "fly";
  console.log(`User power : ${power}`);
}

// shorthand notation

const balance = 5000;
if (balance > 500) console.log("test"); // semicolon is important

// if else

const temperature = 41;
if (temperature < 50) {
  console.log("temperature is less than 50");
} else {
  console.log("temperature is greeater than 50");
}

// else if

if (balance < 50) {
  console.log("less than 500");
} else if (balance < 750) {
  console.log("less than 750");
} else if (balance < 900) {
  console.log("less than 900");
} else {
  console.log("less than 1200");
}

const isUserLoggedin = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (isUserLoggedin && debitCard) {
  console.log("Allowed to buy");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("user logged in");
}

