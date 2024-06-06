import React from 'react'
import Container from "../components/Container"
import Flex from "../components/Flex"
import Sunglass3 from "../assets/sunglass3.png"
import { RxCross2 } from "react-icons/rx";
import {useSelector, useDispatch} from "react-redux"
import { productIncrement } from '../components/slice/productSlice';


const Cart = () => {
    
    let dispatch = useDispatch()
    let data = useSelector((state)=>state.product.cartItem)
    
    
    let handleIncrement = (index) =>{
        dispatch(productIncrement(index))
    }
    
  return (
   <div className="my-20">
     <Container>
        <h2 className='font-sans text-[45px] font-bold text-[#262626]'>Cart</h2>
        <p className='font-sans text-[18px] text-[#767676]'>Home  &#62;  Cart</p>
      <Flex className="justify-between bg-[#F5F5F3] h-[60px] items-center">
        <div className="w-[40%]">
            <h3 className='text-center font-sans text-[20px] font-bold text-[#262626]'>Product</h3>
        </div>
        <div className="w-[15%]">
            <h3 className='text-center font-sans text-[20px] font-bold text-[#262626]'>Price</h3>
        </div>
        <div className="w-[30%]">
            <h3 className='text-center font-sans text-[20px] font-bold text-[#262626]'>Quantity</h3>
        </div>
        <div className="w-[15%]">
            <h3 className='text-center font-sans text-[20px] font-bold text-[#262626]'>Total</h3>
        </div>
      </Flex>
      {data.map((item, index)=>(
         <Flex className="items-center my-14">
         <div className="w-[40%]">
            <div className="flex items-center justify-around">
             <div className="">
                 <RxCross2/>
             </div>
             <div className="">
                 <img className='w-[100px] h-[100px]' src={item.thumbnail} alt="" />
             </div>
             <div className="">
                 <h4 className='font-sans text-[16px] font-normal text-[#262626]'>{item.title}</h4>
             </div>
            </div>
         </div>
         <div className="w-[15%]">
             <h4 className='text-center'>${item.price}</h4>
         </div>
         <div className="w-[30%] ">
         <div className="flex w-[150px] h-[50px]  justify-around items-center mx-auto">
                         <div className="font-sans text-[20px] text-[#767676]">-</div>
                         <div className="font-sans text-[20px] text-[#767676]">{item.qun}</div>
                         <div onClick={ ()=>handleIncrement(index)} className="font-sans text-[20px] text-[#767676]">+</div>
                     </div>
         </div>
         <div className="w-[15%]">
             <h4 className='text-center'>$44.00</h4>
         </div>
       </Flex>
      ))}
     
    </Container>
   </div>
  )
}

export default Cart