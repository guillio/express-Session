# Session authentication

The main objective of this backend project is to create an authentication process using express-session. This a NodeJS project that uses libraries such as express, bcrypt, dotenv, express-session, fastest-validator, lodash and the ODM mongoose.

## Installation

Use the package manager "npm" to install the project dependencies.

```bash
npm i
```

##

## Usage

Create a ".env" file that contains the next variables

```javascript
PORT=3001
DB_CONNECTION_STRING=mongodb://localhost:<DATABASE_PORT_NUMBER>/<DATABASE_NAME>
SESSION_SECRET=some secret string you want to use
SALT_ROUNDS=10
```

Now you just have to run the command "npm run dev" on the terminal to be able to check the project.
