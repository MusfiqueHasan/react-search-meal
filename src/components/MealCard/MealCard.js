import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router';
import './MealCard.css'
const MealCard = (props) => {

    const { idMeal, strMeal, strCategory, strInstructions, strMealThumb } = props.meal;
    const history = useHistory()
    const handleClick = () => {
            history.push(`/homes/${idMeal}`)
    }
    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
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
                    height="194"
                    image={strMealThumb}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {strInstructions.slice(0, 200)}
                    </Typography>

                    <button className="meal-btn" onClick={handleClick}>Meal Details</button>
                </CardContent>


            </Card>
        </div>
    );
};

export default MealCard;