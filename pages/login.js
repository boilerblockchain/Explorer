import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { useWeb3 } from "@3rdweb/hooks"
import Login from "../components/Login";
import { useMoralis } from 'react-moralis';
import SignedIn from "../components/SignedIn";

export default function login() {
    const {isAuthenticated} = useMoralis();
    // const { connectWallet, address, error } = useWeb3();
    return (
        <div>
            {/* <Container  component="main" maxWidth="xs" sx={{mt:10}}>
                <box sx={{display: 'flex', flexDirection: 'column', align: 'center'}}>
                    <Typography component="h4" variant="h4" align="center">
                        Sign in
                    </Typography>
                    <box component="form" noValidate>
                        <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus/>
                        <TextField margin="normal" required fullWidth id="password" label="Password" name="password" type="password" autoComplete="password" autoFocus/>
                        <Link href="" >
                            <Button lg fullWidth sx={{mt:2}}variant="contained" color="primary">Sign In with E-mail</Button>
                        </Link>
                        <div>
						    <Login/>
					    </div>
                        <Grid container sx={{mt:3}}>
                            <Grid item xs>
                                <Link href="/register">Register</Link>
                            </Grid>
                            <Grid item>
                                <Link href="pages/transaction" >Forgot the Password?</Link>
                            </Grid>
                        </Grid>
                    </box>
                </box>
            </Container> */}
            <div>
                {
                    isAuthenticated ? (
                        <SignedIn/>
                    ) : (
                        <Login/>
                    )
                }
			</div>
        </div>
    );
}