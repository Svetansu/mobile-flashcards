  import { ADD_DECK, RECEIVE_DECKS, ADD_CARD_TO_DECK } from '../actions/index';

  function deck(state={}, action) {
    switch (action.type) {
      case ADD_DECK:
      const  newDeck = { [action.deck] : {
            title: action.deck,
            questions: []
        }
      }
        return {
          ...state,
          ...newDeck
        }
      case RECEIVE_DECKS:
        return {
          ...state,
          ...action.decks
        }
      case ADD_CARD_TO_DECK:
      const { question, answer, deck } = action.card;
        return {
          ...state,
          [deck]: {
            ...state[deck],
            questions: [...state[deck].questions, {question, answer}]
          }
        }
      default:
        return state;
    }
  }


  export default deck;