import React,{useState} from 'react'
import style from "./Product.module.css";
const Product = ({id,Img,name,description}) => {
    let [count,setCount]=useState(0)
  return (
    <div className={style.card} >
                <div className={style.left}>
                <img src={Img} alt="Image not found" height={600} className={style.img} />
                <h1 className={style.head}>{name}</h1>
                <p style={{ padding: "10px" }} className={style.para}>{description}</p>
                <section className={style.btn}>
                    <button  onClick={()=>{setCount(count-1)}}>Buy</button>
                    <button  onClick={()=>{setCount(count+1)}}>Add</button>
                </section>
                </div>
                
                <div className={style.right}>
                    <h3>Product{id}: </h3>
                    <button onClick={()=>{setCount(count+1)}}>+</button>
                    <button>{count}</button>
                    <button onClick={()=>{setCount(count-1)}}>-</button>
                </div>
    </div>

  )
}

export default Product