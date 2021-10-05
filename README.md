# MERN_Blog

### Dependencies

npm i express mongoose dotenv cors morgan cookie-parser

npm i -D @types/express @types/mongoose @types/dotenv @types/cors @types/morgan @types/cookie-parser

npm i -D typescript ts-node-dev @types/node

npx tsc --init

change es5 to es6 in tsconfig.json

test --> npx ts-node-dev server/index.ts

npx tsc --> create dist folder inside of project then it creates js file which is transformed of the ts file.

npx create-react-app client --template typescript

npm install concurrently

### Create Account

1. server < models < userModel.ts
2. server < controllers < authCtrl.ts

npm i bcrypt jsonwebtoken

npm i @types/bcrypt @types/jsonwebtoken

Tip : Do not forget change type text to json data when you send data with postman :)

### Validation Check Resource !!!

refer this link : https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript

function validateEmail(email) {
const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)\*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return re.test(String(email).toLowerCase());
}
