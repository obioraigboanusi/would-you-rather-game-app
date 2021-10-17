# Would-You-Rather Game App

Would-You-Rather is a React and Redux Application that allows a user to play the "Would You Rather?" Game.

## The Project

This app was built with React JavaScript UI Framework, Redux for state management, Semanatic UI and css for styling.
This project is part of my assessment in the React Developer Nanodegree on [Udacity](https://www.udacity.com). The goal is to solidify my understanding of React and Redux. I now have deeper understanding on improving an application’s state predictability; establishing strict rules for getting, listening, and updating the Redux store; and identifying what state should live inside of Redux and what state should live inside of React components.

## The Game

The game goes like this: A user is asked a question in the form: “Would you rather [option A] or [option B] ?”. Answering "neither" or "both" is against the rules. So, the must choose an option to proceed.

## App Walk-Through

This app enables a user to answer questions, see which questions they haven’t answered, see how other people have voted, post questions, and see the ranking of users on the leaderboard.

Hence, there is a login page for user authentication, home page which hosts both answered questions and unanswered questiions on two different tabs.

On the Unanswered questions tab, a user can choose a question by clicking "View full" button. The user is then taken to details page where he/she can choose an option and submit.

Also, the answered questions tab hosts the answered questions. Selecting each question will take the user to a new page where he/she can see how he/she responded, how others responded, and the winning option.

With the'add' page the user can create a question and it will be displayed on the home page.

The leaderboard page shows how users are performing in the game by rank. The rank is determined by the sum of questions answered and questions created.

## Installation

To use this app you must have already have [git](https://git-scm.com/downloads) and [node](https://nodejs.org/en/) intsalled in your machine, if not go ahead install them.

The following steps will guide you to get Would-You-Rather up and running on your computer.

1.  Clone Would-You-Rather Game App
    Clone Would-You-Rather Game App by running the following command

```
git clone https://github.com/obioraigboanusi/would-you-rather-game-app.git
```

2.  Istall Would-You-Rather
    Switch to new clone app by running

```
cd would-you-rather-game-app
```

Then install the app by running

```
npm install
```

or

```
yarn install
```

3.  Start Would-You-Rather Game App
    On completed of installation, start the app by running

```
npm start
```

or

```
yarn start
```

Wait some seconds while the app starts and opens the home screen.

Awesome!!!
You can now enjoy the full functionality of Would-You-Rather Game App.

## Contributors

1.  [ Obiora Igboanusi](https://github.com/obioraigboanusi)
2.  [Udacity](https://www.udacity.com)

## Acknowledgement

1. [Udacity Team](https://www.udacity.com)
2. [UI Dev](https://ui.dev/react-router-v4-handling-404-pages/)
