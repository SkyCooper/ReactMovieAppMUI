# Project : Movie App

<img src="https://thumbs.gfycat.com/ExemplaryFairFeline-max-1mb.gif" align="right" height="300" width="400" />

## Check The Live Website ➡️ [Live Website](https://skycooper.github.io)

## Visualization of the Website

![Form](./gallery.gif)

## Description

Project aims to create a Movie App using React.

## Learning Outcomes

At the end of the project, you will be able to;

- improve coding skills within HTML & CSS & JS & ReactJS.

- use git commands (push, pull, commit, add etc.) and Github as Version Control System.

## Problem Statement

- We are adding a new project to our portfolios. So you and your colleagues have started to work on the project.

## Project Skeleton

```
Project(folder)
|
|----README.md
├── public
│     └── index.html
├── src
│    ├── auth
│    │     └── firebase.js
│    ├── components
│    │     ├── MovieCard.js
│    │     └── Navbar.js
│    ├── context
│    │     └── AuthContext.js
│    ├── pages
│    │     ├── Login.js
│    │     ├── Register.js
│    │     ├── Main.js
│    │     └── MovieDetail.js
│    ├── router
│    │     └── Router.js
│    ├── App.js
│    ├── App.css
│    ├── index.js
│    └── index.css
├── package.json
├── .env
└── yarn.lock
```

### Dependencies

- react-router-dom@6.3

- axios

- https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

- styled-components

- react-bootstrap, bootstrap

### Overview

I mastered HTML & CSS & JS & ReactJS features in this project.
You can see the visual representation of the website above.

## Steps to Solution

- Before start you can watch these tutorials:
  - https://www.youtube.com/watch?v=9bXhf_TELP4
  - https://www.youtube.com/watch?v=vDT7EnUpEoo
- Step 1 : Create React App using `npx create-react-app movie-app`

- Step 2 : Signup `https://firebase.google.com/` and create new app in firebase.
  Firebase is a backed application development software that enables developers to develop iOS, Android and Web apps. It provides developers with a variety of tools and services to help them develop quality apps, grow their user base, and earn profit. It is built on Google’s infrastructure. Firebase offers a number of services, including: analytics,authentication, cloud messaging, realtime database, performance and test lab. Firebase is categorized as a NoSQL database program, which stores data in JSON-like documents.

![Project 005 Snapshot](firebase-create-app.gif)

- Step 3 : Use `https://firebase.google.com/docs/auth/web/start` and create `Authentication` operations.
  - Add the Firebase Authentication JS codes in your `firebase.js` file and initialize Firebase Authentication:

```jsx
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Replace the following with your app's Firebase project configuration at project settings part
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
```

- Use this method to `Sign up new users` :

```jsx
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
  })
  .catch((error) => {
    console.log(error);
  });
```

- Go to https://console.firebase.google.com => Authentication => sign-in-method => `enable Email/password`
- Use this method to `Sign in existing users` :

```jsx
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
  })
  .catch((error) => {
    console.log(error);
  });
```

- Use this method to `Set an authentication state observer and get user data` :

```jsx
import { getAuth, onAuthStateChanged } from 'firebase/auth';

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
  } else {
    // User is signed out
  }
});
```

- Go to https://console.firebase.google.com => Authentication => sign-in-method => `enable Google`
- Use this method to `Authenticate Using Google with Popup` :

```jsx
import { GoogleAuthProvider } from 'firebase/auth';

const provider = new GoogleAuthProvider();

signInWithPopup(auth, provider)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;
  })
  .catch((error) => {
    // Handle Errors here.
    console.log(error);
  });
```

- Use this method to `Sign Out` :

```jsx
import { getAuth, signOut } from 'firebase/auth';

signOut(auth)
  .then(() => {
    // Sign-out successful.
  })
  .catch((error) => {
    // An error happened.
  });
```

- Step 4 : Signup `https://www.themoviedb.org/documentation/api` and get API key. In order to get data use `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`, to search movies use `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=` and to get movie details use `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`. Use `https://image.tmdb.org/t/p/w1280${poster_path}` for image `src`.

- Step 5: You can use css frameworks like Bootstrap, Semantic UI, Material UI.

- Step 6: Add project gif to your project and README.md file.

## Resources

- 🔥 You can use [`data.js`](./src/helper/data.js) for your own work.

## Support
- Open an Issue, I will check it a soon as possible 👀

- Don't forget to show your support by  ⭐ the project!!

## Quick start

- Clone this repo using git clone https://github.com/SkyCooper/RecipeAppReactStyledComponent.git

- Move to the appropriate directory: cd recipe-app.

- Run npm run install in order to install dependencies and clean the git repo.

- Change configurations in /src/config/config.js according to your cosmicjs bucket.

- Run npm run dev to start the project in dev mode.

- Run npm run build to build the project in /dist folder.

- Now you're ready to rumble!

## Contributing

- Fork it (https://github.com/SkyCooper/RecipeAppReactStyledComponent)

- Create your feature branch (git checkout -b feature/fooBar)

- Commit your changes (git commit -am 'Add some fooBar')

- Push to the branch (git push origin feature/fooBar)

- Create a new Pull Request


# <center> ⌛ Happy Coding ✍ </center>
