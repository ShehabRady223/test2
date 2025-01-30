import React, { useEffect, useState } from 'react'
import style from './Home.module.scss'
import img from '../../assets/g046bb1663960946.jpg'
import axios from 'axios'

export default function Home() {
  const [items, setitems] = useState(null)
  function getItems() {
    axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef')
      .then((res) => {
        setitems(res.data.meals) })
        }
  useEffect(() => {
    getItems()
  }, [])
  return <>
    <div className={style.all}>
      {items && items.map(item => {
        return <div key={item.idMeal} className={style.item}>
          <img className={style.img} src={item.strMealThumb} width={120} height={120} alt="" />
          <h3 className={style.heading}>{item.strMeal.split(' ').slice(0, 2).join(' ')}</h3>
          <p className={style.country}><i className="fa-solid fa-earth-americas"></i> Egyption</p>
          <button>Veiw Recipe</button>
        </div>
      })}
    </div>
  </>
}
