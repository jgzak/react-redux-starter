import React from 'React'
import {connect} from 'react-redux'
import {getRandomCard} from '../actions'

let onButtonClick;
const CardsDeckContainer = ({onNewCardButtonClick, onAddCardButtonClick, card}) => {
	debugger
	return (<div>
				<div>{card}</div>
				<div>
					<button type="button" onClick={onNewCardButtonClick}>New Card</button>
					<button type="button" onClick={onAddCardButtonClick}>Add Card</button>
				</div>
			</div>)	
}
	

const mapStateToProps = state => {
	debugger
	return {card: state.cards.card}
}

const mapDispatchToProps = dispatch => {
	return {
		onNewCardButtonClick: () => dispatch(getRandomCard()),
		onAddCardButtonClick: () => dispatch(getRandomCard())
	}
}


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CardsDeckContainer)