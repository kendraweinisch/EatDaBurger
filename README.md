# EatDaBurger

This is a basic CRUD app that maintains a list of burgers.
I will use MYSQL as backend
I will use Express server framework (middleware)
The view will be in handlebars

The backend will store data in a table.
Use models to get data of mysql and into express.
I am going to use handlebars templates to render the data in HTML.
The table will have three columns: id (integer), type (string), devoured (boolean)
The model will have three properties: id, type, devoured
The model will have the following methods: create burger, select from database (selectone and selectall and update)
I will have to add a way to delete
There will be routes! One for the homepage, one for the apis
Each method gets a route! This is how the model and controller interact

Layout: HTML tags with head with style sheets and script hooks as well as body tags
Index page template: form for adding burgers, placement of data in two spots: before and after eating
Burger partial: burger type, if devour = false, render button to devour it

