//To run on terminal:   node.filename.js

/**
 * In these tasks you will need to manipulate the array below in order to answer the questions. Some answers will require you to store the result in a variable, others will need you to inspect the whole array.
 */

 stations = ["Dundee", "Edinburgh", "North Berwick", "Newcastle", "York", "Leeds", "Doncaster", "Peterborough"];

/**
 * Q1.
 * The East Coast Main Line doesn't stop at Peterborough! Add London Kings Cross to the end of the array to complete the line.
 */

//To remove Peterborough:
stations.pop();

//To add London Kings Cross at the end:
stations.push("London Kings Cross");

//Print out updated array of stations:
//console.log(stations);


/**
 * Q2.
 * It doesn't go as far as Dundee either, so remove it from the start of the array.
 */
//To remove first index from array:
stations.shift();
console.log(stations);


/**
 * Q3.
 * How many stations are on the line?
 */

 // make variable called stationCount:
 stationCount = stations.length;

 console.log("There are " + stationCount + " stations.");


 /**
 * Q4.
 * Which station is the third stop?
 */

thirdStation = stations[2];

console.log("The third station is " + thirdStation);

/**
 * Q5.
 * Someone put the wrong Berwick on the timetable! Update "North Berwick" to "Berwick-upon-Tweed".
 */

stations[1] = "Berwick-upon-Tweed"
console.log(stations);


