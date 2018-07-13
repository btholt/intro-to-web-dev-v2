---
title: "HTML Next Steps"
order: 4
path: "/html-next-steps"
---

We just discussed what the basic building block of HTML is: tags. We're going to explore a bit more about what you can do with tags and then we'll move on to CSS.

## Attributes

Let's start with a text `input` tag. There are several types of `input`s that we discussed in the previous section: text, color, checkboxes, radio buttons, etc. How can the browser tell which is meant to be what? HTML attributes! Attributes are additional pieces of information that you can attach to HTML tags. We're going to use the `type` attribute to pass that to the browser.

```html
<input type="checkbox" />
<input type="color" />
<input type="file" />
```

`type` is considered an attribute. Different tags have different attributes that they care about. For example, the `type` attribute is not useful with `p`, `div`, `h1`, etc. You can still put a `type` attribute on these tags; they'll just ignore them.

Exploring more on `input`s (since they have a bunch of attributes,) here are some interesting ones:

| : Code :                                        |                    Example                    |
| ----------------------------------------------- | :-------------------------------------------: |
| `<input value="This is a pre-filled value" />`  | <input value="This is a pre-filled value" />  |
| `<input placeholder="This is a placeholder" />` | <input placeholder="This is a placeholder" /> |
| `<input type="checkbox" checked />`             |       <input type="checkbox" checked />       |
| `<input type="radio" checked />`                |        <input type="radio" checked />         |
| `<input type="checkbox" disabled checked />`    |  <input type="checkbox" disabled checked />   |
| `<input type="color" value="#FF0000" />`        |    <input type="color" value="#FF0000" />     |

`input`s aren't the only ones to use attributes. In fact they are used everywhere in HTML. This is just to demonstrate to you what they look like and how certain attributes do certain things. If something isn't working for you, always check to see if you misspelled one of the tag names or attributes; that's an easy thing to mess up and hard to tell it happened.

## Classes

Classes are special attributes that can go on any tag, though some you won't use it with. While a class does nothing itself, it allows that tag to be found by your CSS and your JavaScript. Using our house analogy, you don't want to make a rule that says "all walls are south facing." It's nonsensical and you could never build a house that way. Instead, you'd make a rule that says "walls marked `south-facing-wall` are south facing." This is what classes allow you to do: they allow you to mark your HTML so you can write rules and code to govern them later. Let's see what that looks like.

```html
<div class="header">
  <h1 class="header-title">My Great Blog</h1>
</div>
<div class="blog-posts">
  <div class="post">
    <h1 class="post-title">When Not to Overextend House Metaphors</h1>
    <p class="post-text"> … </p>
  </div>
  <div class="post">
    <h1 class="post-title">Another Great Blog Post</h1>
    <p class="post-text"> … </p>
  </div>
</div>
```

What you see above is very typical looking HTML. Most tags will have classes. Now when I go to write CSS later, I can target _just_ `post-title`s. If I wrote a rule targeting `h1`s, I'd get all the `post-title`s **and** the `header-title` as well. As you may imagine, you'll want the site header's h1 to look and act different than the blog post title, just like the headers in this lesson look different than the "INTRO TO WEB DEV V2" in the header.

## IDs

IDs are far less useful than classes. Whereas you'll be using classes everywhere and frequently, you should be using IDs very sparingly. As you see in our above `blog-posts` HTML, we can _re-use_ classes like `post` and `post-title`. This is **extremely** important. As a coder, you want a piece of code and use it a lot. As coders, we want to write as little code as possible (which we'll explore why later, for now trust me.) For now, be satisfied that I get to write a little bit of code that governs `post` and have it affect every `post` on the page.

Let's contrast that with IDs. When you designate something with an ID, you're affirming that **this is the only one of those on your website**. Not even just that page, but your whole website. _Sometimes_ that is useful; just not very often. Some other coders and tutorials will tell you to _never_ use IDs; I think that's misguided. IDs are a sledgehammer. Most problems don't require a sledgehammer. However sometimes you have problems that need a sledgehammer and then you're really grateful that you have one.

Let's see what an ID would look like:

