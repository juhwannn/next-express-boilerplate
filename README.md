TODO: 
- npx create-next-express 시 옵션 (generate-app.js)

# Next.js 
`npx create-next-app`

# Express
`npm install express`

# Packages
- styled-components
- dotenv
- body-parser
- morgan
- connect-multiparty
- cookie-parser
- node-cron
- axios
- swagger-jsdoc
- swagger-ui-express

# Installation
```shell script
$ npm install create-next-express
```
```shell script
$ npx create-next-express ${FOLDER_NAME}
```

# App structure
```
.
├── pages
│    ├── _app.tsx
│    ├── api
│    ├── index.tsx
│    └── test.tsx
├── public
│    ├── favicon.ico
│    └── vercel.svg
├── serverSides
│    └── routes
├── styles
│    ├── Home.module.css
│    └── globals.css
├── server.tsx
├── next.config.js
├── README.md
├── package.json
└── package-lock.json
```

# Dotenv
You need to create an .env file
- SERVER_PORT
- DB_HOST
- DB_DATABASE
- DB_ID
- DB_PW
- DB_PORT

# Github
https://github.com/juhwannn/next-express-boilerplate

# Velog
https://velog.io/@juhwannn/Next.js-Custom-Server-%EC%84%A4%EC%A0%95-Express
