import React from 'react'
import PropTypes from 'prop-types'

export const Card = ({value}) => (
	<div style={{border: 'solid red 1px', width: 100, height: 150, margin: 2}}>{value}</div>
)

export default Card