import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import {IconButton,Button,AppBar,Toolbar,Typography,Tooltip} from '@material-ui/core'
import {LinkedIn, GitHub} from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
	const classes = useStyles();

	return(
		<AppBar id="myHeader" position="fixed">
			<Toolbar>
			        <Typography variant="h5" component="h5" className={classes.title}>
						FA
			        </Typography>

				    <Tooltip title="Farida's Blog"><Button color="inherit" href="#blogSide">Blog</Button></Tooltip>
			        <Tooltip title="Farida's Project"><Button color="inherit" href="#proSide">Projects</Button></Tooltip>

			        <Tooltip title="Farida's Linkedin"><IconButton color="inherit" href="https://www.linkedin.com/in/faridatulna/">
			        	<LinkedIn fontSize = "medium"/>
			        </IconButton></Tooltip>
			        <Tooltip title="Github repository"><IconButton color="inherit" href="https://github.com/faridatulna">
			        	<GitHub fontSize = "medium"/>
					</IconButton></Tooltip>
		    </Toolbar>
		</AppBar>
	)
}