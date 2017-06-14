import React from 'react'
import PropTypes from 'prop-types'

export const CardsInHands = ({children}) => {
	return (<div>
		<h3>Your cards</h3>
		<div>{children}</div>
	</div>)
}

CardsInHands.propTypes = {
	children: PropTypes.node
}

export default CardsInHands