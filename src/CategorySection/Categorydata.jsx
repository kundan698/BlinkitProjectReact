import { FaRegDotCircle } from "react-icons/fa";
export default function Categorydata (){

    return(
       
       <div>
           <section className="container-fluid">
            <h3>Dairy, Bread & Eggs</h3>
            
             <div className="row gy-4">
                
                    <Categorycomponent/>
                    <Categorycomponent/>
                    <Categorycomponent/>
                    <Categorycomponent/>
                    <Categorycomponent/>
                    <Categorycomponent/>
                
                
              </div>
             <h3>Rolling paper & tobacco</h3>

             <div className="row gy-4">
                
                    <Categorycomponent/>
                    <Categorycomponent/>
                    <Categorycomponent/>
                    <Categorycomponent/>
                    <Categorycomponent/>
                    <Categorycomponent/>
                
                
              </div>
              <h3>Snacks & Munchies</h3>

              <div className="row gy-4">
                
                    <Categorycomponent/>
                    <Categorycomponent/>
                    <Categorycomponent/>
                    <Categorycomponent/>
                    <Categorycomponent/>
                    <Categorycomponent/>
                
                
              </div>
              <h3>Hookah</h3>

             <div className="row gy-4">
  
               <Categorycomponent/>
               <Categorycomponent/>
               <Categorycomponent/>
               <Categorycomponent/>
               <Categorycomponent/>
               <Categorycomponent/>
  
            </div>
            <h3>Mouth fresheners</h3>

             <div className="row gy-4">
  
               <Categorycomponent/>
               <Categorycomponent/>
               <Categorycomponent/>
               <Categorycomponent/>
               <Categorycomponent/>
               <Categorycomponent/>
  
            </div>
            <h3>Cold Drinks & Juices</h3>

             <div className="row gy-4">
  
               <Categorycomponent/>
               <Categorycomponent/>
               <Categorycomponent/>
               <Categorycomponent/>
               <Categorycomponent/>
               <Categorycomponent/>
  
            </div>
            <h3>Candies & Gums</h3>

             <div className="row gy-4">
  
               <Categorycomponent/>
               <Categorycomponent/>
               <Categorycomponent/>
               <Categorycomponent/>
               <Categorycomponent/>
               <Categorycomponent/>
  
            </div>
              

             
            
           

           </section>
       </div>
    )
}
function Categorycomponent(){
    return(
       
            <div className="col-lg-2">
                <div className=" p-2 classimg img-fluid animate__animated animate__bounceInLeft">
                <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/be2b8d5d-1d96-4392-a3e7-a8df23933584.jpg?ts=1710313956" alt="" className="w-75 text-center"/><br />
                <p className="mins"><FaRegDotCircle />8MINS</p>
                <div>
                <p>English Oven Brown <br /> bread</p>
                <p>400 g <span id="spn">30% Off</span></p>
               <div className="d-flex justify-content-between align-content-center">
                <p>Rs.50 <span className="spns">500</span></p>
                
                <button className="btns">Add</button>

                </div>
               
               </div>

                </div>
                
           </div>
       
    )
}

