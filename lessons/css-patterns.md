---
order: 9
title: "Effective Patterns for Writing CSS"
path: "/css-patterns"
---

Okay, so we've gotten this far; it's time for you to start thinking about your first project: an imaginary news site. Before that, I want to dwell a bit on some things we've sort of hand-waved over and want to make sure they're explained to you:

## Connecting CSS and HTML

You have two choices here, a `link` tag and a `style` tag. I'll gloss over `style` because I don't want you to use it, but I want you to know it's there.

```htm
<!DOCTYPE html>
<html lang="en">
<head>
  <title>My amazing HTML Document</title>
  <style>
    .my-brand {
      color: red;
    }
  </style>
</head>
<body>
  <h1 class="my-brand">Check this out</h1>
  <!-- Your amazing HTML here -->
</body>
</html>
```

See the `style` tag in the head? This allows you to write CSS directly in an HTML document. Anything inside in the `style` tag will be read as CSS and applied to the whole document. This can be useful to rapidly test something out, but in reality you should really never need to use `style` tags.

Rather, what we want is to have an HTML document and a separate CSS document that is loaded by the HTML document. This is useful because we get to keep all the **content** (HTML) and the **styling** (CSS) separate. This is called separation of concerns, and it's useful in many ways with programming. The idea is that is that you use each file to focus on doing one thing and doing it well. Where possible, it's best to separate things so you have many small files instead of a few big ones. Here, we want to separate our CSS and our HTML into different pages.

What that looks like:

Our index.html file:

```htm
<html lang="en">
<head>
  <title>My amazing HTML Document</title>
  <link rel="stylesheet" href="./style.css" />
</head>
<body>
  <h1 class="my-brand">Check this out</h1>
  <!-- Your amazing HTML here -->
</body>
</html>
```

Our style.css file (located in the same folder as the index.html file)

```css
.my-brand {
  color: red;
}
```

The key here is the `<link rel="stylesheet" href="./style.css" />`. Let's break it down. A link tag is nearly always found in the `head` and links another file to that HTML document. Nearly always (99.9% of the time), it's to a `stylesheet`, hence the `rel="stylesheet"`. The `href` is where that other file is located. It refers to the file name. In this case, we have a file called `style.css` and it is located in the same folder as the `index.html` file, which is what the `./` part of the `./style.css` means. You could also write it as `"style.css"` if it's in the same directory, it also means it's located in the same folder, but I wanted you to see the `./` because you'll see it everywhere. We'll cover how it works later when we start working more with the terminal.

## When to Actually Use the Cascade

Before I told you to use the cascade as little as possible, but I did want to share with you when it can be useful to use. Imagine we have the following three buttons:

```html
<style>
  .ex-btn {
    background-color: #eee;
    border: 2px solid #aaa;
    padding: 4px 15px;
    border-radius: 5px;
    font-weight: bold;
    font-size: 17px;
    cursor: pointer; /* changes the mouse when you hover the button */
  }

  .ex-btn-warn {
    color: white;
    background-color: crimson;
    border-color: darkred;
  }

  .ex-btn-success {
    color: white;
    background-color: limegreen;
    border-color: green;
  }
</style>

<button class="ex-btn">Default Button</button>
<button class="ex-btn ex-btn-warn">Warn Button</button>
<button class="ex-btn ex-btn-success">Success Button</button>
```

These buttons are relatively similar and differ only in colors but the spacing and text styling are all the same. It'd be nice if we could write the common styles in one rule and then overrule just the colors. We can, using the cascade!

Since those classes come lower on the page, they "win" on the properties that they conflict with, and thus we only overwrite the things we want. Why is this better? Imagine later you want to change the text to be smaller and the border to be thinner. Now instead of having to change the style for each button, you change it once in their common class, `.ex-btn` and that affects all of them! This principle is generally called **DRY** which stands for "don't repeat yourself", meaning if you can have one place for common code or rules, it's better to do that than have it in 50 different places. While having three copies of the same rules doesn't seem like a big deal, many websites will have 10+ sorts of buttons and it quickly becomes impossible to manage.

## DevTools

Your browser has fantastic dev tools built into it. The easiest way to start playing with them is right-click on something on the web and click "Inspect Element". This will take you to the Elements Explorer. It lets you look at the HTML that's on the page and the CSS that's affecting those elements. Super super useful. Poke around and get used to playing with the dev tools. You'll live here as front end developer. Most of the other tools are for JavaScript but we'll get there in a bit.
