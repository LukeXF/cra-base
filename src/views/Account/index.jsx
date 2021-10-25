import React, { useEffect, useState } from 'react';
import AccountCard from "../../components/AccountCard";
import { Container, Grid } from "@mui/material";
import axios from "axios";
import Loader from "../../components/Loader";

const Account = () => {
	const [allAccounts, setAllAccounts] = useState([]);
	const [loading, setLoading] = useState(true);

	const loadUsers = async () => {
		try {
			const url = "https://dummyapi.io/data/v1"
			const limit = 10;
			const { data } = await axios.get(`${url}/user?limit=${limit}`, {
				headers: {
					'app-id': '6176cf6c0fe72e5cc567ceb5'
				}
			});
			console.log({ data })
			setAllAccounts(data?.data)
			setLoading(false);
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


	if (loading) return <Loader/>
	return <div>
		<Container>

			<Grid container spacing={2}>
				<Grid item md={4}>
					<h1>Your account</h1>
					<AccountCard {...allAccounts[0]} />
				</Grid>
			</Grid>
			<hr/>
			<Grid container spacing={2}>
				{allAccounts?.map(account => <Grid item md={4}><AccountCard {...account}/></Grid>)}
			</Grid>

		</Container>
	</div>;
}


export default Account;
