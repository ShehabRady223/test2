import React from 'react'
import style from './navbarf.module.scss'
import img from '../../assets/logo-BfNap0Pe.png'

export default function Navbar() {
  return <>
    <div className={`${style.im} w-1/5`}>
      <div children={style.im}>
        <img src={img} alt="" />
        <ul className={style.a}>
            <li className={`${style.cat} ${style.end}`}><i className="fa-solid fa-utensils" />Meals</li>
            <li className={style.cat}><i className="fa-solid fa-utensils" />Ingredients</li>
            <li className={style.cat}><i className="fa-solid fa-utensils" />Area</li>
        </ul>
      </div>
    </div>
  </>
}
