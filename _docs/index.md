---
title: Lab Setup
permalink: /docs/home/
redirect_from: /docs/index.html
---

### Prerequisites
We’ll assume some familiarity with HTML, CSS, and JavaScript, but you should be able to follow along even if you haven’t used them before. However, you may not know why we did certain things the way we did.

### What we will be doing
In this lab, we will start by exploring a HelloWorld custom widget to understand how widgets are registered in ICEC. We will then build four (4) custom widgets to access various external content we want to surface in IBM Connections Engagement Center.

The lab instructions are very specific to the tools we used as we built the lab. However, these are not requirements for building widgets for ICEC! You can use a text editor to write your code. Popular and free solutions are Notepad++, Atom, TextMate and Visual Studio Code. You are free to follow this lab using the development tools you are most comfortable with.

- IDE: Visual Studio Code
    - Why: I find it to be the best Code Editor that is "Free"
    - [Download Visual Studio Code](https://code.visualstudio.com/)
    - [Getting Started Videos](https://code.visualstudio.com/docs/getstarted/introvideos)
- Browser: Chrome
    - Why: Chrome provides the 'best' Dev Tools and receives updates frequently, when debugging an issue I find it to be invaluable.
    - [Download Google Chrome](https://www.google.com/chrome/)
    - [Getting to Know Chrome DevTools](https://developers.google.com/web/updates/2018/01/devtools)
- Development Server: Node.js
    - Why: It is easier to have the running code of your widgets local and not have to constantly deploy to the ICEC server during development. 
    - [Download the latest LTS Version](https://nodejs.org/en/)
    - [Windows Installation](http://nodesource.com/blog/installing-nodejs-tutorial-windows/)
    - [Mac OS Installation](http://nodesource.com/blog/installing-nodejs-tutorial-mac-os-x)
    - [Debian Linux Installation](http://nodesource.com/blog/installing-node-js-tutorial-debian-linux)
    - [Ubuntu Linux Installation](http://nodesource.com/blog/installing-node-js-tutorial-ubuntu)

All these tools installation are straightforward, take the defaults during installation and you will be all set. 

- Code version control: It is also a good practice is to use Git for version control. There are a number of options you can choose from.  For this lab, we will be using Github to download our starter code, but don’t worry about having an account on Github unless you want to save the code that you create.
    - [Github Guides](https://help.github.com/)

### Launch Visual Studio Code (or your favorite IDE)
For this walkthrough we are using Visual Studio Code, a free to download/use IDE available for Mac, Windows, and Linux. Click on the icon to open it.  
![Visual Studio Code](../images/vsc.png)

#### Integrated Terminal

VS Code has an **integrated terminal** which you can use to run shell commands. You can run Node.js directly from there and avoid switching out of VS Code while running command line tools.

![integrated terminal](../images/vsterm.png)

**View** > **Integrated Terminal** will open the integrated terminal and you can run commands throughout the lab, i.e. `npm install`, `npm run build`, etc... from there:

For this lab, we will open up two terminal sessions, using the + on the right-hand side:
 - one for the server where our widgets will be served from during our development
 - one to build and package our custom widget code after every iteration.


