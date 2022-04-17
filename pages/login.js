import Login from "../components/Login";
import { useMoralis } from "react-moralis";
import SignedIn from "../components/SignedIn";

<<<<<<< HEAD
export default function Login() {

    return (
        <div>
            <Container  component="main" maxWidth="xs" sx={{mt:10}}>
                <box sx={{display: 'flex', flexDirection: 'column', align: 'center'}}>
                    <Typography component="h4" variant="h4" align="center">
                        Sign in
                    </Typography>
                    <box component="form" noValidate>
                        <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus/>
                        <TextField margin="normal" required fullWidth id="password" label="Password" name="password" type="password" autoComplete="password" autoFocus/>
                        <Link href="">
                            <Button size="large"  sx={{mt:2}} variant="contained" color="primary">Sign In</Button>
                        </Link>
                        <Grid container sx={{mt:3}}>
                            <Grid item xs>
                                <Link href="./createProfile">Register</Link>
                            </Grid>
                            <Grid item>
                                <Link href="pages/transaction" >Forgot the Password?</Link>
                            </Grid>
                        </Grid>
                    </box>
                </box>
            </Container>
        </div>
    );
}
=======
export default function login() {
  const { isAuthenticated } = useMoralis();
  return (
    <div>
      <Login />
    </div>
  );
}
>>>>>>> ca0e56b18c2152d1c68f94ea44953e26134a03fc
