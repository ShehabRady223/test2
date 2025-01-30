import React, { useEffect, useState } from 'react'
import style from './details.module.scss'
import axios from 'axios'
import { useParams } from 'react-router'
export default function Details() {
  let { id } = useParams()
  let [meal, setmeal] = useState(null)

  function getMeal(id) {
    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => {
        setmeal(res.data.meals)
        //!why here print null
        // console.log(meal)
      })
  }

  useEffect(() => {
    getMeal(id)
  }, [])
  function extractIngredientsAndMeasures(mealData) {
    const ingredientsList = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = mealData[`strIngredient${i}`];
      const measure = mealData[`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== '' && measure && measure.trim() !== '') {
        ingredientsList.push({ ingredient, measure });
      }
    }
    return ingredientsList;
  }
  let ingredients = meal ? extractIngredientsAndMeasures(meal[0]) : []
  console.log(ingredients);


  return <>
    {meal && meal.map(meal => {
      return <div key={meal.idMeal} className={style.all}>
        <p className={style.heading} >{meal.strMeal}</p>
        <div className={style.notall}>
          <div className={style.col}>
            <img src={meal.strMealThumb} width={300} height={300} alt="" />
            <a className={style.you} href={meal.strYoutube} target="_blank" ><i className="fa-brands fa-youtube"></i> Youtube</a>
            <a href='#' className={style.web}><i className="fa-solid fa-earth-americas"></i> source</a>
          </div>
          <div className={style.col}>
            <p>{meal.strInstructions}</p>
          </div>
          <div className={style.col}>
            <div className={style.ingredients}>
              <p className={style.p}>Ingredients</p>

              {ingredients.map((ingredient, index) => {
                return <div key={index} className={style.d}>
                  <p className={style.de}>{ingredient.ingredient}:</p>
                  <p className={style.de}>{ingredient.measure}</p>
                </div>
              })}



            </div>
          </div>
        </div>
      </div>
    })}
  </>
}
