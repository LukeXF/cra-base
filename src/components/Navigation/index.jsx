import React from 'react';
import { AppBar, Box, IconButton, List, ListItem, Toolbar, Typography, Link } from "@mui/material";
import { Menu } from "@mui/icons-material";
import styles from './styles';
import { useTheme } from '@mui/material/styles';
import { NavLink as RouterLink } from 'react-router-dom';

const Navigation = () => {
	const theme = useTheme();

	return <div css={styles(theme)}>
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					>
						<Menu/>
					</IconButton>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Test
					</Typography>

					<List className="nav-links">
						<ListItem>
							<Link className="nav-links-link" component={RouterLink} exact to="/">Home</Link>
						</ListItem>
						<ListItem>
							<Link className="nav-links-link" component={RouterLink} to="/about">About</Link>
						</ListItem>
						<ListItem>
							<Link className="nav-links-link" component={RouterLink} to="/account">Account</Link>
						</ListItem>
					</List>
				</Toolbar>
			</AppBar>
		</Box>
	</div>
}

export default Navigation;
