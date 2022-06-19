# CatsAPIBackend

Backend task is implemented to write rest api calls for Adding a new cat, delete a cat, get all cats, get cat by id and get catby name.
A React web application is implemented to consume developed REST API calls on cats mock data for the following functionalities:
a. Get all cats.
b. Get Cat by ID.
c. Get Cat by Name.
d. Add a new Cat with id, name, weight and breed_group.
c. Delete a cat.

## Project Status

All the mentioned functionalities are completed

## Front End

Framework Used: React JS
Pre requisites: NPM/Node JS environment

## Back End

Mock Server: JSON server
Rest API Libraries: Axios

## Installation and Setup Instructions

Source code URL: https://github.com/LickyHoney/CatsAPIBackend.git

###Steps to run it locally:

1.Clone down this repository. You will need git, `node` and `npm` installed globally on your machine.

git clone https://github.com/LickyHoney/CatsAPIBackend.git

2.Get into folder
cd catapibackend

3.Installation:
npm install

4.Start the application.

# Front End

    npm start

# Back End

    npm run server

5.Build the project
npm run build

6.To Visit App:
http://localhost:3000

## API End Points

1.GET /cats
2.GET /cats/{id}
3.GET /cats?name={name}
4.DELETE /cats/{id}
5.POST /cats

# Note

JSON-Server is running on port 3020 and the same port has been used in the URL in CatAPIService file in services folder. JSON file cats.json is in the public folder and JSON Server command "json-server -p3020 watch public/cats.json" is set in server script in package.json file and JSON Server runs with script command "npm run server".
** Please run the server with command "npm run server" to work with Netlify link. **

## View Demo

Application is deployed in Netlify and below is the link:

URL: https://benevolent-granita-cdc3a0.netlify.app

## Reflection

- This weeklong assignment is to review my backend API development capabilities. Project goals included using technologies learned up until this point and familiarizing myself with documentation for backend development. I have used Visual studio code and tested on chrome browser on a Mac laptop. I have deployed using a free hosting service on Netlify. Final app url link https://benevolent-granita-cdc3a0.netlify.app. This app featured to display cats from Cat API. Consumed developped Cat API collection using Axios library.
