import React from 'react'
import style from './footer.module.scss'
import img from '../../assets/logo-BfNap0Pe.png'
import { Link } from 'react-router'

export default function Footer() {
  return <>
    <div className={style.all}>
      <div className={style.top}>
      <Link to=''>
        <div className={style.right}>
          <img src={img} width={100} alt="" />
          <p>Recipe</p>
        </div>
        </Link>
        <p className={style.left}>React</p>
      </div>
      <div className={style.bottom}>
        <p>© 2024 <a href="https://www.facebook.com/shehab.r.ali.18/" target='_blank'>Shehab Rady</a> All rights reserved.</p>
      </div>
    </div>
  </>
}
