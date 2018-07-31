---
order: 14
title: "The DOM"
path: "/dom"
---

So far we've been writing code pretty well in a vacuum. We've been using `console.log` as the output mechanism. We haven't really done anything in JavaScript that couldn't be done in any other language. Now we're going to start using JavaScript to interact with your webpage.

Let's first chat about what a browser is and how your code gets from you writing it to being on run in a browser.

In a typical circumstance.

1. You write code in your editor (like VSCode)
1. You put your code on a server so that other people can get it
1. Someone visits your website
   1. (Lots of stuff happens here. For now we're not going to talk about it)
   1. Their browser makes a request to your server for your index.html
   1. Your server sends them a copy of the html
   1. The browser reads the HTML, sees you have a `my-script.js` script tag on there
   1. Browsers makes another request for `my-script.js` from your server
   1. Your server sends them a copy of `my-script.js`
   1. The browser reads the JavaScript code and begins executing the code

Same process happens with CSS too.

Okay, so this is how it works if you have put your code on some server like in a cloud like Microsoft Azure, Amazon Web Services or other places like Bluehost or GoDaddy. So how are we doing it locally, without a server, just on our computers? Your computer is basically faking this process. It's acting as both the server and the client so that it's easier for you to write code. When you open a file in your browser from your computer, your hard drive is the server. This was a point of confusion for me when starting so I'm sharing it with you.

Okay, now we've gotten that out of the way, let's begin making another project.

## The DOM

The way that JavaScript and HTML/CSS interact with each other is a thing called the DOM, the document object model. The DOM is basically a bunch of objects and methods that you can call from JavaScript to interact with the HTML/CSS of the page.

Note: here we're going to use the `script` tag and put the JavaScript directly inside of it so we can keep all the code together for these small examples. This not something you'd typically do (just like you'd normally separate the CSS from the HTML too.) It is possible but not recommended.

Let's see an example:

```html
<style>
  .red-square {
    width: 100px;
    height: 100px;
    background-color: crimson;
  }
</style>

<div class="red-square"></div>

<script>
  const redSquare = document.querySelector('.red-square');
  redSquare.style.backgroundColor = 'limegreen';
</script>
```

Notice that, despite the CSS class dicatating that the `div` should be `crimson` colored, it's actually `limegreen`. This is because we used JavaScript to change the color of it. So let's break it down.

* We called a method on `document`. `document` is a globally available variable in the browser that you use to interact with the HTML and CSS. It a lot of methods that you can use. In this case, we're using the `querySelector` in which you pass in a CSS selector and it returns to you the **first** one of that matches selector that it finds (if you have many of them on the page, you get just the first one.)
* From there, we have a JavaScript pointer to the `div.red-square` tag stored in the `redSquare` variable which means we can start manipulating it.
* We then use the `style` object which represents all the CSS styles that are being applied to that object at that time.
* We then set the `backgroundColor` of that element. Notice it is `backgroundColor` and not `background-color` (camelCasing vs kebab-casing). This is how you interact with CSS via JavaScript. Anything that's kebab-cased like `padding-right` becomes camelCased, like `paddingRight`. While annoying, it'd be even more annoying if they didn't switch it since everything in JavaScript is camelCased.
* We then just assign that to be whatever value we want. This works with any CSS property, eg: `tag.style.marginBottom = '50px'`.

There's a lot more you can do with an element than just modifying its style. You can add more HTML into it, remove it, change the text, search for different elements inside of it, get its position on the page, clone it, and a lot more.

Okay, so what if we had multiple elements we wanted to modify all at once. We have the tools to do that too!

```html
<ul>
  <li class="js-target">Unchanged</li>
  <li class="js-target">Unchanged</li>
  <li>Won't Change</li>
  <li class="js-target">Unchanged</li>
  <li>Won't Change</li>
  <li class="js-target">Unchanged</li>
</ul>
<script>
  const elementsToChange = document.querySelectorAll('.js-target');
  for (let i = 0; i < elementsToChange.length; i++) {
    const currentElement = elementsToChange[i];
    currentElement.innerText = "Modified by JavaScript!";
  }
</script>
```

## Events and Listeners

We've been able to modify HTML and CSS using JavaScript using `document`. Awesome! We're going to go one step further and start involving the user. Web sites are meant to be reactive to users. In order to be reactive to them, we need to wait for them to do stuff, like click a button or type in an input. The way we do that is we wait for **events** to happen. An event is created every time certain events happens like when a user clicks something or when they type something. We respond to these events by having what are called **event listeners**. We give an event listener a function to run whenever an event happens. Let's take a look at responding to a click when a user clicks a button.

```html
<button class="event-button">Click me!</button>
<script>
  const button = document.querySelector('.event-button');
  button.addEventListener('click', function () {
    alert("Hey there!");
  });
```

Let's break it down.

* We grab the button via `querySelector` and store it in the JavaScript variable `button`.
* We then call the `addEventListener` method on the button. This takes two parameters (no need to memorize this, you can always look it up): the name of the event you want respond to, which in this case is the `click` event, and a function that is called whenever that event happens. This function is often called a **callback** because it gets called back whenever the event happens.
* We then call a function called `alert`. `alert` is a super, super annoying function that pops up a dialog window with whatever you call it with.
* People often get confused seeing `});` on the last line. The first `}` is closing the function, the second `)` is closing the function call of `addEventListener`, and the `;` ends the statement.

Let's do another example with an `input` tag.

```html
<input placeholder="type into me!" class="input-to-copy" />
<p class="p-to-copy-to">Nothing has happened yet.</p>
<script>
  const input = document.querySelector('.input-to-copy');
  const paragraph = document.querySelector('.p-to-copy-to');

  input.addEventListener("keyup", function() {
    paragraph.innerText  = input.value;
  });
</script>
```

Try typing into the input. You'll see whatever text you type into the input will instantly be reflected in the `p` tag. Pretty cool, right?

* We're now using the `keyup` event. This event happens whenever you release a key after pressing it. As you may guess, there is a `keydown` event too that is fired whenver you press a key. We're using `keyup` because `keydown` happens _before_ a key actually registers which means we would always be one key behind.
* We're reference `input.value`. The value property of an input reflects whatever the user has typed into the input.
* We're taking whatever is in `input.value` and passing that directly into the `paragraph.innerText`. Since that function is called every time a user types into the input, it keeps the two in sync!

One more example and then we'll move on.

```html
<style>
  .color-box {
    background-color: limegreen;
    width: 100px;
    height: 100px;
  }
</style>
<div class="color-box"></div>
<input class="color-input" placeholder="Type a color here!" />
<script>
  const input = document.querySelector('.color-input');
  const paragraph = document.querySelector('.color-box');

  input.addEventListener("change", function() {
    paragraph.style.backgroundColor  = input.value;
  });
</script>
```

Similar to above. The key difference here is that we're listening for `change` events. `change` events happen whenever a user types something in the input and then unfocuses the input by clicking somewhere else or hitting tab to change the focus. Try typing "red" and then clicking somewhere else. Also, try something that isn't a color. Notice that if you give it an invalid color it just doesn't change anything.

## Event Delegation

If you have a bunch of elements that you need to listen for events on, you could attach an event listener to each but that's a bit tedious to do. Instead what is sometimes easier to do is to use what's called **event bubbling**. When event fires on an element, after that "bubbles" up to its parent, and then its parent, and its parent, etc. until it's at the root element.

```html
<div class="button-container">
  <button>1</button>
  <button>2</button>
  <button>3</button>
  <button>4</button>
  <button>5</button>
</div>
<script>
  document.querySelector('.button-container').addEventListener('click', function(event) {
    alert(`You clicked on button ${event.target.innerText}`);
  });
</script>
```

You can see that we only bound event listener, and that was the div above it. Then, when we click the button, we're using the `event` parameter that is being passed into the callback. You may be wondering where that came from. It was always there, we just ignoring it. An event listener's first parameter is always an event object. There's lots of information on the event object but we're most concerned with `event.target`. `target` is the tag that the event originated from. In this case it'll be the button that caused the event. And we know that with tags you can use the `innerText` property to get the text inside of them. That's how we able to alert the correct number. Cool, right?
