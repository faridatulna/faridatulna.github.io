import React from 'react'

import MyArticle from './MyArticle'
import MyButton from './MyButton'
import MySubject from './MySubject'

import { createMuiTheme, responsiveFontSizes, ThemeProvider, makeStyles } from '@material-ui/core/styles'
import {Divider, Typography, Grid, Container, Button} from '@material-ui/core'

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const cards = [1, 2, 3]
const hobies = ["Novel","Comic","Anime","Fantasy Movie","Code","Tech","Puzzle","Cook","Trip","Crossword"]
const subjectButtons = ["laravel","node.js","react","flask","kotlin","go","php native","adobe xd","unity-c#","c++/c","python"]

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
	      margin: theme.spacing(0.3),
	    },
	},
	padding: theme.spacing(8, 0, 6),
	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
	},
	titleStyle2:{
		color:'#f9d110',
	},
	divStyle1:{
		backgroundColor:'#e0e0e038',
	},
}));

export default function MainContent() {
	const date = new Date()
	const hours = date.getHours()
	let timeOfDay = ""

	const classes = useStyles();

	if(hours < 12){
		timeOfDay = "morning"
	}else if(hours >= 12 && hours < 17){
		timeOfDay = "afternoon"
	}else{
		timeOfDay = "night"
	}

	return (
		<main id="myContent">
		<ThemeProvider theme={theme}>
		<noscript>Good {timeOfDay}!</noscript>
			<section id="intro" className="myContent style1 fullscreen fade-up">
				<Container maxWidth="md">
					<Grid container item md={12} spacing={2} className="split style1">
						<Grid item md={5}>
							<Typography className="animate__animated animate__shakeX" component="h2" variant="h2" align="center" color="primary" gutterBottom>
									About Me
							</Typography>

							<Typography variant="subtitle1" align="left" paragraph>
									Farida is a programmer and tech enthusiast who like to explore and expand her skills. 
									She fell in love with web programming since 1st year at college, and always improve and challenge herself in coding practice.
							</Typography>	
							<Typography variant="subtitle1" align="left" paragraph>
									<strong>Hobies</strong>
							</Typography>
							<div className={classes.root}>
								{hobies.map((subjects) => (
									<Button key={subjects} variant="outlined" color="inherit">{subjects}</Button>
								))}
							</div>
						</Grid>
						<Grid item md={7}>
							<Typography className="animate__animated animate__shakeY" color="secondary" component="h2" variant="h2" align="center" gutterBottom>
									MY TechCorner
							</Typography>
							<Divider variant="middle" className={classes.divStyle1}/>
							<MySubject />
						</Grid>
					</Grid>

				</Container>
			</section>

			<section id="proSide" className="myContent style2 fullscreen fade-down">
				
				<Typography component="h2" variant="h2" color="inherit" align="center" gutterBottom>
						MY Projects
				</Typography>	
				<Container className={classes.cardGrid} maxWidth="md">
					<Grid container spacing={4}>
					{cards.map((card) => (
						<Grid item key={card} xs={12} sm={6} md={4}>
						<MyArticle href="/tictactoe"/>
						</Grid>
						))}
					</Grid>
				</Container>
			</section>
			</ThemeProvider>
		</main>
	)
}