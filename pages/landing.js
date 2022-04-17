import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import LoginIcon from '@mui/icons-material/LoginOutlined';





export default function Home() {
    return (
		<Box  sx={{ display: 'flex', flexWrap: 'wrap' }}>
		<Button href="./login" size="large"  sx={{mt:15,ml:10}} variant="outlined" endIcon={<LoginIcon />}>Login</Button>
		<Grid container spacing={2} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: "65vh" }}  width='100%'>
			<Grid item>
				<Typography component="h2" variant="h2">Blockchain Explorer</Typography>
			</Grid>
			<Grid item>
			<FormControl  sx={{ m: 1,width:'55ch' }} variant="filled">
          			<InputLabel htmlFor="filled-adornment-amount">Paste Here</InputLabel>
          			<FilledInput
            		id="filled-adornment-amount"/>
        	</FormControl>
			</Grid>
			<Grid>
				<Button href="" size="large"  sx={{mt:4}} variant="contained" color="primary">Search</Button>
			</Grid>
		</Grid>
		</Box>
	);
}