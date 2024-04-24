import axios from "axios"
import { useEffect, useState } from "react";
import "./Fake.css"
import { Link } from "react-router-dom";

export const Fake = () =>{
   const [ data, setData] = useState([]);

   const getData = async () =>(
    axios.get("https://fakestoreapi.com/products")
    .then((res)=>  setData(res.data))
    .catch((err)=>{
        console.log(err)
    })
   )

   useEffect(()=>{
    getData()
   },[])

    return(
        <div style={{backgroundColor:"gray",paddingLeft:"3%",paddingRight:"3%",paddingBottom:"5%",height:"2400px"}}>
          <div className="container">
             {
                data.map((e)=>(
                    <div className="Item" key={e.id}>
                       <div><img className="itemImg" src={e.image} alt="ItemImage"/></div>  
                       <div><p className="catTitle">{e.category}</p></div>
                       <div><p className="title">{e.title}</p></div>
                       <div className="priceCartBox">
                         <div className="priceText">$ {e.price}</div>
                         <Link className="CartText">ADD TO CART</Link>
                       </div>
                    </div>
                ))
             }
          </div>
        </div>
    )
}