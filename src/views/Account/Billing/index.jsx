import React, { useEffect, useState } from 'react';
import Loader from "../../../components/Loader";
import { Button, Container, List, ListItem, ListItemText, Typography } from "@mui/material";
import { NavLink as RouterLink } from "react-router-dom";

const Billing = () => {
	const [loading, setLoading] = useState(true);
	const [plan, setPlan] = useState(null);
	const [basket, setBasket] = useState([{name: 'table', price: 59}]);

	useEffect(() => {

		setTimeout(() => {
			setLoading(false);

			setPlan('Gold plan');
		}, 1000)

	}, [])

	if (loading) return <Loader/>
	return <Container>
		<h1>Billing</h1>
		<Button component={RouterLink} variant="contained" to={'/account'}>Back to main account</Button>
		<hr/>
		<Button variant="contained" onClick={() => {
			setPlan('Silver plan');
		}
		}>Set to silver plan</Button>
		<Typography>{plan}</Typography>
		<hr/>

		You have {basket?.length} amount of items in your basket.


		<Button variant="contained" onClick={() => {
			setBasket([
				...basket,
				{name: 'chair', price: 24}
			]);

			// if this wasn't state
			// basket.push('chair')
		}
		}>Add a chair</Button>

		<Button variant="contained" onClick={() => {
			setBasket([
				...basket,
				{name: 'lamp'}
			]);

			// if this wasn't state
			// basket.push('chair')
		}
		}>Add a lamp without price</Button>

		<List>
			{basket?.map(item => {
				return <ListItem>
					<ListItemText primary={item?.name ?? 'not found'} secondary={`£${item?.price}`} />
					{/*<ListItemText primary={item?.name ?? 'not found'} secondary={'£' + item?.price} />*/}
					{/*<ListItemText primary={item?.name || 'not found'} />*/}
					{/*<ListItemText primary={item && item.name ? item.name : 'not found'} />*/}
				</ListItem>
			})}
		</List>
	</Container>
}

export default Billing;
