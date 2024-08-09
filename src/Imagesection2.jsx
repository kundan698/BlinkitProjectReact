import { useState } from "react"
import 'animate.css';

export default function Imagesection2(){
  let images =[
    'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-12/paan-corner_web.png',
    'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-2_10.png',
    'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-3_9.png',
    'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-4_9.png',
    'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-5_4.png',
    'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-6_5.png',
    'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-7_3.png',
    'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-8_4.png',
    'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-9_3.png',
    'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-10.png'
  ]
  let[VarImg,SetImg]=useState(images[0])

    return(
       
           <div>
               <section className="container-fluid">
               
                    <div className="row gy-4">
                  {/* <ImageContent/>
                  <ImageContent/>
                  <ImageContent/>
                  <ImageContent/>
                  <ImageContent/>
                  <ImageContent/>
                  <ImageContent/>
                  <ImageContent/>
                  <ImageContent/>
                  <ImageContent/>
              
                  <ImageContent/> */}
                  {images.map((imgSrc,index)=>{
                    return(
                        <div className="col">
                          <img src={imgSrc} alt="" className="img-fluid img-fluid animate__animated animate__bounceInLeft"/>
                        </div>
                    )
                  })}
                    </div>
                    <div className="row">
                  {/*   <ImageContent/>
                  <ImageContent/>
                  <ImageContent/>
                  <ImageContent/>
                  <ImageContent/>
                  <ImageContent/>
                  <ImageContent/>
                  <ImageContent/>
                  <ImageContent/>
                  <ImageContent/>
                  
                  <ImageContent/> */}
                   {images.map((imgSrc,index)=>{
                    return(
                        <div className="col">
                          <img src={imgSrc} alt="" className="img-fluid img-fluid animate__animated animate__bounceInLeft"/>
                        </div>
                    )
                  })}
                    </div>

               </section>
           </div>
    )
}
function ImageContent (){
    return(
        <div className="col">
        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-4_9.png" alt=""className="img-fluid" />
      
    </div>
    )
}