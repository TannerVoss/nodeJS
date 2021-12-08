const path = require("path");
const fs = require("fs");
const fetch = require("node-fetch"); // npm install node-fetch

// chirps = "post on a timeline" user and content

/* // Part 1
const chirps = [{ // create an array of 5 "chirps"
        Name: "John Dutton",
        Chirp: "Chirp1",
    },
    {
        Name: "Rip",
        Chirp: "Chirp2",
    },
    {
        Name: "Beth Dutton",
        Chirp: "Chirp3",
    },
    {
        Name: "Kayce Dutton",
        Chirp: "Chirp4",
    },
    {
        Name: "Jamie Dutton",
        Chirp: "Chirp5",
    },
];
// need to create a chirps.json file. Can use appendFile or writeFile. writeFile will overwrite existing data with new data.

const filePath = path.join(__dirname, "../chirps.json"); // use path module and join method to select where it's going to go (root directory). 2 periods goes UP a directory to the route. out of the Server folder. Used the path to join to the file we will be creating.*/

// *****PART 2 ******

// ** 14. Write the array to a file in the root of your project called popular-articles.json. out of server, into articles and popular-articles.json
const filePath = path.join(__dirname, "../articles/popular-articles.json");

fetch("https://reddit.com/r/popular.json")
    .then((res) => res.json())
    .then((res) => console.log(res));




/* 
********PART 1********

fs.writeFile(filePath, JSON.stringify(chirps), (err) => { // ***** Write the array toa  afile in teh root of hte project called chirps.json *****
    //takes in the path to this file as well as the data (chirps array). Stringify them to be able to read
    // callback when file is written with data given, if there is an error it will pass it in.
    if (err) {
        console.error(err); //log the error
        return;
    }
    console.log("Successfully created a file");

    fs.readFile(filePath, (err, data) => { // takes in an error and passes in the data that's read
        console.log(JSON.parse(data), "Good job, Tanner! You fucking idiot, you did it!");
    });
});

*/