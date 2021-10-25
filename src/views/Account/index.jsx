import React from 'react';
import AccountCard from "../../components/AccountCard";
import { Container } from "@mui/material";

const Account = () => {

	return <div>
		<Container>
			<h1>Your account</h1>
			<AccountCard/>
		</Container>
	</div>;
}


export default Account;
