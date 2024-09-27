import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import Styles from '../Components/BookCard.module.css'
function BookCards({ data,handlist }) {
  const  { title, author, image, pages, language } =data
  const [like,setlike]=useState(false)
  const clickHandler=()=>{
    setlike(like=>(!like))
    handlist(data,like)
  }
  return (
    <div className={Styles.card}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{author}</p>
      <div className={Styles.info}>
        <span>{language} </span>
        <span>{pages}pages</span>
      </div>
      <button onClick={clickHandler}>
      <div><FaHeart color={like?"red":"e0e0e0"} fontSize='1.8rem'  /></div>
      </button>
    </div>
  );
}

export default BookCards;
