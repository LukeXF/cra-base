import React, { useEffect, useState } from 'react';
import AccountCard from "../../components/AccountCard";
import { Button, Container, Grid } from "@mui/material";
import axios from "axios";
import { NavLink as RouterLink } from 'react-router-dom';
// import Loader from "../../components/Loader";

const Account = () => {
	const [allAccounts, setAllAccounts] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {},]);
	// const [loading, setLoading] = useState(true);

	const loadUsers = async () => {
		try {
			const url = "https://dummyapi.io/data/v1"
			const limit = 10;

			// makes a GET request with a header API key
			const { data } = await axios.get(`${url}/user?limit=${limit}`, {
				headers: {
					'app-id': '6176cf6c0fe72e5cc567ceb5'
				}
			});

			// their API returns data inside the response, and axios results is data, hence data.data
			setAllAccounts(data?.data)

			// to remove the loader
			// setLoading(false);
		} catch (error) {
			if (axios.isAxiosError(error)) {
				// axios error
				console.log({ error });
			} else {
				// normal error
				console.log({ error });
			}
		}
	}
	useEffect(() => {
		// runs on first load, it's inside function to make it async
		loadUsers()
	}, [])


	// if (loading) return <Loader/>
	return <div>
		<Container>
			<Button variant="contained" component={RouterLink} to={'/account/billing'}>Billing</Button>
			<Grid container spacing={2}>
				<Grid item md={4}>
					<h1>Your account</h1>
					<AccountCard {...allAccounts[0]} />
				</Grid>
			</Grid>
			<hr/>
			<h1>All accounts</h1>
			<Grid container spacing={2}>
				{allAccounts?.map((account, i) => <Grid key={i} item md={4}>
					<AccountCard {...account}/>
				</Grid>)}
			</Grid>

		</Container>
	</div>;
}


export default Account;
