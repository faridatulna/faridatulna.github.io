import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import {Button} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
  	backgroundColor: "#202020",
	border: "2px solid light",
    fontSize: "3em",
	fontWeight: "7em",
	color: "#e0e0e0",
	cursor: "pointer",
	outline: "none",
  },
}));

export default function Square(props){
	const style = useStyles()

	return(
		<Button className={style.root} onClick={props.onClick}> 
			{props.value} 
		</Button>
	)
}
