import { AppBar, Box, IconButton, List, ListItem, ListItemText, Toolbar, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";
import styles from './styles';
import { useTheme } from '@mui/material/styles';
import { Link } from "react-router-dom";

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
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className="test">
						Test
					</Typography>

					<List>
						<ListItem> <Link to="/"><ListItemText primary="Home"/></Link></ListItem>
						<ListItem> <Link to="/about"><ListItemText primary="About"/></Link></ListItem>
						<ListItem> <Link to="/account"><ListItemText primary="My Account"/></Link></ListItem>
					</List>
				</Toolbar>
			</AppBar>
		</Box>
	</div>
}

export default Navigation;
