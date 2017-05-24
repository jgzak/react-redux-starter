const initState = {card: '5c'}

export const cards = (state = initState, action) => {
	debugger
	switch(action.type) {
		case 'GET':
			let newState = Object.assign({}, state);
			newState.card= action.data
			return newState
		default:
			return state
	}
}

export default cards