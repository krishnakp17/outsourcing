import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Box, Typography, Grid } from '@mui/material';
import AdminHomeNavBar from './AdminHomeNavBar';
const Admin_home = () => {
    return (
        <div>
            <AdminHomeNavBar />
            <br></br>
            <Typography variant='h3' align='center' gutterBottom style={{ color: '#000080' }}>
                ADMIN PAGE
            </Typography>
            <Box sx={{ margin: 10 }}>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card width='700px'>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="300px"
                                    maxHeight='400px'
                                    image="https://cimatri.com/wp-content/uploads/2022/05/build-vendor-management-program.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div" align='center'>
                                        Vendor Management
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card width='700px'>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="300px"
                                    maxHeight='400px'
                                    image="https://st2.depositphotos.com/1757635/8830/i/450/depositphotos_88302772-stock-photo-global-business-strategy.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        Employee Management
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card width='700px'>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="300px"
                                    maxHeight='400px'
                                    image="https://www.manageengine.com/products/service-desk/it-incident-management/images/incident-management-software.webp"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        Incident Management
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card width='700px'>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="300px"
                                    maxHeight='400px'
                                    image="https://essentiel-outsourcing.com/wp-content/uploads/2021/04/Comunicado-prensa-encuesta-primer-semestre-2-1.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                       Outsource Management
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    
                    </Grid>
                    </Box>
                </div>
                )
}

export default Admin_home