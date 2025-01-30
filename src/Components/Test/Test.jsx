import React, { useEffect, useState } from 'react'
import axios from 'axios'
import style from './Test.module.scss'
import { Link, NavLink } from 'react-router'

export default function Test() {
    let [items, setitems] = useState(null)
    let [categories, setCategories] = useState(null)

    function test(test = 'Beef') {
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${test}`)
            .then((res) => {
                setitems(res.data.meals)
            })
    }
    function getCategories() {
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php').then((res) => {
            setCategories(res.data.categories)
        })
    }

    useEffect(() => {
        test()
        getCategories()
    }, [])

    return <>
        <div className={style.all}>
            <h1 className={style.title}>Learn, Cook, Eat Your Food</h1>
            <div className={style.items}>
                {categories && categories.map((category) => {
                    // return <NavLink> <span onClick={() => { test(category.strCategory) }} key={category.idCategory} className={style.item}>{category.strCategory}</span> </NavLink>
                    return <span onClick={() => { test(category.strCategory) }} key={category.idCategory} className={style.item}>{category.strCategory}</span>
                })}
                </div>
        </div>
        <div className={style.alll}>
            {items && items.map(item => {
                return <div key={item.idMeal} className={style.itemm}>
                    <img className={style.img} src={item.strMealThumb} width={120} height={120} alt="" />
                    <h3 className={style.heading}>{item.strMeal.split(' ').slice(0, 2).join(' ')}</h3>
                    <p className={style.country}><i className="fa-solid fa-earth-americas"></i> Egyption</p>
                    <Link to={`details/${item.idMeal}`}><button>Veiw Recipe</button></Link>
                </div>
            })}
        </div>
    </>
}