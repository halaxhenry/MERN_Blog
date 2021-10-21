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

### REDUX HEADER

in client < src < redux

mkdir actions
mkdir types
mkdir reducers

++ store.ts

### Login Page

1. client < src < component < auth

   LoginPass.tsx
   LoginSMS.tsx

2. client < src < redux < actions

   authAction.ts --> login

   caution: set const res: any , if you do not , cannot read objects inside of payload ( res.data.access_token, res.data.user )

3. client < src < utils

   \*\* FetchData.ts --> postAPI

   tip: please set token?:any not string or object and it will be reason to occur error on header Autorization
   :(

   \*\* TypeScript.ts --> IUserLogin, InputChange, FormSubmit, IUser

4. client < src < styles

   auth.css
   index.css ( import auth.css )

5. client < src < pages --> login.tsx (edited)

6. package.json --> proxy

7. client < src < redux < reducers

   \*\* authReducer.ts

   \*\* index.ts --> add auth inside of combineReducers

### LOADING + ERROR + SUCCESS

1. client < src < component < alert

** Alert.tsx
** Loading.tsx
\*\* Toast.tsx

2.  client < src < redux < reducers

\*\* alertReducer.ts
\*\* index.ts

3. client < src < redux < types

\*\* alertType.tsx

4. client < src < utils

\*\* TypeScript.ts --> IAlert

### Register

1. client < src < pages

\*\* register.tsx

2. client < src < redux < actions

\*\* authAction.ts --> export const register

3. client < src < utils

\*\* Valid.ts --> referred : server < middleware < valid.ts

\*\* TypeScript.ts --> IUserRegister

### Active Account

1. client < src < pages < active < [slug].tsx

2. client < src < components < alert

\*\* Alert.tsx --> showSuccessMsg, showErrMsg

### Refresh_Token_Logout

1. client < src < redux < actions

\*\* authAction.ts --> login function --> localStorage.setItem('logged', 'true') --> chrome f12 --> application tab and see localstorage
\*\* authAction.ts --> refreshToen function

2. client < src < utils

\*\* FetchData.ts --> getAPI

3. client < src < app.tsx

4. client < src < pages

\*\* login.tsx

5. client < src < redux < types

\*\* authType.ts --> token to access_token

6. client < src < components < global

\*\* Menu.tsx

7. client < src < redux < actions

\*\* authAction.ts --> logout function

### GOOGLE LOGIN

https://www.npmjs.com/package/react-google-login-lite

cd client --> npm i react-google-login-lite

1. client < src < components < auth

\*\* SocialLogin.tsx

2. client < src < pages

\*\* login.tsx (import SocialLogin)

3. client < src < redux < actions

\*\* authAction.ts --> create googleLogin function

4. server < controller

\*\* authCtrl.ts --> create google
\*\* authCtrl.ts --> registerUser

5. server < routes

\*\* authRouter.ts --> create router for

6. server < config

\*\* interface.ts --> IGgPayload
\*\* interface.ts --> IUserParams

### Facebook Login

npm i react-facebook-login-lite

https://www.youtube.com/watch?v=CAzU531ar7U&list=PLs4co9a6NhMw7xB4xPSkSQRM8uQVAZak6&index=17 --> how to create facebook web app (3:00)

do not use node-fetch but import fetch from 'cross-fetch' !! it is the reason facebook login crush

### UPLOAD_CLOUDINARY

https://cloudinary.com/

### login --> setting (top right side ( gear shape )) --> upload tab --> add upload preset (Upload presets:) --> copy upload preset name and paste it in imageUpload --> fetchAddress (dashboard --> account detail --> more --> API Base URL more --> Image)

### SMS CODE !!!

TWILIO_SERVICE_ID = verify --> service (https://console.twilio.com/us1/service/verify/VAec3fe0642fedd54f8cc14c868273944a/verify-service-settings?frameUrl=%2Fconsole%2Fverify%2Fservices%2FVAec3fe0642fedd54f8cc14c868273944a%2Fsettings%3Fx-target-region%3Dus1)

https://www.youtube.com/watch?v=GvhiFQDUJxg&list=PLs4co9a6NhMw7xB4xPSkSQRM8uQVAZak6&index=17 14:00

### solution for npm install error (npm ERR! code ERESOLVE)

npm install react-quill --save --legacy-peer-deps

### socket.io

realtime comment --> npm i socket.io && npm i socket.io-client

https://socket.io/

https://socket.io/docs/v4/client-api/
