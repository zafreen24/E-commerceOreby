import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {useEffect, useState} from "react"


const ProductDetails = () => {
    
    let [singleData, setSingleData] = useState([])
    let productId = useParams()
    
   
    let getData = () =>{
        axios.get(`https://dummyjson.com/products/${productId.id}`).then((response)=>{
            setSingleData(response.data);
        })
    }

  useEffect(()=>{
     getData()
},[])

console.log(singleData);

  return (
   <div className="">ami</div>
  )
}

export default ProductDetails