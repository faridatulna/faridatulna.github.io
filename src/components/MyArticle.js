import React from 'react'

import PostImage from './comingsoon.png'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Skeleton from '@material-ui/lab/Skeleton'
import {Link} from 'react-router-dom'
import { Button, Typography, CardMedia, CardContent, CardActions, Card } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	padding: theme.spacing(8, 0, 6),
	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
	},
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: '#33383d', 
	},
	cardMedia: {
    paddingTop: '56.25%', // 16:9
    },
    cardContent: {
    	flexGrow: 1,
    	backgroundColor: '#33383d', 
    	color: '#e0e0e0',
    },
}));

function Article(props) {
	const classes = useStyles()
	const { loading = false } = props

	return(
		<Card className={classes.card}>
			{loading ? (
		        <Skeleton animation="wave" variant="rect" className={classes.cardMedia} />
		      ) : (
			<CardMedia
			className={classes.cardMedia}
			image={PostImage}
			title="Coming Soon"
			/>
			)}

			<CardContent className={classes.cardContent}>
				{loading ? (
		          <React.Fragment>
		            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
		            <Skeleton animation="wave" height={10} width="80%" />
		          </React.Fragment>
		        ) : (
		        <React.Fragment>
					<Typography gutterBottom variant="h5" component="h2">
					Coming Soon
					</Typography>
					<Typography>
						Coming Soon
					</Typography>
				</React.Fragment>
				)}
			</CardContent>

			<noscript><CardActions>
				{loading ? (
		          <React.Fragment>
		            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
		            <Skeleton animation="wave" height={10} width="80%" />
		          </React.Fragment>
		        ) : (
				<Button size="small" color="secondary">
				View
				</Button>
				)}
			</CardActions></noscript>
		</Card>
	)
}

Article.propTypes = {
  loading: PropTypes.bool,
};

export default function Articles() {
	return (
		<div>
			<Article />
		</div>
	)
}