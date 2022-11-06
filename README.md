# Welcome to Lender Tool Kits basic react skills test

(please see solution in the bottom of doc)

![alt text](https://github.com/anagonm/react-todo-reduxtk-mui-router-jest/blob/main/public/img1.png?raw=true)
![alt text](https://github.com/anagonm/react-todo-reduxtk-mui-router-jest/blob/main/public/img2.png?raw=true)
![alt text](https://github.com/anagonm/react-todo-reduxtk-mui-router-jest/blob/main/public/img3.png?raw=true)
![alt text](https://github.com/anagonm/react-todo-reduxtk-mui-router-jest/blob/main/public/img4.png?raw=true)

This skills test is designed to allow you to showcase your development abilities to us. The test is administered through an online screen sharing session via zoom and will be recorded. 

* Candidates will have one hour to complete the exercise. 
* Google can be used to lookup helpful information as needed.
* Do not worry if you cannot fully complete the test within the allotted time, the purpose of the test is to allow us to determine skills and to get an insight into how you go about solving the problem.
* Please submit a live recording of the exercise.

## Prerequisites

Before joining the meeting link provided, please ensure that you have the following tools installed.

* Visual Studio Code
* Node JS version 16+

## Instructions

step 1.) clone this github repository. This repository contains a very basic react application with material ui components.
step 2.) Fix any errors that prevent the project from being built and run.
step 3.) On the main app.js page there is a todo form. You can see this component by clicking the ( M ) button Route this form to it's own page with the endpoint /todo
step 4.) Create a table of todo items. When the user types into the textbox and clicks submit, the ui should have a table of these todo display.
step 5.) On the newly created table, create a delete function that will remove a todo item.

Bonus points will be awarded for:
  * improvements to user experience, styling, and for correcting any obvious errors in wording on the site.
  * adding redux state management.
  * hosting app on a platform like heroku

## Solution

### Folder structure 
- Components (contains all the components for the application)
- router (this folder contains the router for the application)
- utils (this folder contains utility methods for the application)
- reducers (contains redux-toolkit/redux reducers)
- store (the redux store)
- style (CSS/SASS styles)

### Dependencies

```
@emotion/react (Simple styling in React.)

@emotion/styled (The styled API for @emotion/react)

@mui/icons-material (Provides the Google Material Icons converted to SvgIcon components.)

@mui/material (comprehensive library of components that features our implementation of Google's Material  Design system.)

@mui/styled-engine (Wrapper around the @emotion/react package)

@reduxjs/toolkit (The official, opinionated, batteries-included toolset for efficient Redux development)

@testing-library/jest-dom (Custom jest matchers to test the state of the DOM)

@testing-library/react (Simple and complete React DOM testing utilities that encourage good testing practices.)

@testing-library/user-event (Fire events the same way the user does)

formik (Build forms in React, without the tears.)

react (A JavaScript library for creating user interfaces.)

react-dom (serves as the entry point to the DOM and server renderers for React.)

react-redux (Official React bindings for Redux.)

react-router-dom (Contains bindings for using React Router in web applications.)
```

### Running the project
```
  $ nvm install 16
  $ nvm use 16
  $ yarn install or npm install
  $ yarn start or npm start
```

Check http://localhost:3000

### Running tests
```
  $ yarn test or npm run test
```

to get the coverage run
```
  $ yarn run test --coverage --watchAll
```

### Deploying to Heroku

*Important:*

```
Starting November 28th, 2022, free Heroku Dynos, free Heroku Postgres, and free Heroku Data for Redis® will no longer be available.
```

