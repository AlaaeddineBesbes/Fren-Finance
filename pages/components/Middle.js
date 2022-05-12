import React from 'react'
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image'





const Middle = () => {
    return (
    <div className=" bg-white  ml-2   shadow-sm w-full h-screen   ">
        <Grid container spacing={3}>
        <Card sx={{ maxWidth: 250 }}>
        <CardMedia
            component="img"
            height="140"
            image='/listic.png'
            alt="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="medium">OPEN</Button>
            <Button size="big">BUY</Button>
        </CardActions>
        </Card>

        

    </Grid>
    
  
        
        </div>
    )
}

export default Middle
