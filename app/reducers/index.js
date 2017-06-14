import {combineReducers} from 'redux'
import {cardsInHands} from './cardsInHands'
import {cardsInDeck} from './cardsInDeck'


export default combineReducers({cardsInHands, cardsInDeck})