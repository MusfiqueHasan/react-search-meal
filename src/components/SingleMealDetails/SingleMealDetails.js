
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import SingleDetails from './SingleDetails';

const SingleMealDetails = () => {
    const { mealId } = useParams();
    const [mealDetails, setMealDetails] = useState([])

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMealDetails(data.meals))
    }, [])
    return (
        <div >
            {
                mealDetails.map(mealDetail => <SingleDetails mealDetail={mealDetail} />)
            }
        </div>
    );
};

export default SingleMealDetails;