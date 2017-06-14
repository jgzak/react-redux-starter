import _ from 'lodash';

export const cardsInDeck = (cardsInDeck = [], action) => {
	switch(action.type) {
		case 'ADD':
			debugger
			let newCards = cardsInDeck.slice(0)
			_.pullAt(newCards, [action.index])	
			return newCards
		default:
			return cardsInDeck
	}
}

export default cardsInDeck