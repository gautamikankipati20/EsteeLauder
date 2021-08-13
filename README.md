# ELC JavaScript Intern Project

Welcome to ELC Online!

The purpose of this project is to get you familiar with some of the technologies we use here at ELC. You will be working in a sandboxed environment where you can safely learn and break things. You can change the code to match your own style and preferences however you like. Feel free to change the setup, code or approach however you like. There is no right or wrong approach to this project, as long as you fulfill the basic task, so go forth and learn, but most importantly have fun! 

### Core Principles
####Seek and ye shall find
The engineering landscape is constantly changing and evolving. In order to become a good engineer, you have to be willing to always keep learning and always keep digging. If you have an error or are unsure about how to implement something, try searching for the answer! Chances are you're not the first person to have the particular question, and you will find an answer withing the community.

####Open Source
Almost all the tools and technologies used on the web today are open source. Open source means that all the code is publicly accessible and maintained and supported by the engineering community as a whole. That means that YOU can get involved in a project and contribute back to the community too! Try to find your favorite libraries on Github and see if you can suggest any improvements or even raise a pull request into the project.


### Core Technologies
You will be working with the below technologies:
* JavaScript, ReactJs, and NodeJS
* CSS, particularly SASS
* Command Line Interface
* Git

### References
Here are some core references for the technologies and tools you will be working with. Feel free to take your time and familiarize yourself with some of the tutorials below, or just jump right in to the code and figure things out as you go!
* JavaScript: 
  - [MDN JavaScript Introduction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction)
  - [ES6 Reference](https://www.w3schools.com/js/js_es6.asp)
* APIs: 
  - [MDN Introduction to Web APIs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)

* ReactJS: 
  - [ReactJS Introduction and Tutorial](https://reactjs.org/tutorial/tutorial.html)
  - [Introduction to JSX](https://reactjs.org/docs/introducing-jsx.html)
* Node: [NodeJS Intro](https://nodejs.dev/learn)

* CSS: 
  - [MDN CSS Introduction](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/Getting_started)
  - [What is Responsive Design?](https://www.interaction-design.org/literature/topics/responsive-design)
  - [What is Mobile First Design?](https://medium.com/@Vincentxia77/what-is-mobile-first-design-why-its-important-how-to-make-it-7d3cf2e29d00)
  - [Media Queries for Standard Devices](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/)
* Sass: [Sass Introduction](https://designmodo.com/introduction-sass/)
* Git: [Introduction to GIT](https://www.freecodecamp.org/news/an-introduction-to-git-for-absolute-beginners-86fa1d32ff71/)
* Command Line Interface:
  - [MDN Introduction to CLI](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line_)
  - [10 Basic CLI Commands Every Junior Software Engineer Should Know](https://betterprogramming.pub/10-basic-cli-commands-every-junior-software-engineer-should-know-67e827e51f89)
* Chrome Developer Tools [Chrome Dev Tools Documentation](https://developer.chrome.com/docs/devtools/)

## Getting Started

### Useful CLI commands
Here is a list of some of the most commonly used CLI commands. You can find a few more useful ones here: https://betterprogramming.pub/10-basic-cli-commands-every-junior-software-engineer-should-know-67e827e51f89 

####Print Working Directory
Tells you what folder you're currently in:  

    pwd

####Change Directories
Move to a different folder, 

    cd folder/name

or navigate one folder level up:
   
    cd .. 
####List Files and Directories
See what's inside the current folder:

    ls

### Prerequisites
You will need the following tools installed before you get started:
* [Chrome](https://www.google.com/chrome/) - this is currently the best browser for web development

* [Git](https://git-scm.com/downloads)
  - WINDOWS USERS: If you do not have a good terminal, make sure to install Git Bash so you can use it for development

* [NodeJS](https://nodejs.org/en/download/) (v14.16.1)
  * If you are on a different NodeJS version, please use NVM (Node Version Manager) in order to use version 14. You can find NVM's documentation here https://github.com/nvm-sh/nvm
  * Windows users can use NVM for Windows: https://github.com/coreybutler/nvm-windows
  * Make sure you are running [NPM](https://nodejs.org/en/knowledge/getting-started/npm/what-is-npm/) (v6.14.12)


* [Gulp](https://gulpjs.com/): In the command line run:

        npm install -g gulp gulp-cli

* [Yarn](https://yarnpkg.com/): In the command line run:

        npm install -g yarn


Optional:
* [VS Code](https://code.visualstudio.com/download): If you do not have a favorite IDE, we use VSCode here at ELC


### Step 1 - Node Modules

The first thing you need to do to get this app working is to install the Node modules with the following command:

    npm install

### Step 2 - Running the App

After installing the Node modules, you must start two locally hosted servers. The first server is the Node back end server, which runs the NodeJS files found in the './server' folder, and the second is the front end server, which runs the app files found in the './app' folder. Both servers can be started by running the following command (make sure you’re using the correct versions of Node and NPM per the prerequisites above):

    npm run servers

This command will create a front end server at http://localhost:3030 (which should automatically open in your browser), and it will start the Node back end server at http://localhost:3035, with Nodemon, so that updates happen automatically on save. 

*Special Note for Windows Users*

On Windows systems, you may get an error like the following:

  'NODE_ENV' is not recognized as an internal or external command, operable program or batch file.
  
If so, you will need to replace any occurrences of NODE_ENV with 'SET NODE_ENV' in the package.json, and separate this command from the one that follows it with a '&', like this:
  "node-server": "SET NODE_ENV=development & nodemon server/app.js"
  
## Front End App Folder

All of the front end source code can be found in the './app' folder. A description of each subfolder is as follows:

### /scripts

All of the Javascript can be found in here. The entry point to the app is the main.js file.

Individual components are inside the /components folder.


### images

Here you can add any images your project needs. You will need to restart the server in order to see them.

### sass

Here you will find the SCSS files, we use Sass on the project to compile down to CSS. These files will be automatically compiled upon save when you are running the standard 'npm run dev-server' command. However you can compile this yourself by running this command:

    npm run sass

All the files in this folder are simple SASS partials. If you need to add a new file, make sure to import it in the main.scss file.


## Node Back End Server Folder

### app.js

The source code for the back end server can be found in the './server' folder, specifically in the app.js file.  The app.js file includes starter code for you to create your own HTTP server, which will listen on port 3035 and create a data response, loading the product data from the data.js file, in JSON format. In addition to the comments in the app.js file, review the [NodeJS http.serverResponse documentation](https://nodejs.org/api/http.html#http_class_http_serverresponse).

To start the server on its own you can run this command:

    npm run node-server

### data.js

The data in the data.js file uses the following JSON Schema:

    {
        "_id": "001", // A Number for the product
        "isActive": "false", // Is the product actively in stock
        "price": "23.00", // The price of the product in the set currency
        "picture": "/img/products/N16501_430.png", // The location of the image for the product
        "name": "Damage Reverse Thickening Conditioner", // The products name
        "about": "Description for the product...", // Description of the product
        "tags": [ "ojon", "conditioner" ] // The tags for the product
    }
