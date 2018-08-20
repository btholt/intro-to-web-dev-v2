---
order: 20
title: "Deploying Your App"
path: "/deploying"
---

So you built this awesome Node.js application and now you want to show your friends, family, co-workers, prospective employers, or maybe you built a whole product and you're ready to launch it to the world. You need somewhere to host your application that is not your laptop. In theory you could host from your computer but any time you shut down your computer website goes away. That's a problem.

Luckily for us there are lots of hosting providers out there. And there are many types of hosting providers too! Today I'll show you just one of those providers but I'll make you aware of different alternatives. Ultimately they're all good options.

To be transparent: I work for Microsoft and my job is to help people get into Microsoft's cloud, thus I'm going to show you how to use Microsoft's cloud. No one at Microsoft mandated I had to do it this way; I do because I genuinely believe it's a good option. That being said, Google, Amazon, DigitalOcean, IBM, RedHat, RackSpace, etc. all have great clouds and I invite you to check them out to see if they suit your needs better. Also checkout [Jem Young's course][jem] to see the differences between Amazon and DigitalOcean.

Okay, so let's get started. [Click here][azure]. You need either a valid credit card or a valid phone number. This is free so even though you verify with your credit card, you will not be charged unless you later change it to a non-free account. I believe it does a "verification hold" of $1.00 to make sure it's a real card. Again, it'll never charge without your consent. You have to convert it to a non-free account.

1. Click sign up for a free account
1. Fill out all the sign up info
1. When prompted, click go to the portal
1. Feel free to do the tour. It takes a minute or so
1. In the side bar, click App Services. App Services is the cloud option for deploying web applications from Microsoft. What's cool about it is that it automatically manages the scaling for you. What that means is that if you website gets really popular, it'll spin up more servers for you and you don't have to do anything. It just does it for you. Once the popularity dies down, it'll spin it back down to one server for you
1. Click create app service
1. Click Web App. If you don't see it, search for it. There are other types of apps you can do, but we're going to do an empty web app we're going to conenct to GitHub.
1. Click the Create button
   1. Name your app. I'm calling mine `intro-to-web-dev`. You will have to call it something else because I took that name. :D
   1. Leave it under the free trial subscription
   1. Create a new resource group. Microsoft has a lot cloud services like AI, databases, analtyics, etc. You can group these resources together so you can manage them together into a resource group. This will be our only resource in this resource group, so feel free to leave the name the same.
   1. Feel free to leave Application Insight off. It is helpful to debug but we're keeping this simple for now
   1. Check pin to dashboard
   1. Click Create
   1. Wait for the deployment to create. You'll see the status in the new tile you pinned to your dashboard
1. Click the "Deployment options" tab
   1. Choose GitHub as a source
   1. Authorize GitHub to allow it access to your repos
   1. Choose the repo you want to deploy (I'm using the one from the Node.js section)
   1. Make sure in your package.json looks something [like this][gh]. Specifically you need the `start` part of `scripts`. This is how Azure knows what to do after it finishes running `npm install`.
   1. When running on a server (often referred to as **running in production**) you need to listen on port 80. Luckily your server will pass this information to you via a special variable, `process.env.PORT`. [See here][gh2] how I did it.
   1. Choose the correct branch which is probably master
1. Wait for your app to deploy. Eventually your website will be visible at `http://<your websitename>.azurewbsites.net`.

Seems like a lot of steps. And it is. But what's cool is that after you've done this, any time you push new code to your GitHub repository's master branch it will automatically redeploy your app! Once you set it up, it's really easy to keep it going. How cool is that!?

This is one of many ways to deploy to Azure. My favorite is [deploying directly from VSCode][vscode]. You can do it from the terminal as well!

## More things to try

* Deploy from [VSCode][vscode]
* Push a second commit to cause an automatic redeployment

[jem]: https://frontendmasters.com/courses/full-stack/
[azure]: https://aka.ms/Fqk7b0
[gh]: https://github.com/btholt-test/intro-to-web-dev/blob/e3a9ffc2af005b9e6ffec72e442b32ccf1a261d0/package.json#L5
[gh2]: https://github.com/btholt-test/intro-to-web-dev/blob/e3a9ffc2af005b9e6ffec72e442b32ccf1a261d0/server.js#L37-L39
[vscode]: https://aka.ms/Uq08f1
