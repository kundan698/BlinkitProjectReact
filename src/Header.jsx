import React, { useState } from 'react'
import weblogo from "./images/logo.png"
import { IoSearch } from "react-icons/io5";
import Modal1 from './ModalComponents/Modal1';
import 'animate.css';
import { FaCartShopping } from "react-icons/fa6";
import OverlayBox from './Model/OverlayBox';



export default function Header(){
  
  let [a,b]=useState(false)
   
  return (

   

    <>
       {a ?
        <OverlayBox a={a} b={b}/>
         : ''
         
         }

<Modal1/>
    
      <header className='container-fluid p-0' id='head'>


        <nav className='navbar navbar-expand-lg  ' >
          <a href="#"><img src={weblogo} alt="" width={100}  id='leftimg'/></a>
          {<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuItem" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>}
          <div className='collapse navbar-collapse align-content-center p-3 ' id='menuItem'>

            <ul className='navbar-nav'>

              <li className='nav-item dropdown' onClick={()=>b(!a)}>
                <a href="#" className='nav-link dropdown-toggle' id='del'>Delivery in 8 minutes <br /><span id='spn1'>120, Block B, Sector 67, Noida,</span> </a>
                {/*  <h1 class="animate__animated animate__bounce">An animated element</h1> */}


              </li>



              <li className='nav-item '>
                <a href="#" className='nav-link '>
                  <form action="" id='form'>
                    <button><IoSearch /></button>
                    <input type="text" placeholder='Search for atta dal and more...!' />



                  </form>
                </a>


              </li>

              <li className='nav-item '>


                <li className='nav-item'>
                 

                </li>


              </li>
             

            </ul>



          </div>
          <div className='d-flex gap-3'>
          <button class="btn " type="button" data-bs-toggle="" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop" id='login'>
                 Login
                </button>
          <button class="btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop" id='add'><FaCartShopping />
                  Add Cart
                </button>
          </div>


        </nav>

      </header>
    </>


  )
}
