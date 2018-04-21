---
title: "CSS Selectors and the Cascade"
order: 7
path: "/selectors"
---

<style>
  .red-text {
    color: red;
  }
  .green-text {
    color: green;
  }
  .branding {
    color: red;
  }

  .blog-post-title {
    color: limegreen;
  }
</style>

Before this section, you learned how to make CSS rules to affect how your webpage looks. We showed you how to make a CSS rule so that you can make every `p` on the page have green text instead of black which is amazing. However, as you start building bigger websites, you begin to have more complicated needs: you may need _this_ `p` to have green text and that `p` to have `red` text. We haven't shown you yet how to make two of the same tag be styled different. Let's start showing you how to do this so you can achieve things like this:

<p class="red-text">This is a red p.</p>
<p class="green-text">This is a green p.</p>

So how do we achieve this black magic? Do you remember [the section on classes][classes] in the HTML portion? We're going to use that now. Classes allow us to style the same **tags** (e.g. `p`, `div`, `span`, etc.) differently because we can select the class instead of the tag. This is where having useful class names helps. So now, if we have an `h1` that's the title of a blog post and an `h1` that's the branding logo at the top, we can do this:

```html
<h1 class="branding">My Super Cool Brand</h1>
<!-- other htmls … these don't have to be sibiling tags -->
<h1 class="blog-post-title">My Cool Blog Post</h1>
```

We can CSS to address these two differently. Like so:

```css
.branding {
  color: red;
}

.blog-post-title {
  color: limegreen;
}
```

Which would look like:

<h1 class="branding">My Super Cool Brand</h1>
<h1 class="blog-post-title">My Cool Blog Post</h1>

In the CSS, notice the `.` (period) before the class name. This is how you differentiate between a tag name (like `h1`) and a class name (like "branding".)

So what should you use, generally speaking. Classes. Almost always classes. This is the consensus in the front end development community. Classes are the best way to style web pages. There are rare occasions that it may be useful style on tags (like if you literally want to style every `a` tag on the page) but those cases are rare. Use classes. Err on the side of using classes too much.

## The Cascade

I wish we could stop here. This is the part where CSS can become unnecessarily complicated, even if the ability to use the cascade is occasionally useful. Before we dive in, avoid using this ability of CSS where-ever possible. It'll save you hours-and-hours of debugging, I promise.

So, the cascade. What if you have two CSS classes that have conflicting properties? Which one "wins" and is applied? Let's see an example.

```html
<h1 class="title">Cool Title</h1>
```

With CSS:

```css
.title {
  color: red;
}

.title {
  color: green;
}
```

In this one, we have two rules with the same class (which is "legal" CSS.) So which one gets applied? Since they're equal, the one that comes **last** wins. So in this case, the `h1` would be green. So remember that rule (we'll recap at the end): when everything is equal, the _last one_ gets applied. It'd work the same if we had two `h1` selectors as well.

Okay, one step more complicated:

```html
<h1 class="title main-brand">Branding here</h1>
```

```css
.main-brand {
  border: 1px solid black;
  color: red;
}

.title {
  color: green;
}
```

First of all, yes, one tag can have multiple classes, and that can be useful. Okay, so what is this going to look like? In the eyes of CSS, those two selectors are equal since they both have the same **specificity** (key word, you'll see it used a lot when talking about CSS.) They both specific one class which makes them equal. So in this case, since `.title` comes last in the CSS, it wins. The color will be green. What about the border? Since `.title` doesn't conflict, it'll have a black border too. So keep in mind that each of these "conflicts" is resolved on a property-by-property basis. So the end result in an `h1` that has a black border and green font.

Using the same HTML as the previous example, what if we had:

```css
.main-brand.title {
  color: red;
}

.title {
  color: green;
}
```

This how you add two classes to one selector. Notice there's no space between the two class names (that means something else.) The selector `.main-brand.title` will only match a tag that has **both** classes. If has only one of the two, it will not match. As you may imagine, since it has two classes, it's more specific, and therefore it wins.

Okay, next steps here:

```html
<h1 class="title">Another h1</h1>
```

```css
.title {
  color: orange;
}

h1 {
  color: green;
}
```

This one is less obvious. Now we have to understand specificity even more. **A class is considered more specific than a tag**. So a class selector "overpowers" a tag selector. It's more specific. Therefore, even though the `h1` selector comes last, the `.title` wins because it's more specific. This is why it's useful to do _everything_ using classes; you don't need to worry about these specificity wars if everything is equal and try to have it some you don't have conflicting rules (which is not always possible.)

A useful but imperfect way to think about this is to think of specificity like a number. The class is like the tens digit, and the tag is like the ones digit. So something with one class selector would have a number `10` specificity and something with one tag selector would a specificty of `1`. The bigger number wins. This is imperfect because one class selector is still bigger than 10 tag selectors, but it's a useful mental device to quickly evaluate mentally which tag is more specific.

Last one and we'll move:

```html
<h1 class="title main-brand">Another Example</h1>
```

```css

```

[classes]: http://localhost:8000/html-next-steps#classes
