import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Skeleton } from '@mui/material';

const AccountCard = ({id, title, firstName, lastName, picture}) => {
	return <Card sx={{ maxWidth: 345 }}>
		{!!id ? <CardMedia
			component="img"
			height="140"
			image={picture}
			alt={`${firstName}'s profile picture`}
		/> : <Skeleton variant="rectangular" width={345} height={140} />}
		<CardContent>
			<Typography gutterBottom variant="h5" component="div">
				{!!id ? `${title} ${firstName} ${lastName}` : <Skeleton variant="text" />}
			</Typography>
			<Typography variant="body2" color="text.secondary">
				{!!id ? `${firstName}'s Profile` : <Skeleton variant="text" width={100} />}
			</Typography>
		</CardContent>
		<CardActions>
			<Button size="small" disabled={!id}>Share</Button>
			<Button size="small" disabled={!id}>Learn More</Button>
		</CardActions>
	</Card>
}

export default AccountCard;
