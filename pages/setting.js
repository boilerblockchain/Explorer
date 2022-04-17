import * as React from 'react';
import { Container, Grid, TextField, Button} from "@mui/material";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

export default function User() {
    return(
        <Container align='center' sx={{mt:6,width:'55ch'}} >
            <ManageAccountsIcon sx={{ fontSize: 180 }}/>
            <Grid container sx={{mt:2}} spacing={2}>
                <Grid item xs={6} >
                    <TextField disabled label="First Name"></TextField>
                </Grid>
                <Grid item xs={6}>
                    <TextField disabled label="Last Name"></TextField>
                </Grid>
            </Grid>
            <TextField disabled sx={{mt:4,mb:4}} label="Username"></TextField>
            <TextField disabled label="Password"></TextField>
            <TextField
                disabled
                label="Notes"
                multiline
                rows={4}
                sx={{mt:4}}>
            </TextField>
            <Grid container sx={{mt:4,width:'25ch'}} spacing={2}>
                <Grid item>
                    <Button href="" size="large" variant="outlined">Edit</Button>
                </Grid>
                <Grid item>
                    <Button href="./landing" size="large" variant="contained">Save</Button>
                </Grid>
            </Grid>
        </Container>

    );

}