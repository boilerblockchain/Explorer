import Head from "next/head";
// import Link from "next/link";
//TODO: add forget password page
import { useRouter } from "next/router";
import { useCallback, useEffect, useRef } from "react";
import { useCurrentUser } from '/lib/user';

import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

const LoginPage = () => {
    const emailRef = useRef();
    const passwordRef = useRef();

    const { data: { user } = {}, mutate, isValidating } = useCurrentUser();
    const router = useRouter();
    useEffect(() => {
        if (isValidating) return;
        if (user) router.replace("/feed");
    }, [user, router, isValidating]);

    const onSubmit = useCallback(
        async (event) => {
            event.preventDefault();
            try {
                const response = await fetcher("/api/auth", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        email: emailRef.current.value,
                        password: passwordRef.current.value,
                    }),
                });
                mutate({ user: response.user }, false);
            } catch (e) {
                console.error(e);
            }
        },
        [mutate]
    );

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
                        <Link href="" >
                            <Button lg fullWidth sx={{mt:2}}variant="contained" color="primary">Sign In</Button>
                        </Link>
                        <Grid container sx={{mt:3}}>
                            <Grid item xs>
                                <Link href="sign-up">Register</Link>
                            </Grid>
                            <Grid item>
                                <Link href="login" >Forgot the Password?</Link>
                            </Grid>
                        </Grid>
                    </box>
                </box>
            </Container>
        </div>
    );
};

export default LoginPage;