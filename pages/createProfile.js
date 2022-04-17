import * as React from 'react';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';


export default function createProfile() {

    return (
        <div>
            <Container  component="main" maxWidth="xs" sx={{mt:10}}>
                
                <box sx={{display: 'flex', flexDirection: 'column', align: 'center'}}>
                    <Typography component="h4" variant="h4" align="center">
                        Create profile
                    </Typography>
                    <box component="form" noValidate>
                        <Button fullWidth variant="outlined" size = "large" sx={{mt:2}}>Login with Google</Button>
                        <Button fullWidth variant="outlined" size = "large" sx={{mt:2}}>Login with Metamask</Button>
                        <TextField margin="normal" required fullWidth id="firstName" label="First Name" name="firstName" type="firstName" autoComplete="firstName" autoFocus/>
                        <TextField margin="normal" required fullWidth id="lastName" label="Last Name" name="password" type="password" autoComplete="password" autoFocus/>
                        <Grid container spacing={1}>
                            <Grid item xs>
                                <TextField margin="normal"   id="day" label="Day Of Birth" name="day" type="day" autoComplete="day" autoFocus/>
                            </Grid>
                            <Grid item >
                                <TextField margin="normal"  id="month"  name="month" type="month" autoComplete="month" autoFocus/>
                            </Grid>
                        </Grid>
                        <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus/>
                        <TextField margin="normal" required fullWidth id="password" label="Password" name="password" type="password" autoComplete="password" autoFocus/>
                        <TextField margin="normal" required fullWidth id="password" label="Retype Password" name="password" type="password" autoComplete="password" autoFocus/>
                        <Link href="" >
                            <Button size="large"  sx={{mt:2}} variant="contained" color="primary">Register</Button>
                        </Link>
                        <Grid container sx={{mt:3}}>
                            <Grid item>
                                <Link href="./login">Already have an account? Login</Link>
                            </Grid>
                        </Grid>
                    </box>
                </box>
            </Container>
        </div>
    );
}