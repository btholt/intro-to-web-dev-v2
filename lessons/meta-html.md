---
title: "Meta HTML"
order: 5
path: "/meta-html"
---

So far we've just shown you HTML that produces something concrete, something visual. We now need to talk about HTML that you still need but it won't produce visual things.

Let's start with the absolute basic foundations for an HTML page. Like a house needs a foundation, your HTML document needs a basic framework to get up and going.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>My amazing HTML Document</title>
</head>
<body>
  <h1>Check this out</h1>
  <!-- Your amazing HTML here -->
</body>
</html>
```

This is about as barebones as you get. Let's dissect it point-by-point.

#### `<!DOCTYPE html>`

HTML is an old language. It was invented in 1993! While I'm sure the originators and the early adopters of HTML did their best to make they could, there's no way they could have anticipated that we'd still be using it 25 years and they needs we'd have. As such, HTML has had to evolve in many unexpected ways and part of that is removing bad parts and mistakes that used to HTML as we go along. When they remove bad stuff and add good stuff, they make a new version of HTML. The way we tell the browser that's reading the HTML what version of HTML we're using is this first tag. This particular one is for HTML5, the latest (as of writing) revision of HTML. HTML doesn't get revised very often so this will be the header you'll use for a long time to come.

#### `<html lang="en"></html>`

Everything (besides the doctype) goes into your `html` tag. You'll wrap everything in here. You also should give it a language attribute to let the browser know what language your document is in which is what the `lang="en"` is communicating. This is useful to the browser to know for a number of reasons.

#### `<head></head>`

First, there's `<head></head>` and also `<header></header>` and they are different. Be careful about that. We're talking about `<head></head>`.

We'll first talk about `head`. Inside of `head` goes all of the meta-data to help the browser understand how to read your document. In our case, the only thing we're putting in `head` is the title of the document. What goes inside of `title` is what will the name of the tab of the browser. It's also the name of the Google or Bing search result. Basically, anywhere that's going to display the title of the web page will use what's inside of here. This is the theme of what goes in `head`: data that's useful for reasons other than displaying it. We can put a tag in here that prevents pinch-to-zoom on mobile if we needed that (don't do that!) We can put a tag that identifies the description and image that Google would use for search results. We'll see some more later but for now we'll stick with just a title.

#### `<body></body>`

All of our "visual" HTML will go in here. All your `div`s, `span`s, `img`s, etc.

## `<script></script>`, `<style></style>`, and `<link />`

We're about to talk about CSS and JavaScript, but know they have the above three tags, `script`, `style`, and `link` are used for them, `script` being used for JavaScript and the latter two for CSS.
