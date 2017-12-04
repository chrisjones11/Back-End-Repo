
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

You will need to have Node v7 and above installed on your system. To check if you have it installed type the following command in your terminal which will return your version.

<code>node -v</code> <br/>

You will also need to check that npm is installed along with node. To check type the following

<code>npm -v</code> <br/>

If you do not have node or npm installed, follow this <a href='https://nodejs.org/en/download/package-manager/' rel='nofollow'>guide.</a>

You will need MongoDB installed and running in a terminal when using the API. To run in your terminal, type this command

<code>mongod</code> <br/>

If you do not have MongoDB installed, follow this <a href='https://www.mongodb.com/' rel='nofollow'>guide.</a>

You will also need git installed on your machine. To check that you have it installed type the following command

<code>git --version</code> <br/>

If you do not have it installed follow this <a href='https://git-scm.com/book/en/v2/Getting-Started-Installing-Git' rel='nofollow'>guide.</a>

## Installing

In order to install this project make sure you are in a directory you wish to install in your terminal and run the following command

<code>git clone https://github.com/esports-northcoders/Back-End-Repo.git</code> then navigate into the folder and run

<code>npm install</code> <br/>

In a separate terminal run the following command to connect to the database and keep it running when running the server

<code>mongod</code> <br/>

then to populate the databse run

<code>node seed/seed.js</code><br/>

Running the server

To start the server run the following command

<code>npm start</code><br/>

This will run the server on PORT 8080 and can be accessed at htttp://localhost:8080 which will display a page with all the available routes.

## Running the tests

To run the tests enter the following command

<code>npm t</code> <br/>

Testing was done using supertest, mocha and chai through a Test Driven Development approach.

## Built With

<a href='https://github.com/visionmedia/supertest' rel='nofollow'>supertest</a><br/>
<a href='https://mochajs.org/' rel='nofollow'>mocha</a><br/>
<a href='http://chaijs.com/' rel='nofollow'>chai</a><br/>
<a href='https://expressjs.com/' rel='nofollow'>express</a><br/>
<a href='https://www.mongodb.com/' rel='nofollow'>mongoDB</a><br/>
<a href='http://mongoosejs.com/' rel='nofollow'>mongoose</a><br/>

