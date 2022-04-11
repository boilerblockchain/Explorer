import * as React from 'react';
import {Table,TableBody,TableCell,TableRow,Grid,Card, CardContent,Typography, CardActionArea,IconButton} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CardMedia from '@mui/material/CardMedia';

export default function Dashboard(){
    return(
        <div>
            <Grid container spacing={4} sx={{width: '95ch',margin: 'auto'}}>
                <Grid item xs> 
                    <Card sx={{minWidth: 45,backgroundColor: 'secondary.main'}} >
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Asset
                            </Typography>
                            <Typography variant="h5" component="div">
                                Wallet 1
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                active
                            </Typography>
                            <Typography variant="body2">
                                used a week ago
                            <br />
                            </Typography>
                            </CardContent>
                        <CardActionArea>
                            <IconButton size='string'>
                                <VisibilityIcon />
                            </IconButton>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs>
                    <Card sx={{minWidth: 45,backgroundColor: 'error.main'}} >
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Asset
                            </Typography>
                            <Typography variant="h5" component="div">
                                Wallet 2
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                block
                            </Typography>
                            <Typography variant="body2">
                                currently open
                            <br />
                            </Typography>
                        </CardContent>
                        <CardActionArea>
                            <IconButton size='string'>
                                <VisibilityIcon />
                            </IconButton>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item  xs>
                    <Card sx={{minWidth: 45,backgroundColor: 'success.main'}} >
                        <CardContent>
                            < Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Asset
                            </Typography>
                            <Typography variant="h5" component="div">
                                Wallet 3
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                in-active
                            </Typography>
                            <Typography variant="body2">
                                used a two days ago
                            <br />
                            </Typography>
                        </CardContent>
                        <CardActionArea>
                            <IconButton size='string'>
                                <VisibilityIcon />
                            </IconButton>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
            
            <Card sx={{width: '85ch',margin:'auto',mt:4}}>
                <CardMedia>
                </CardMedia>
                <CardContent>
                    <Typography>
                        Latest Activity
                    </Typography>
                    <Table align='center'>
                        <TableBody>
                            <TableRow>
                                <TableCell>1458339503</TableCell>
                                <TableCell>28-Apr-2022</TableCell>
                                <TableCell>0.2 ETH</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>    
        </div>
    );
}