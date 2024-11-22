const tinderUser = new Object(); // here tinderUser is a singleton object
console.log(tinderUser); //{} (empty object)
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

console.log(tinderUser); //{ id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
  email: "some@gmail.com",
  fullName: {
    userFullName: {
      firstName: "Aditya",
      lastName: "Dubey",
    },
  },
};
console.log(regularUser); //{email: 'some@gmail.com',fullName: { userFullName: { firstName: 'Aditya', lastName: 'Dubey' } }}
console.log(regularUser.fullName); //{ userFullName: { firstName: 'Aditya', lastName: 'Dubey' } }
console.log(regularUser.fullName.userFullName); //{ firstName: 'Aditya', lastName: 'Dubey' }
console.log(regularUser.fullName.userFullName.lastName); // Dubey

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
// const obj3 = {obj1 , obj2};
// console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj3 = {...obj1,...obj2};
console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const users = [
    {
        id: 1,
        email : "hello@google.com"
    },
    {
        id: 1,
        email : "hello@google.com"
    },
    {
        id: 1,
        email : "hello@google.com"
    },
    {
        id: 1,
        email : "hello@google.com"
    },
]
console.log(users[0].email);

console.log(tinderUser);
console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ] (returns a array of keys)
console.log(Object.values(tinderUser)); // [ '123abc', 'Sammy', false ] (returns a array of values)
console.log(Object.entries(tinderUser)); //[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty("isLoggedIn")); // true (ye check karega ki tinderUser pe isLoggedIn naam ki property hai ya nahi)

