# Chitter - Social Media Platform

Chitter is a simple social media platform that allows users to post short messages known as "peeps". This repository contains the frontend and backend code for the Chitter application.

## Technologies Used
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![Material UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Mocha](https://img.shields.io/badge/mocha.js-323330?style=for-the-badge&logo=mocha&logoColor=Brown)
![Chai](https://img.shields.io/badge/chai.js-323330?style=for-the-badge&logo=chai&logoColor=red)

## Getting Started

1. Clone the repository to your local machine.

2. Install dependencies for the frontend:

   ```bash
   cd FrontEnd
   npm install
   ```

3. Install dependencies for the backend:

   ```bash
   cd BackEnd
   npm install
   ```

4. Start the backend server:

   ```bash
   cd BackEnd
   npm start
   ```

5. Start the frontend development server:

   ```bash
   cd FrontEnd
   npm run dev
   ```

For tests, use the following command:

```bash
npm test
```

## Component hierarchy
| Component       | Description                                   | Children         |
| --------------- | --------------------------------------------- | ---------------- |
| **App**         | The root component that manages the routing   | - ChitterHome    |
|                 | and main structure of the application.        | - SignInPage     |
|                 |                                               | - SignUpPage     |
| **ChitterHome** | Represents the main content of the Chitter    | - Sidebar        |
|                 | application, displaying user's feed.          | - PeepForm       |
|                 |                                               | - PeepCard       |
| **SignInPage**  | Renders the sign-in form for users to log in. | - SignInForm     |
| **SignUpPage**  | Displays the sign-up form for new users to    | - SignUpForm     |
|                 | create an account on Chitter.                 |                  |


## Data Flow Table
| Component       | Data Received               | Data Passed           | Data Returned/Modified      | Actions/Functions           |
|-----------------|---------------------------- |---------------------- |-----------------------------|-----------------------------|
| App             |                            |                       |                             |                             |
| ChitterHome     | signedIn, peeps, user      | handleAddPeep        |                             |                             |
| PeepForm        | user                       | handleAddPeeps       |                             |                             |
| PeepCard        | peeps                      |                       |                             |                             |
| Sidebar         | signedIn, user             |                       |                             |                             |
| SignInPage      | handleSignIn               |                       |                             |                             |
| SignUpPage      |                            |                       |                             |                             |
| authenticationHelpers.js |                    |                       |                             | checkSignIn                 |
| chitterAPICalls.js |                         |                       | getPeeps, addPeep           |                             |
| asyncFunctions  |                            |                       |                             |                             |


## Acknowledgments
- [Mongoose Docs](https://mongoosejs.com/docs/)
- [Chai Docs](https://github.com/chaijs/chai)
- [Material UI Icons](https://mui.com/material-ui/material-icons/)
- [Github Badges](https://dev.to/envoy_/150-badges-for-github-pnk)