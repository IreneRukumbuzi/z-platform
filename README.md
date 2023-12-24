# Z-platform
Company Z provides essential online services for tens of thousands of users through
their platform Z-Platform.

This is their authentication service
## Setup
### Requirements
> NODE

> YARN

> POSTGRES

> GIT


### Getting Started
> Clone the repository by running

```
git clone https://github.com/IreneRukumbuzi/z-platform.git
```

# These repo host both the APIs server & web app


> ## Server
Follow the steps below to setup your server

-  Open the project with your favorite IDE and Change to the `server` folder
    ```
    cd server
    ```
-  Install all dependencies by running
    ```
    yarn install
    ```
-  Follow the format in `example.env` file to set up your `.env` file

    <hr /> <br />

    ## Database Setup (Postgres - Sequelize )

-  create a database for test & development 

-  remember to reference the databases in `.env` file

- add table to database by running:

    ```
    > yarn migrate:db
    ```
    The above command will migrate all table to your database

- to remove all tables from the database, run:

    ```
    > yarn sequelize db:migrate:undo
    ```
    The above command will revert any migration.
    <hr /><br />

    ## Run the server

- Start the application in development mode by running:
    ```
    > yarn start:dev
    ```
 
    ## Run tests

- Test the application by running:
    ```
    > yarn test
    ```

<hr /> <br />

> ## Web app
 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


-  Open the project with your favorite IDE and Change to the `web-app`
    ```
    cd web-app
    ```
    **you can use your system terminal or IDE integrated terminal**

-  Install all dependencies by running
    ```
    yarn install
    ```
    <hr /> <br />

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
 
 