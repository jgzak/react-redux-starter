import _ from 'lodash';

export const cardsInHands = (cardsInHands = [], action) => {
	switch(action.type) {
		case 'ADD':
			debugger;
			let newCards = cardsInHands.slice(0)	
			newCards.push({index: action.index, key: action.key, value: action.value})
			return newCards
		default:
			return cardsInHands
	}
}

export default cardsInHands