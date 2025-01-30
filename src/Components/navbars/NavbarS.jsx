import React, { useEffect, useState } from 'react'
import axios from 'axios'
import style from './navbars.module.scss'
export default function NavbarS() {
    let [categories, setCategories] = useState(null)
    function getCategories() {
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php').then((res) => {
            setCategories(res.data.categories)
        })
    }
    useEffect(() => {
        getCategories();
    }, [])
    return <>
        <div className={style.all}>
            <h1 className={style.title}>Learn, Cook, Eat Your Food</h1>
            <div className={style.items}>
                {categories && categories.map((category) => {
                    return <span key={category.idCategory} className={style.item}>{category.strCategory}</span>
                })}
            </div>
        </div>
    </>
}