import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import MealCard from '../MealCard/MealCard';
import './Home.css'
const Home = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([])
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchText])

    const handleSearchValue = (event) => {
        const searchValue = event.target.value;
        setSearchText(searchValue)
    }
    return (
        <>
            <div className="search-box">
                <input type="text" placeholder="search food" onChange={handleSearchValue} />
                <button className="search-btn">search</button>
            </div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        meals.map(meal => <Grid item xs={2} sm={4} md={3} >
                            <MealCard key={meal.idMeal} meal={meal} />
                        </Grid>)
                    }
                </Grid>
            </Box>
        </>
    );
};

export default Home;
