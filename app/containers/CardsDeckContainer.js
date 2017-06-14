import React from 'React'
import {connect} from 'react-redux'
import {getRandomCard, getAsyncRandomCard} from '../actions'
import {CardsInHands} from '../components/CardsInHands.jsx'
import {Card} from '../components/Card.jsx'

const CardsDeckContainer = ({
							onNewCardButtonClick, 
							onPlayButtonClick, 
							cardsInHands
						}) => 
{
	return (<div>
				<CardsInHands>{cardsInHands.map(card => (<Card key={card.key} value={card.index}></Card>))}
				</CardsInHands>
				<div>
					<button type="button" onClick={onNewCardButtonClick}>New Card</button>
					<button type="button" onClick={onPlayButtonClick}>Play</button>
				</div>
			</div>)	
}
	

const mapStateToProps = state => {
	return {
		cardsInHands: state.cardsInHands,
		cardsInDeck: state.cardsInDeck,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onNewCardButtonClick: () => dispatch(getRandomCard()),
		onPlayButtonClick: () => dispatch(getAsyncRandomCard())
	}
}


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CardsDeckContainer)