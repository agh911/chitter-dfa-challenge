# Chitter - Social Media Platform

Chitter is a simple social media platform that allows users to post short messages known as "peeps". This repository contains the frontend and backend code for the Chitter application.

## Technologies Used
### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![Material UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)

### Backend
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![Axios](https://img.shields.io/badge/axios-007ACC?style=for-the-badge&logo=axios&logoColor=white)
![Dotenv](https://img.shields.io/badge/dotenv-2E7D32?style=for-the-badge)
![Express Validator](https://img.shields.io/badge/express--validator-7B1FA2?style=for-the-badge)
![Cors](https://img.shields.io/badge/cors-FF6F00?style=for-the-badge)
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
| Component                | Data Received         | Data Passed    | Data Returned     | Actions     |
| ------------------------ | --------------------- | -------------- | ----------------- | ----------- |
| App                      |                       |                |                   |             |
| ChitterHome              | signedIn, peeps, user | handleAddPeep  |                   |             |
| PeepForm                 | user                  | handleAddPeeps |                   |             |
| PeepCard                 | peeps                 |                |                   |             |
| Sidebar                  | signedIn, user        |                |                   |             |
| SignInPage               | handleSignIn          |                |                   |             |
| SignUpPage               |                       |                |                   |             |
| authenticationHelpers.js |                       |                |                   | checkSignIn |
| chitterAPICalls.js       |                       |                | getPeeps, addPeep |             |
| asyncFunctions           |                       |                |                   |             |

## Tests
### Backend Tests

#### Routes
Index Route (/)
1. Test that a get request returns all peeps.
2. Test that a post request ads a new peep.

Authentication Routes (/signIn & /signUp)
1. Test that it successfully signs in a user with correct credentials.
2. Test that it returns 401 for invalid credentials.
3. Test that it returns 500 for an existing user.

#### Peeps Service
1. Test that it gets all peeps.
2. Test that it adds a new peep.

#### User Service
1. Test that it gets a user by email.

#### All Peeps Controller
1. Test that all peeps are returned.

#### Add Peep Controller
1. Test that a new peep is added.

### Frontend Tests
#### Authentication Helpers
1. Test that checkSignIn returns true when API call is successful.

#### Chitter API Calls
1. Test that getPeeps returns peeps when API call is successful.
2. Test that addPeep adds a peep when API call is successful.
3. Test that addPeep handles error response.

## Acknowledgments
- Ed's videos for connecting to MongoDB and Todo app walkthrough.
- [Mongoose Docs](https://mongoosejs.com/docs/)
- [Chai Docs](https://github.com/chaijs/chai)
- [Material UI Icons](https://mui.com/material-ui/material-icons/)
- [Github Badges](https://dev.to/envoy_/150-badges-for-github-pnk)
