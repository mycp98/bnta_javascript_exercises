// node objects.js
/**
 * In these tasks you will need to manipulate the object below in order to answer the questions. Some answers will require you to store the result in a variable, others will need you to inspect the whole array.
 */

 dog = {
    name: "Poppy",
    age: 4,
    breed: "Springer Spaniel",
    colours: ["white", "brown"],
}

cat = {
    name: "Morris",
    age: 9,
    breed: "European Shorthair",
    colours: ["black", "white"]
}

tortoise = {
    name: "Ella",
    age: 7,
    breed: "Eastern Hermanns",
    colours: ["yellow", "brown", "black"]
}

/**
 * Q1. What's the name of the dog?
 */

 dogName = dog.name;

 console.log("The dog's name is " + dogName);


 /**
 * Q2. What breed is the cat?
 */

catBreed = cat.breed;

console.log("The cat is a " + catBreed);


/**
 * Q3. It's the tortoise's birthday! Add one to her current age.
 */

tortoise.age = tortoise.age + 1;

console.log(tortoise)

/**
 * Q4. How many different colours is Poppy?
 */

dogColourCount = dog.colours.length;

console.log("The dog has " + dogColourCount + " different colours");


/**
 * Q5. I've just bought a 12-year-old African Grey parrot called Chanel. Create an object for her.
 */

 parrot = {
    name: "Chanel",
    age: 12,
    breed: "African Grey",
    colours: ["grey", "white"]
 };

 console.log(parrot);