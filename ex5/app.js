/*
[]
    syntax to create objects
        const varName = { key1,property : value1, key2 : value2,... }

        assign values from object
        varName.key1
        varName["key1"]
*/
// const car = {
//   name: "Ford",
//   model: "Mustang",
//   year: 2025,
//   color: ["red", "blue", "black"],
//   a: { a1: 1, a2: 2 },
// };

// console.log(car);
// console.log("Name : " + car.name);
// console.log("Model : " + car["model"]);
// console.log("Year : " + car["year"]);
// console.log("color : " + car["color"][1]);
// console.log("A : " + car["a"]["a1"]);

// console.log("Person 1 name :  " + person[0]["name"]);
// console.log("Person 1 gender :  " + person[0]["gender"]);
// console.log("Person 1 age :  " + person[0]["age"]);

// for (let i = 0; i < person.length; i++) {
//   //   console.log(person[i]);
//   console.log(
//     person[i]["name"] + "  " + person[i]["gender"] + "  " + person[i]["age"]
//   );
// }

// let findPerson = person.find((e) => e.age > 18);

// let filering = person.filter((e) => e.age > 18);

// console.log(findPerson);

// console.log(filering);

const person = [
  {
    name: "Dara",
    gender: "male",
    age: 25,
    profile:
      "https://i.pinimg.com/736x/7f/ff/68/7fff6829e61d1924c44d8cb5a0cfbdff.jpg",
  },
  {
    name: "Sok",
    gender: "male",
    age: 19,
    profile:
      "https://i.pinimg.com/736x/ed/98/74/ed98740d5cb66b0cf680666966fbc0e3.jpg",
  },
  {
    name: "lyly",
    gender: "female",
    age: 17,
    profile:
      "https://i.pinimg.com/736x/0f/3b/48/0f3b480da13ed1866f13b658fecd270e.jpg",
  },
  {
    name: "ABC",
    gender: "female",
    age: 17,
    profile:
      "https://i.pinimg.com/736x/0f/3b/48/0f3b480da13ed1866f13b658fecd270e.jpg",
  },
];

person.forEach(function (e) {
  document.querySelector(".list").innerHTML += `
   <li>
        <div class="profile">
            <img
              src=${e["profile"]}
              alt=""
            />
        </div>
          <span> ${e["name"]} </span>
          <span>  ${e["age"]} Year</span>
    </li>
  `;
});

function greet(name, callback) {
  console.log("Hello" + name);

  callback();
}

function goodBye() {
  console.log("Goodbye !");
}
greet("DaRith", goodBye);
