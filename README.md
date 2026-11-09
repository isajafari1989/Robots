# RoboFriends

A small React app that fetches a list of users and shows each one as a robot card. Typing in the search box filters the cards by name.

This is a learning project for practicing React components, state, and data fetching. It is not a production application.

## Features

- Loads users from the [JSONPlaceholder](https://jsonplaceholder.typicode.com/users) API when the page opens
- Renders a card for each user with a [RoboHash](https://robohash.org/) image, name, and email
- Filters the cards by name as you type
- Places the card list in a scrollable area
- Wraps the card list in an error boundary

## Tech stack

- React 18
- Create React App (`react-scripts` 5)
- [Tachyons](https://tachyons.io/) for layout and card styles

## Run locally

Node.js and npm are required.

```bash
npm install
npm start
```

The development server runs at [http://localhost:3000](http://localhost:3000).

Create a production build with:

```bash
npm run build
```

## Live demo

[https://isajafari1989.github.io/Robots](https://isajafari1989.github.io/Robots)
