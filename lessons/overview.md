---
order: 1
title: "Overview of What You'll Be Learning In This Course"
path: "/overview"
---

A big part of what's hard up front is all the terminology people throw around when talking about programming and web development. Some of it is unavoidable due to this being a separate field of thought, study, and practice, and then some of it just people inflating their egos by using esoteric and/or academic terms to describe something that could be described in much simpler terms. Some of these words you really need to know (like HTML tags, functions, scope) and some you can just ignore (like monads and functors.) We'll try to differentiate that for you. But if there's a word you keep seeing here often or hear often in context of what you're studying, it's probably a good time to go look it up and get a good grasp on it.

Let's fundamentally define what you're going to be learning in this course.

You will learn everything you need to know to create your own website, from back to front. In order to do this, you will have to learn several "languages." I put languages in quotes because not all of these are technically languages but it's a good approximation for now. For now we're calling them languages. The three languages you are going to learn are HTML, CSS, and JavaScript. We will also be using some other tools like the command line and git but we'll get there too.

## The House

Why do you need three languages? Let's make the imperfect metaphor of building a house. To build a house you need tools (like your text editor, your browser, your command line.) After you have tools, you need all the building material: the 2x4s, the shingles, the dry wall, the windows: all the things you need to put together to make a house. This is the HTML, or hypertext markup langauge. However this house thus far isn't going to be very pretty to look and not very functional. It's not going to have any color or any sort of elaborate structures. It's going to be bland, inert, and boring. Likewise, you can create a website that's _just_ HTML but it's going to be a black-and-white text document with no style or interactivity.

In order to arrange, style, and generally make this house more useful, you're going to have some blueprints. In an overly-reductive way, you could think of the blueprints as being a set of rules: this 2x4 goes here, that shingling goes on the roof, this particular wall be blue, and this window goes here. You define a bunch of rules that dictates that if some item matches this condition, then some rule is applied to it. If it is a 9x15 wall, it goes on the south side of the house. This is the CSS of your house, or the cascading style sheets. CSS is a series of rules that define that if you are an HTML thing that matches this condition, then apply some style to it. If you are the first paragraph in an article, your font size is 25px and your font color is blue.

Okay, so now we have a well arranged and nice looking house. Now, being the modern age and me wanting all the gadgets, I want to install a whole slew of smart home devices. I want it so when I pull in the driveway with my smart-enabled car that the garage door opens, the lights turn on, the thermostat turns on the heat, the TV is set to continue my favorite TV show, and the smart cooker begins cooking dinner. I am adding behavior to my house; I am adding a layer of programming on top of what exists. This is like frontend, or client-side, JavaScript. It's adding a layer of behavior on top of your website. Do you want to pop up a message if a user clicks a button? Do you want to refresh the stock-ticker on the page so it's accurate? Do you want to change the picture that's showing on your page every few seconds? These are things you'd typically do with JavaScript. And like all the smart home devices, having JavaScript on your page isn't always necessary. These website, for example, wouldn't need any JavaScript whatsoever because it's just showing information and not really interactive (links are an HTML thing, you don't need JavaScript for them.) It does have JavaScript because it makes it easier for me but it'd be easy to do with zero JavaScript.

Now, if I want to order delivery to my house, I have to call someone else. Someone not at my house. I'd use my smart assistant and ask them to call a pizza place and ask them to deliver pizza to my house. The pizza place in this example would be like a backend server. One pizza place can serve many houses, and it probably only does a few things (like make pizza, salad, drinks, etc.) and deliver that to all sorts of clients. The clients in this case could be different peoples' computers, phones, smart assitants, smart watches, smart ovens, who knows!? So one server can service many clients. In this case we're just worried about people's browsers (like Chrome, Firefox, Edge, Safari, etc.) on their computers and phones. While the frontend code (the smart house stuff) is _always_ in JavaScript, the backend code can be in any number of languages: Python, Ruby, JavaScript, Java, Go, C#, etc. Today we will only be using JavaScript on both the frontend and the backend so you don't have to learn two languages, but just know you _could_ use a different language on the backend.

To recap:

1. The HTML is the structure. It's going to contain all the text, the various images tied to the text, and it will generally group things together. Just like the drywall in your house, HTML doesn't do anything other than exist. It relies on other things to do things for it and to it.
1. The CSS is the blueprint. It's all the rules of what goes where, what color it is, what size it is, what font it is, what the decorative background images are, like HTML, CSS doesn't _do_ anything, it's just a set of rules that describe what things go where and how they look.
1. The frontend / client JavaScript is the smart home. It's all the cool pre-programmed stuff you can tell your house to do. JavaScript is what can change the HTML and CSS to react to various stimuli.
1. The backend code (we'll still use JavaScript) is the pizza place. It's a place where we can request things from and it will send back what we ask for. Or we can send things to it, like when you upload a new photo to your social media account. One server serves many clients, just like one pizza place serves many homes.

## A Note About This Course's Website

In this course you'll see two different types of code samples. This is specific to this website and not to the web at large. The first is when it has a light yellow background and only has one section, like this:

```htm
<h1>This is a code example. It's not editable</h1>
```

Then there are code samples like this that have white backgrounds and are in two pieces. These are editable and you can see the results instantly! Check it out:

```html
<h1>This is a code example. It is editable!</h1>
```

You'll see these throughout. If you see one that is editable, please play with it. You'll learn a lot by experimentation.
