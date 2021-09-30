import React from 'react';
import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import { useHistory } from 'react-router';
import './SingleMealDetails.css'

const SingleDetails = (props) => {

    const { strCategory, strMeal, strMealThumb, strInstructions } = props.mealDetail
    const history = useHistory();  
    const handleSingleDetails = () => {
        history.push('/home')
    }
    return (
        <div className="single-meal-details">
            <Card sx={{ maxWidth: 600, height: 600 }}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe">
                            {strCategory.slice(0, 2)}
                        </Avatar>
                    }
                    title={strMeal}
                    subheader="September 14, 2016"
                />
                <CardMedia
                    component="img"
                    height="300"
                    image={strMealThumb}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {strInstructions.slice(0, 500)}
                    </Typography>

                    <button className="single-meal-btn" onClick={handleSingleDetails}>See all meal</button>
                </CardContent>


            </Card>
            
        </div>
    );
};

export default SingleDetails;