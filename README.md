# Drinks Project

Project allowing for the order of a drink from an ordering machine, created using TypeScript + NodeJS.

This is a console app executed using ts-node.

Project was created for our "Qualité Logiciel" class at Polytech Tours.

## How to launch

You will first need to create a MySQL database with the name db_drinks.
Next you should configure the database connection in the `ormconfig.json` file (verify the logins and database name).

Then you can launch the app using the following command:

`npm install` to install dependencies

`npm run start` will launch the project in a terminal.

`npm t` will launch all tests.

`npm coverage` will generate an html file with code coverage.

## Initial configuration

After the first startup, the tables are created in the database and cups, sugar and water entries with no stock are added if they do not already exist.
Next, you have manually edit the database to increase the stock for these items.
You also have manually add some drinks so that you can order one.