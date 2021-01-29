import React, { Component } from 'react';
import './style.css'
import 'animate.css'
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
        const ToggleBtn = ()=>{
            const toggleBtn = document.querySelector('.toggle__bar')
            const links = document.querySelector('.nav__links')

            toggleBtn.addEventListener('click',()=>{
                if(links.style.display==='none'){
                    links.style.display='block';
                }
                else{
                    links.style.display='none'
                }
            })
            
        }
        ToggleBtn()
    }
    render() { 
        return ( 
            <div className=' navbarMain'>
               <section className='navMain'>
                   <nav>
                       <div className='logoImg animate__animated animate__slower animate__flash'>
                         <h1><i class="fas fa-cart-plus  "></i> SHOP-NEXT</h1>
                       </div>
                       <div className='nav__links animate__animated animate__slower animate__bounceInDown'>
                           <ul className='links'>
                               <li><a href=''><i class="fa fa-home"> </i>HOME</a></li>
                               <li><a href=''><i class="fas fa-hand-point-up"></i> FREE TRIAL</a></li>
                               <li><a href=''><i class="fas fa-address-card"></i> BECOME OUR AGENT</a></li>
                                <a href='' className='btn btn-warning login__btn btn__classic animate__animated animate__slower animate__slideInLeft'>Login <i class="fas fa-sign-in-alt"></i></a> 
                                <a href='' className='btn btn-success btn__classic animate__animated animate__slower animate__slideInRight'><i class="fas fa-door-open"></i> Join-us</a> 
                           </ul>
                       </div>
                     </nav>
                     <div className='aboyt__toggle '>
                        <div className='toggle__bar animate__animated animate__slower animate__zoomInDown'>
                            <div className='toggle'></div>
                            <div className='toggle'></div>
                            <div className='toggle'></div>
                        </div>
                     </div>
                     
               </section>
               <section className='info__main'>
                   <div className='info__1  animate__animated animate__faster animate__flip'>
                       <h1>Playstation-Virtual reality</h1>
                       <h2>30-day free trial </h2>
                       <a href='' className='btn btn-warning free__btn  animate__animated animate__slower animate__tada'>Read More <i class="fas fa-arrow-circle-right"></i></a>
                   </div>
               </section>
            </div>
         );
    }
}
 
export default Navbar;