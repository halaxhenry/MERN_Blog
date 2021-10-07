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

### send verification Email

1. server < config < sendMail.ts

npm i nodemailer google-auth-library

npm i -D @types/nodemailer

npm uninstall @types/bcrypt @types/jsonwebtoken

npm i -D @types/bcrypt @types/jsonwebtoken

2. go to google console and create new project
   go to APIs & Services < Credentials < Create Credentials < OAuth

https://developers.google.com/oauthplayground/

1.  click gear button and check on Use your own OAuth credentials then put your project information
2.  type http://mail.google.com on left side and click authrize APIS
3.  click Exchange authorization code for tokens and get Refresh Token and Access Token

### send sms + Active Account

1. server < config < sendSMS.ts

https://console.twilio.com/?frameUrl=%2Fconsole%3Fx-target-region%3Dus1&newCustomer=true

https://www.twilio.com/docs/sms/quickstart/node

npm install twilio

### Login , Logout , Refresh Token

1. server < controllers < authCtrl.ts

create functions which is used for login logout refreshtoken

2. server < config < interface.ts

create interfaces which are related to user info, token and etc

3. server < routes < authRouter.ts

create Router for each process ( passed postman test )

### Setup Client

npm i react-router-dom axios redux redux-thunk react-redux redux-devtools-extension

1. App.tsx -> rafce

index.css --> client < src < styles

client < src

mkdir components
mkdir pages
mkdir redux
mkdir styles
mkdir utils

bootstrap sources in client < public < index.html

npm i --save-dev @types/react-router-dom
