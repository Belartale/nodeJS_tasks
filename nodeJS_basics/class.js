// cl;
// class Animal {
//   static type = "TYPE ANIMAL";
//   constructor(params) {
//     this.name = params.name;
//     this.age = params.age;
//     this.has = params.has;
//   }

//   voice() {
//     console.log("I am Animal");
//   }
// }

// // const animal = new Animal({
// //   name: "Dog",
// //   age: 5,
// //   has: false,
// // });

// class Cat extends Animal {
//   static type = "CAT";

//   constructor(params) {
//     super(params);
//     this.color = params.color;
//   }
//   voice() {
//     super.voice(); // вызывает родительский метод
//     console.log("I am cat!!!!");
//   }

//   get ageInfo() {
//     return this.age * 7;
//   }

//   set ageInfo(newAge) {
//     this.age = newAge;
//   }
// }

// const cat = new Cat({
//   name: "name Cat",
//   age: 2,
//   has: true,
//   color: "red",
// });
