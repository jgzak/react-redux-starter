import store from '../'

export const getRandomCard = () => {
	let state = store.getState()
	let randomIndex = Math.floor(Math.random() * 16)
	return {
		type: 'ADD',
		key: Math.random(),
		index: randomIndex,
		value: state.cardsInDeck[randomIndex]
	}
}

export function emitAdd (i, v) {
	return {
			type: 'ADD',
			key: Math.random(),
			index: i,
			value: v 
		}
}

export const getAsyncRandomCard = () => {
	return (dispatch, getState) => {
		let state = getState()
		let index = Math.floor(Math.random() * 16)
		let value = state.cardsInDeck[index];
		// dispatch(emitAdd())
		setTimeout(() => dispatch(emitAdd(index, value)), 5000)
	}
}


