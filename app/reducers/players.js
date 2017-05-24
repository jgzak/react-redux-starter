const initState = {player: '5abc'}

export const players = (state = initState, action) => {
	debugger
	switch(action.type) {
		case 'SHUFLE':
			let newState = Object.assign({}, state);
			newState.player= action.data
			return newState
		default:
			return state
	}
}

export default players