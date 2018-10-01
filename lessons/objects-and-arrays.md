---
order: 13
title: "Objects and Arrays"
path: "/objects-and-arrays"
---

So far we've talked about having one variable at a time: one first name, one last name, one price, etc. What if we have a collection of data? It'd be nice to group together like data. Good news! You can!

```javascript
const person = {
  name: "Brian Holt",
  city: "Seattle",
  state: "WA",
  favoriteFood: "🌮",
  wantsTacosRightNow: true,
  numberOfTacosWanted: 100
};
console.log(person);
console.log(person.name);
console.log(person["name"]); // same as the line above; definitely prefer using the other one
```

This is called an object. They're extremely useful in JavaScript; they're how you'll group together like-information so that they can be used together. They contain a bunch of **keys** and **values**. The keys are on the left side of the `:` and represent how you get that piece data of out of the object. `name` is one such key, and the way I get the name of the

Used in conjunction with functions they're very powerful. Take this example:

```javascript
const person1 = {
  name: "Brian",
  ageRange: "25-35"
};
const person2 = {
  name: "Jack",
  ageRange: "65-75"
};

function suggestMusic(person) {
  if (person.ageRange === "25-35") {
    console.log("We think you'll like Daft Punk your crazy millenial.");
  } else if (person.ageRange === "65-75") {
    console.log(
      "You're obviously going to like Johnny Cash. He walks the line."
    );
  } else {
    console.log(
      "Uh, maybe try David Bowie? Everyone likes David Bowie, right?"
    );
  }
}

suggestMusic(person1);
suggestMusic(person2);
```

Now we're able to pass all this information as one package which makes it easy to keep track of since we're just passing one variable. You'll see this become even more useful as we start integrating with servers and APIs.

Objects can even have their functions! Let's see that.

```javascript
const dog = {
  name: "dog",
  speak() {
    console.log("woof woof");
  }
};

dog.speak();
```

Objects can as well have nested objects inside of them.

```javascript
const me = {
  name: {
    first: "Brian",
    last: "Holt"
  },
  location: {
    city: "Seattle",
    state: "WA",
    country: "USA"
  }
};

console.log(me);
```

## Context

Using the above object, wouldn't it be nice if we could use a function to nicely print where that person was from?

```javascript
const me = {
  name: {
    first: "Brian",
    last: "Holt"
  },
  location: {
    streetNumber: 500,
    street: "Fakestreet",
    city: "Seattle",
    state: "WA",
    zipCode: 55555,
    country: "USA"
  },
  getAddress() {
    return `${this.name.first} ${this.name.last}
${this.location.streetNumber} ${this.location.street}
${this.location.city}, ${this.location.state} ${this.location.zipCode}
${this.location.country}`;
  }
};

console.log(me.getAddress());
```

This is our first time seeing the weird `this` keyword. This is a strange, complicated, and difficult concept in JavaScript known as context and trips up all sorts of people, new and old to the language. If you decide to pursue a career as a developer, interviewers will often ask questions about context in JavaScript. It's worth investment to understand how it works.

In the simplest form, anywhere you are in JavaScript you have a context you are in. You can reference that context by using `this`. If I just reference `this` from the outtermost layer, it'll be the global object, which in the browser is something called `window`. `window` already has a bunch of stuff on it. For example:

```javascript
console.log(this === window);
console.log(this.scrollY);
console.log(window.scrollY);
```

As you can see from the first line, you can see that in this context, window is the `this` at that time. However, in the example above when we're doing the address, the `this` is the object since when I **call the function**, it's created inside of an object. That object then becomes `this` when `getAddress` is called. As soon as the function completes, the context is destroyed and the context goes back to being what it was before, in this case `window`.

A good rule of thumb (that is unfortunately not always true) is that if you're inside an object of some sort, the `this` will be that object. If not, it'll be the global object, `window`. There are crazy exceptions to this and you can even manipulate it yourself. For now, operate with that definition. It's a deep-and-dark rabbit hole to go down so let's continue and you can take [Kyle Simpson's course][kyle] later where he goes in depth on it.

## Arrays

Objects are un-ordered collections of datas using keys and values. Arrays, in contrast, are **ordered collections of data**. If you put something in an array, it has an order. For example, you might a list of the days of the week.

```javascript
const daysOfTheWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
console.log(daysOfTheWeek);
console.log(daysOfTheWeek[0]);
console.log(daysOfTheWeek[1]);
console.log(daysOfTheWeek[6]);
```

You first can see how we declare an array, using `[ ]`. Inside of an array, you can store anything you can store in a variable. You can have an array of numbers, an arry of strings, an array of objects, an array of arrays, an array of arrays of arrays, etc.

You can also see above how we access individual elements in an array: we use square brackets again and then we reference the number that we want to access. Again, remember, the numbering starts at 0. So the first element is index 0.

Arrays also have many methods (another word for functions that live on an object) and properties (another word for key/value pairs) that live on them. Let's see some of those:

```javascript
const primeNumbers = [1, 2, 3, 5, 7, 11, 13, 17];
console.log(primeNumbers.length);
console.log(primeNumbers.join(" | "));
```

`primeNumbers.length` gives you back an number that is how long the array is. In this case there are eight elements in the array so it gives us back `8`. `primeNumbers.join(" | "))` takes your whole array and makes it into one string. THe `" | "` paramenter I'm passing is what I want put between each element, so you end up with the string `"1 | 2 | 3 | 5 | 7 | 11 | 13 | 17"`.

So what if I want to add an element to the array after I've created. Use `push`!

```javascript
const courses = [
  { teacher: "Kyle Simpson", course: "JS Function Lite" },
  { teacher: "Sarah Drasner", course: "Intro to Vue" },
  { teacher: "Brian Holt", course: "Complete Intro to React v3" },
  { teacher: "Steve Kinney", course: "State Management" }
];

courses.push({ teacher: "Sean Larkinn", course: "Webpack" });

console.log(courses);

courses[2] = { teacher: "Brian Holt", course: "Complete Intro to React v4" };

console.log(courses);
```

The first thing we do is add an element to the end using the push function that arrays have. It "pushes" the element on the end.

Below that, we're overriding index 2 with a new course. This will throw away what was there before and set it to be what we've set it to be.

Okay, now, given that, what if we wanted to `console.log` everything in the array? You already have all the tools to do that? Let's see to do it.

```javascript
const cities = [
  "Seattle",
  "San Francisco",
  "Salt Lake City",
  "Amsterdam",
  "Hong Kong"
];

// method 1
for (let i = 0; i < cities.length; i++) {
  console.log(cities[i]);
}

// method 2
cities.forEach(function(city) {
  console.log(city);
});
```

The first way, using a for loop, we're using that `i` control variable which gets incremented each loop. We use that `i` to access each item in the array on each iteration of the loop. We have the loop stop when `i` gets equal to the `length` of cities. Very useful pattern. You'll see it a lot.

The second way is using a function that arrays have called `forEach`. This `forEach` method takes in a function and that function will be called once on each item of the array. It will pass that item into the function, which is what `city` is in this situation. Both are useful patterns to know. You'll use both frequently. While you're getting started, just use the one you feel comfortable with. They have different things that make them preferable in different situations but usually you can use either. Method 2 may be a bit more advance but I don't think you should be scared of it.

[kyle]: https://frontendmasters.com/courses/javascript-foundations/
