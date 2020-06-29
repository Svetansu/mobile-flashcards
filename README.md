# Mobile Flashcards v1.1

This project is my second submission for the Mobile Flashcards react-native application, a project for the Udacity React Developer Nanodegree.

## About...

Mobile flashcards is a quiz-based application which allows users to test their knowledge about a particular field, or deck, in the app. The user can answer quizzes, create new ones, and retry a quiz if they're unhappy with their score. The project is built using the foundations of react-native, along with redux and react-navigation, among others.

The application was made in the Expo Snack environment. It was tested on the iOS, web and android simulators available in Expo Snack.

I tested the application on: 

    --  iPhone 6S
    --  Mi 9T Pro 

I have added some information below to make understanding my work easier:

    --  I chose to distribute App.js into separate components (or screens), which are:
            - Dashboard.js: Component to render all decks for the user to choose and the functionality to switch to adding a new deck.
            - DeckView.js: Component to render a basic deck view, allowing users to take a quiz or add cards to the deck. 
            - AddCard.js: Component which allows the functionality to add a card to a deck.
            - AddDeck.js: Component which allows the functionality to add a new deck.
            - ActionButton.js: A button component to increase app modularity.
            - Info.js: Component used to render the show Answer/show Question button during a quiz.
            - Quiz.js: Component which renders the entire quiz, and the functionality to retry athe quiz or return to DeckView.
            - ScreenContainer.js: The component used manage all navigation in the app.

Some important features of the project include:
    
    -- State management
    -- Use of APIs
    -- Search handling
    -- Routing
    -- Context
    -- Redux store and its features
    -- Middleware
    -- React-native
    -- React-navigation
    -- Notifications
    -- Permissions


## To get started...

To get started developing right away:

* install all project dependencies with `npm install`/`yarn install`/`expo install`
* start the development server with `npm start`/`yarn start`/`expo start`
