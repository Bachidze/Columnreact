import React from 'react'
import style from './Card.module.css'

const Card = ({
    hover,
    name = 'error',
    imgUrl,
    desc ='error',
    backgroundColor,
    buttonColor,
    button = 'error'}) => {


  return (
    <div style ={{background:backgroundColor}}  className={`${style.card}`}>
        <img className={style.img} src={imgUrl} alt="pirveli Manqanis Photo" />
        <h1 className={style.h1}>{name}</h1>
        <p className={style.p}>{desc}</p>
        <button style={{color:buttonColor}}  className={`${style.button}   ${style[hover]}`}>{button}</button>
    </div>
  )
}

export default Card