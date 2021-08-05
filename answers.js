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