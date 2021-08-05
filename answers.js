// Answer the Following

// For each of the following, write which datatypes you would use to represent the data, and then give a small example of the data structure:


// A light switch that can be either on or off.
// datatype: boolean
// data structure: const isLightOn = true;

// A user's email address.
// datatype: string
// data structure: const userOne = { username: userOne, email: user@user.com } (string stored in object)

// A spaceship with a hull, laser blasters, tractor beam, and warp drive.
// datatype: array
// data structure: const spaceshipProperties = [hull, laser blasters, tractor beam, warp drive]
// 
// A list of student names from our class.
// datatype: array
// data structure: const students = [x, y, ... , z]

// A list of student names from our class, each with a location.
// datatype: array of objects
// data structure: const students = [{ name: x, location: blah}, {name: y, location: blah}, ...]

// A list of student names from our class, each with a location and each with a list of favorite tv shows.
// datatype: array of objects with an array

// data structure: const students = [{ name: x, location: blah, favoriteshows: [x, y, z]}, {name: y, location: blah, favoriteshows: [x, y, z]}, ...]

// Take it Easy

//     Make an array that holds all of the colors of the rainbow.
const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

//     Write code that will access "blue" from the rainbow array.
console.log(rainbow[4]);

//     Make an object that is called your name and holds the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype.
const andrew = {
    favfood: 'steak',
    hobby: 'fishing',
    currenttown: 'columbus, oh',
    favdatatype: 'boolean'
};

//     Write code that will access your hobby from the object that you just created.
console.log(andrew.hobby);

// Crazy Object!

const crazyObject = {
    taco: [{meat: 'steak',
           cheese: ['panela', 'queso', 'chihuahua']},
           {meat: 'chicken',
            salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
          ],
    larry: {
      nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
      quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
      characters: [{
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
      ]
    }
  }

//   Use crazy Object to log the following.

//     "omg my mouth is burning"
console.log(crazyObject.taco[1].salsa[5]);

//     "Pretty pretty prettayyyyy good"
console.log(crazyObject.larry.quotes[0]);

//     "Swearing at Larry and Jeff"
console.log(crazyObject.larry.characters[2].favourtieHobby);

//     "Chicken Teriyaki Boyyyyyy"
console.log(crazyObject.larry.nicknames[1]);

//     The object the contains the name funkhauser
console.log(crazyObject.larry.characters[1].name);

//     Add the quote "I'm trying to elevate small talk to medium talk" to Larry's quote array. Confirm that it was added.
crazyObject.larry.quotes.push('I\'m trying to elevate small talk to medium talk');
console.log(crazyObject.larry.quotes);