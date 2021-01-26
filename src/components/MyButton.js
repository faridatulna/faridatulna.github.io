import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  myBtn:{
  	flexGrow:1,
  },
}));

export default function MyButton(props) {
	const classes = useStyles()

	return (
		<Button className={classes.myBtn}
			variant={props.variant} 
			color={props.color} 
			onClick={props.onClick}
			href={props.href}>
				{props.name}
		</Button>
	)
}
