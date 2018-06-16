---
title: "Tools"
order: 2
path: "/tools"
---

Before we get started, we need to set you up with all the necessary tools you're going to need to get up and going. As I said previously, I use macOS to write code on but nearly everything I'm going to suggest has Windows equivalents and some have Linux equivalents as well. While I'm not a Windows or Linux dev (or least haven't been for a long time) I'll try to make sure we get you in with some good tools. What's important here is that you find what works for you. Every developer has very strong opinions about their tools and will tell you that is some reason you _have_ to use their tool. Don't listen to them. Find what works for you. If you find yourself fighting your tools more than they're helping you, consider trying something else. Keep an open mind. What's shiny or popular is not necessarily going to work for you. Take time to invest in making your tools work the best for you. Small wins amount to huge boosts in productivity in the long term.

## The Browser

One of your biggest allies in writing websites is the web browser. You may not be yet aware but your browser has a myriad of developer tools built into it that help you understand your code, helps you find bugs, and helps you experiment directly on your running website. All of the modern browsers are great and you can use any one of them to develop sites with. I recommend you pick one and really get to know its developers tools.

### My Recommendation: Firefox

[Download Firefox][firefox]

I've been a big Mozilla fan for a long time and Firefox just keeps getting better. The developer tools are amazing and the team behind them are amazing too. All of my workshop will be done using Firefox.

That being said, Edge, Safari, or [Chrome][chrome] are all very, very good browsers with great dev tools too. If you feel comfortable with one of these already, stick with it. If you're using Safari, [make sure you enable dev tools][dev-tools].

## The Editor

One of the most controversial things you can ask a developer is which editor is the best. There are so many strongly-held opinions that it's hard to tell which one is going to work for you. There are many flavors and it all depends on what you want out of your editor: do you want it to hold your hand as much as possible? Do you want it to get out of the way? I'm going to give you several choices but let's start with what I've been using for a few years now.

### My Recommedation: Visual Studio Code

[Download Visual Studio Code][vscode]

Perhaps unsurprisingly I'm choosing the editor that Microsoft created. However I've been using VSCode (which is how I'll refer to Visual Studio Code from now on) since I was working at Netflix. It's a fantastic editor that has a lot of convenient features and helpers. To me it's the right balance of minimalism and helpers. It works in particular really well with front end development as well, and since the editor itself is JavaScript-based, if you ever feel like adding a new feature or plugin to it, you'll already know the correct language to do so. It's free, open-source, and works well on Mac, Linux, and Windows. And perhaps one of the best features of VSCode is it has a [huge amount of available plug ins][vscode-marketplace]

If you're not feeling VSCode, two other editors that are similar in their offering are [Sublime Text 3][st3] and [Atom][atom]. Both are great. I used Sublime for a decade and I still like it. Both are free to download. Sublime has an unlimited trial that asks you to pay $80 when you can.

If you want a more complete offering, you may investigate using an integrated development environment (commonly called an IDE.) The reigning, best IDE for front end development is [WebStorm][webstorm]. WebStorm is a very powerful IDE that has a lot of features and tools built into it. It aims to be more than just an editor; it aims to be the entire development suite. Great tool.

Lastly, I'm going to simply state there are two more tools you could use: [vim][vim] and [emacs][emacs]. These are tool that you use in the command line / terminal and use _just_ the keyboard, no mouse. These tools have a very difficult learning curve but once you're productive in them they allow you to go very fast. My advice for you is: don't, especially right now as you're learning to code. If you want to revisit it later then you could do that. But just know that it is indeed quite difficult.

## The Terminal

You're going to learn to use a terminal during this workshop. It's less scary than it seems, I promise! There are two things to worry about when talking about the terminal, and I'll try to help you tell the difference between the two: the **shell** and the **terminal emulator**. The terminal emulator is the actual window in your operating system; it itself doesn't execute or understand your commands you're sending to it. The shell is the code running inside of the terminal emulator. This shell can be swapped out to whatever shell you want to run. Unlike the things I recommended above, these various terminal emulators and shells vary a lot more by operating system.

If this is confusing to you, it's okay. It's a minor detail that you can come back to later.

For the terminal emulator, it doesn't matter a whole lot which one you use. I personally use [iTerm2][iterm] but you can just as easily use the default Mac Terminal.app or [Hyper][hyper] for Mac. For Windows, I'm told the aforementioned Hyper also works well as well as [cmder][cmder]. If you're on Linux, I'd say just use whatever the OS's default emulator is. You can use any one of these and this workshop will function entirely the same.

For the shell, we are going to use [bash][bash]. You don't need to install it unless you're using Windows ([then use these steps to enable it][windows-bash]). It's 99% already there on your computer unless you're using some obscure flavor of Linux. Whenever you open your Mac terminal, it'll be running bash by default unless you've changed it.

There are other options. The reason we use bash is because it is _so prevalent_. Bash is everywhere. Everything you Google will have the answers written in bash. My favorite shell is actually [fish][fish] but it's not very popular. Another shell people swear by is [zsh][zsh]. These are all very cool but I recommend looking at these later.

## Trusted Resources

Something really important is that you choose to learn from good sources. Just like it's important to get your news from quality sources, it's important to get your technical information from sound sources. Here are some of my personal favorites:

* For anything to do with HTML, CSS, or JavaScript, Mozilla's [MDN][mdn] is my go-to. I literally have it open all the time.
* [CSS Tricks][css] has fashioned itself into a premier development website. It has great content not just for CSS but for HTML and JavaScript too. If I want a tutorial, I'll head there. If I want more technical how-to info, I head to MDN.
* For video content, you really can't beat the rest of the content on [Frontend Masters][fem]. I love it.
* If I'm working with a library or a framework, it's a good idea to head directly to their GitHub (we'll talk about GitHub later) page or their official documentation. It's best to head straight to the source.

Frontend Masters also puts out a really awesome book every year called the [Frontend Handbook][fem-hb]. It's a good way to get an overview of the whole industry.

[dev-tools]: https://developer.apple.com/library/content/documentation/NetworkingInternetWeb/Conceptual/Web_Inspector_Tutorial/EnableWebInspector/EnableWebInspector.html
[firefox]: https://www.mozilla.org/en-US/firefox/new/
[chrome]: https://www.google.com/chrome/
[vscode]: https://aka.ms/visual-studio-code
[vscode-marketplace]: https://aka.ms/vscode-marketplace
[st3]: https://www.sublimetext.com/
[atom]: https://atom.io
[webstorm]: https://www.jetbrains.com/webstorm/
[vim]: https://www.vim.org/
[emacs]: https://www.gnu.org/software/emacs/
[iterm]: https://www.iterm2.com/
[hyper]: https://hyper.is/
[cmder]: http://cmder.net/
[bash]: https://www.gnu.org/software/bash/
[windows-bash]: https://docs.microsoft.com/en-us/windows/wsl/install-win10
[fish]: https://fishshell.com/
[zsh]: http://www.zsh.org/
[fem-hb]: https://frontendmasters.com/books/front-end-handbook/2018/
[fem]: https://frontendmasters.com/
[css]: https://css-tricks.com/
[mdn]: https://developer.mozilla.org/en-US/
