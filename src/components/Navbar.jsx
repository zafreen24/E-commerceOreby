import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { HiBars3BottomLeft } from "react-icons/hi2";
import { FaSearch, FaUser, FaCartPlus } from "react-icons/fa";
import { RiArrowDownSFill } from "react-icons/ri";
import {useState} from "react"
import {useRef} from "react"
import {useEffect} from "react"
import CartImg from "../assets/cartimg.png"
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {

    let [cartShow, setCartShow] = useState(false)
    let [usercartShow, setUsercartShow] = useState(false)
    let [userShow, setuserShow] = useState(false)
    let cartref = useRef()
    let userref = useRef()
    let userAccref = useRef()


    useEffect(()=>{
       document.addEventListener("click",(e)=>{
        if(cartref.current.contains(e.target) == true){
            setCartShow(!cartShow)
        }else{
            setCartShow(false)
        }
        if(userref.current.contains(e.target) == true){
            setUsercartShow(!usercartShow)

        }else{
            setUsercartShow(false)
           
        }
        if(userAccref.current.contains(e.target) == true){
            setuserShow(!userShow)

        }else{
            setuserShow(false)
           
        }
       })
    },[cartShow,usercartShow,userShow])

  return (
   <nav className="bg-[#f5f5f3] py-4">
     <Container>
       <Flex className='items-center'>
        <div className="w-[30%] relative">
            <div ref={cartref} className="flex items-center gap-x-3">
                <HiBars3BottomLeft/>
                <p className='font-sans hidden lg:block text-[16px] text-[#767676] hover:text-[#262626]'>Shop by Category</p>
            </div>
            {cartShow &&
            <div className="absolute z-50 top-[52px] left-0 bg-[#262626] w-[300px]">
                <ul className='py-4'>
                    <li className='text-[#ffffffaf] font-sans text-[16px] py-2 pl-3 hover:pl-6 duration-300 ease-in-out'>Accesories</li>
                    <li className='text-[#ffffffaf] font-sans text-[16px] py-2 pl-3 hover:pl-6 duration-300 ease-in-out'>Furniture</li>
                    <li className='text-[#ffffffaf] font-sans text-[16px] py-2 pl-3 hover:pl-6 duration-300 ease-in-out'>Electronics</li>
                    <li className='text-[#ffffffaf] font-sans text-[16px] py-2 pl-3 hover:pl-6 duration-300 ease-in-out'>Clothes</li>
                    <li className='text-[#ffffffaf] font-sans text-[16px] py-2 pl-3 hover:pl-6 duration-300 ease-in-out'>Bags</li>
                    <li className='text-[#ffffffaf] font-sans text-[16px] py-2 pl-3 hover:pl-6 duration-300 ease-in-out'>Home appliences</li>
                </ul>
            </div>
            }
        </div>
        <div className="w-[40%]">
            <div className="relative">
                <input placeholder='search products..' type="search" className='w-full h-[50px] border-2 border-[#fff] outline-none px-2'/> 
                <div className="absolute top-[50%] right-4 translate-y-[-50%]">
                    <FaSearch/>
                </div>
            </div>
        </div>
        <div className="w-[30%] relative">
          <div className="flex items-center justify-end gap-x-2">
          <div className="flex" ref={userAccref}>
           <FaUser/>
            <RiArrowDownSFill/>
           </div>
           <div ref={userref} className="">
           <FaCartPlus/>
           </div>
           </div>
           {userShow &&
           <div className="absolute z-50 top-[30px] right-0 w-[300px] bg-[#262626] py-3 px-6">
              <ul className='font-sans text-[16px] font-normal text-[#ffffffb2]'>
                  <li className='py-[16px] duration-300 ease-in-out hover:text-[#fff] hover:pl-[10px]'>My Account</li>
                  <li className='py-[16px] duration-300 ease-in-out hover:text-[#fff] hover:pl-[10px]'>Log in</li>
                  <li className='py-[16px] duration-300 ease-in-out hover:text-[#fff] hover:pl-[10px]'>Sign Up</li>
              </ul>
           </div>
            }
           {usercartShow &&

          <div className="w-[300px] absolute z-50 bg-[#F5F5F3] top-[49px] right-0">
            <div className="py-3 ">
            <div className="flex justify-around items-center bg-[#F5F5F3] h-[120px]">
           <div className="">
                <img className='w-[80px]' src={CartImg} alt="" />
             </div>
             <div className="">
                <h3 className='font-bold font-sans text-[14px]'>Black Smart Watch</h3>
                <h5 className='font-bold font-sans text-[14px]'>$44.00</h5>
             </div>
             <div className="">
                <RxCross1/>
             </div>
           </div>
           <div className="bg-[#fff]">
            <h3 className='pl-4 py-3 font-regular font-sans text-[16px] text-[#767676]'>Subtotal:<span className='leading-[23px] font-bold font-sans text-[16px] text-[#262626] '>$44.00</span></h3>
            <div className="flex justify-around">
                <div className="">
                    <a className='w-[148px] h-[50px] border-2 border-[#262626] inline-block text-center leading-[50px]' href="#">View Cart</a>
                </div>
                <div className="">
                    <a className='w-[148px] h-[50px] border-2 border-[#262626] bg-black text-[#ffffffcd] inline-block text-center leading-[50px]' href="#">Checkout</a>
                </div>
            </div>
           </div>
            </div>
          </div>
           }
         
        </div>
       </Flex>
    </Container>
   </nav>
  )
}

export default Navbar