```html
<div class="header">
  <h1 class="header-title">My Great Blog</h1>
</div>
<div class="blog-posts">
  <div id="house-metaphors-post" class="post">
    <h1 class="post-title">When Not to Overextend House Metaphors</h1>
    <p class="post-text"> … </p>
  </div>
  <div class="post">
    <h1 class="post-title">Another Great Blog Post</h1>
    <p class="post-text"> … </p>
  </div>
</div>
```

Notice the first blog post has an `id` attribute in addition to its class. Notice I gave it a name _very_ specific to that post; I can probably guarantee that the only house metaphor post on my website so that name works. Later we'll go more in depth on this, but you don't want to use CSS to tag IDs. You probably don't need to use JavaScript to target it; classes normally suffice.

So why do we have them? Well, they're really old and have been around forever so that's the mean reason. Another reason that _is_ very useful about IDs is that I now can make a link that takes you directly to that ID in the page. Try clicking this [link](#the-h1-part-way-down-the-page) (it won't leave this page.)

<h3 id="the-h1-part-way-down-the-page">The link should bring you here.</h3>

This is done using just an ID. The code for that link is: `<a href="#the-h1-part-way-down-the-page">link</a>`. That `#` means go to that ID on the page.

## Naming and Tags to Use

You generally want to give things useful names. There's a saying in computer science that there are two hard things in computer science: cache invalidation, naming things, and off-by-one errors. (Cache invalidation is another topic for another day.) So if you struggle to come up with names for things like classes and IDs, you're not alone. As a programmer you get to name _a lot_ of things.

Generally, with classes, you want to name things _semantically_. This is a fancy word (often used when talking about HTML) that you want use tags and name things as close to what thing _is_ and **not** _what it looks like_.

Example, imagine this is a blog post on my website.

<style>
  .post-title {
    color: red;
    font-size: 20px;
  }
  .post-title.green {
    color: limegreen;
  }
  .post-text {
    font-size: 14px;
  }
  .post {
    border: 3px solid #ccc;
    border-radius: 5px;
    max-width: 400px;
    padding: 10px;
  }
</style>

<article class="post">
  <h1 class="post-title">MY COOL BLOG POST TITLE</h1>
  <p class="post-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint exercitationem dignissimos veritatis, odit accusamus reiciendis dolorum ab harum dolorem ad et ducimus amet ut eos, itaque nostrum cumque magni soluta.</p>
</article>

For the blog post title, what should I call the class? What tag should I use? I really can use any tag and it'll mechanically work. Using CSS, you can make pretty much any tag look and act like any other. So if it doesn't matter mechanically, why should it matter to me? The same reasons we layed out earlier:

* It makes the site accessible to everyone if you choose good tags. It's your responsibility to make sure the web remains accessible to everyone, including but not limited to: people with limited sight, limited motion of hands, arms or other limbs, limited hearing, and other permanent or temporary disabilities.
* It'll make it easier for you to come back later and maintain your code or for someone else to understand what you did. Code is communication between you and future readers.
* It makes it easier for Google, Bing, DuckDuckGo, etc. to crawl your website which means your site will rank higher.

Given that, it means we need to choose a tag that means that's a title. In this case, we can use an `h1` because that is the main header of that subsection. For the name of the class (note screen readers and other accessibility tools _do not_ read your class names or IDs; choosing good names here purely affects you and others working on this code.)

Okay, cool, so let's give that `h1` a good class name. How about `red-title`? It's a title and it's red; fits, right? While that may seem appropriate and fitting now, what if you need to change your blog's styling the following week and now that blog post looks like this:

<article class="post">
  <h1 class="post-title green">MY COOL BLOG POST TITLE</h1>
  <p class="post-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint exercitationem dignissimos veritatis, odit accusamus reiciendis dolorum ab harum dolorem ad et ducimus amet ut eos, itaque nostrum cumque magni soluta.</p>
</article>

If your title is still called `red-title`, you have a bit of a problem! Now your class name is not only not descriptive of what the item is, it's actually wrong which will make it way more confusing to you and other laters. Now, you may say that you can just change the class name when you go to update but believe me that's not a good option either. If you've used that class 1,000 times throughout your website (not that farfetched) you'd have to update 1,000 different things. No, it's better if we give it a good name the first time, descriptive of not _what it looks like_ but descriptive of _what role it serves._ In this case, we could call it something like `blog-post-title` or `post-head` or something of that nature. That class then always be descriptive of what the thing _is_ and not _what it looks like_.
