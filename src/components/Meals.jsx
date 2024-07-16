import React from 'react'
import MealItem from './MealItem'
import useFetch from '../hooks/useFetch'
const config = { method: "GET" }
export default function Meals() {
    const { data: fetchedMeals, isLoading, error } = useFetch('http://localhost:3000/meals', config, [])
    if (error) {
        return <Error title="Failed to fetch" message={error} />
    }
    return (
        <div id="meals">
            {isLoading && <p>Fetching Meals Data</p>}
            {!isLoading && fetchedMeals.map((meal) =>
                <MealItem key={meal.id} meal={meal} />
            )}
        </div>
    )
}
