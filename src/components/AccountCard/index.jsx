import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

const AccountCard = ({id, title, firstName, lastName, picture}) => {
	return <Card sx={{ maxWidth: 345 }}>
		<CardMedia
			component="img"
			height="140"
			image={picture}
			alt={`${firstName}'s profile picture`}
		/>
		<CardContent>
			<Typography gutterBottom variant="h5" component="div">
				{title} {firstName} {lastName}
			</Typography>
			<Typography variant="body2" color="text.secondary">
				{firstName}'s Profile
			</Typography>
		</CardContent>
		<CardActions>
			<Button size="small">Share</Button>
			<Button size="small">Learn More</Button>
		</CardActions>
	</Card>
}

export default AccountCard;