1. Signup for a heroku account (https://signup.heroku.com/login)
2. Create a new app (https://dashboard.heroku.com/new-app)
3. Use `heroku login` from the terminal to login into heroku
3. Add your heroku as a remote `heroku git:remote -a skill-test-01` here skill-test-01 is your app name
4. Use `git push heroku main` to deploy your main branch

A log similar to this will be printed:

`$ git push heroku main`

```
Enumerating objects: 55, done.
Counting objects: 100% (55/55), done.
Delta compression using up to 4 threads
Compressing objects: 100% (51/51), done.
Writing objects: 100% (55/55), 1.01 MiB | 10.13 MiB/s, done.
Total 55 (delta 6), reused 0 (delta 0), pack-reused 0
remote: Compressing source files... done.
remote: Building source:
remote: 
remote: -----> Building on the Heroku-22 stack
remote: -----> Determining which buildpack to use for this app
remote: -----> Node.js app detected
remote:        
remote: -----> Creating runtime environment
remote:        
remote:        NPM_CONFIG_LOGLEVEL=error
remote:        NODE_VERBOSE=false
remote:        NODE_ENV=production
remote:        NODE_MODULES_CACHE=true
remote:        
remote: -----> Installing binaries
remote:        engines.node (package.json):  unspecified
remote:        engines.npm (package.json):   unspecified (use default)
remote:        
remote:        Resolving node version 18.x...
remote:        Downloading and installing node 18.12.1...
remote:        Using default npm version: 8.19.2
remote:        
remote: -----> Installing dependencies
remote:        Installing node modules
remote:        
remote:        added 1502 packages, and audited 1503 packages in 26s
remote:        
remote:        217 packages are looking for funding
remote:          run `npm fund` for details
remote:        
remote:        9 vulnerabilities (8 high, 1 critical)
remote:        
remote:        To address issues that do not require attention, run:
remote:          npm audit fix
remote:        
remote:        To address all issues (including breaking changes), run:
remote:          npm audit fix --force
remote:        
remote:        Run `npm audit` for details.
remote:        
remote: -----> Build
remote:        Running build
remote:        
remote:        > skills-test-react@0.1.0 build
remote:        > react-scripts build
remote:        
remote:        Creating an optimized production build...
remote:        Compiled successfully.
remote:        
remote:        File sizes after gzip:
remote:        
remote:          146.18 kB  build/static/js/main.e0c5f16c.js
remote:          1.79 kB    build/static/js/787.e93beec2.chunk.js
remote:          264 B      build/static/css/main.e6c13ad2.css
remote:        
remote:        The project was built assuming it is hosted at /.
remote:        You can control this with the homepage field in your package.json.
remote:        
remote:        The build folder is ready to be deployed.
remote:        You may serve it with a static server:
remote:        
remote:          npm install -g serve
remote:          serve -s build
remote:        
remote:        Find out more about deployment here:
remote:        
remote:          https://cra.link/deployment
remote:        
remote:        
remote: -----> Caching build
remote:        - npm cache
remote:        
remote: -----> Pruning devDependencies
remote:        
remote:        up to date, audited 1503 packages in 4s
remote:        
remote:        217 packages are looking for funding
remote:          run `npm fund` for details
remote:        
remote:        9 vulnerabilities (8 high, 1 critical)
remote:        
remote:        To address issues that do not require attention, run:
remote:          npm audit fix
remote:        
remote:        To address all issues (including breaking changes), run:
remote:          npm audit fix --force
remote:        
remote:        Run `npm audit` for details.
remote:        
remote: -----> Build succeeded!
remote: -----> Discovering process types
remote:        Procfile declares types     -> (none)
remote:        Default types for buildpack -> web
remote: 
remote: -----> Compressing...
remote:        Done: 101.6M
remote: -----> Launching...
remote:        Released v3
remote:        https://skill-test-01.herokuapp.com/ deployed to Heroku
remote: 
remote: Starting November 28th, 2022, free Heroku Dynos, free Heroku Postgres, and free Heroku Data for Redis® will no longer be available.
remote: 
remote: If you have apps using any of these resources, you must upgrade to paid plans by this date to ensure your apps continue to run and to retain your data. For students, we will announce a new program by the end of September. Learn more at https://blog.heroku.com/next-chapter
remote: 
remote: Verifying deploy... done.
To https://git.heroku.com/skill-test-01.git
 * [new branch]      main -> main
```

After this you should be able to use the link that was generated to see your page 
(If you're running your application in "free" heroku the skills-test-react will hit max-memory and you need to move to a paid version)

```
  https://skill-test-01.herokuapp.com/
```
