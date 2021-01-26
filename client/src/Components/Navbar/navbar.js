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
                       <div className='logoImg'>
                         <h1><i class="fas fa-american-sign-language-interpreting"></i> NEXT-STEP</h1>
                       </div>
                       <div className='nav__links animate__animated animate__slower animate__bounceInDown'>
                           <ul>
                               <li><a href=''>HOME</a></li>
                               <li><a href=''>SERVICE</a></li>
                               <li><a href=''>TENDING</a></li>
                                <a href='' className='btn btn-warning'>Login</a> 
                                <a href='' className='btn btn-danger'>Register</a> 
                           </ul>
                       </div>
                     </nav>
                     <div className='toggle__bar'>
                           <div className='toggle'></div>
                           <div className='toggle'></div>
                           <div className='toggle'></div>
                       </div>
               </section>
               <section className='info__main'>
                   <div className='info__1'>
                       <h1>Playstation-Virtual reality</h1>
                       <h2>30-day free trial</h2>
                       <p>With up to 40 hours of battery life, Playstation-VR is your perfect everyday VR. With Fast Charging, a 5-minute charge gives you 3 hours of playback</p>
                       <a href='' className='btn btn-warning free__btn'>GET FOR FREE</a>
                   </div>
               </section>
            </div>
         );
    }
}
 
export default Navbar;