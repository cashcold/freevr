import React, { Component } from 'react';
import axios from 'axios'
import './style.css'
class Selected extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        }
    }

//    componentDidMount(){
//     fetch('https://api.alternative.me/v2/listings/').then(res => res.json()).then(res => res.data).then(data => this.setState({
//         data: data
//     }))
//    }

    render() { 
        return ( 
            <div className='SelectedMain'>
               <section className='product__info'>
                   <div className='product__A'>
                       <div className='product__1'>
                            <h1>Product Information</h1>
                            <h3>OVERVIEW</h3>
                            <p>With up to 40 hours of battery life, Playstation-Virtual reality is your perfect everyday Virtual reality to play. With Fast Fuel, a 5-minute charge gives you 3 hours of playback. Enjoy award-winning Playstation-Virtual reality freedom. The on-ear, cushioned ear cups are adjustable so you can customize your fit for all-day comfort.Playstation-Virtual reality is ready to go when you are.</p>
                            <a href='' className='btn btn-warning info__btn'>Read More</a>
                       </div>
                       <div className='vr__image'>
                           <img src={require('../../VR__Pic/pexels-cottonbro-4009626 (1).jpg')} alt='pic'/>
                       </div>
                   </div>
               </section>
               <section className='product__info'>
                   <div className='product__A'>
                      <div className='product__1'>
                            <h1>FREE SHIPPING</h1>
                            <h4>GET NOW</h4>
                            <h3 className='btn btn-warning info__btn'>Apply Now</h3>
                       </div>
                       <div className='vr__image'>
                           <img src={require('../../VR__Pic/Pictures-of-Playstation-VR-.jpeg')} alt='pic'/>
                           
                       </div>
                   </div>
               </section>
               <section className='product__info'>
                   <div className='product__A'>
                      <div className='product__1'>
                            <h1>FREE SHIPPING</h1>
                            <h4>GET NOW</h4>
                            <h3 className='btn btn-warning info__btn'>Apply Now</h3>
                       </div>
                       <div className='vr__image'>
                           <img src={require('../../VR__Pic/young-woman-wearing-vr-glasses.jpg')} alt='pic'/>
                        </div>
                   </div>
               </section>
               <section className='product__info'>
                   <div className='product__A'>
                      <div className='product__1'>
                            <h1>FREE SHIPPING</h1>
                            <h4>GET NOW</h4>
                            <h3 className='btn btn-warning info__btn'>Apply Now</h3>
                       </div>
                       <div className='vr__image'>
                           <img src={require('../../VR__Pic/Playstation-VR-Desktop.jpg')} alt='pic'/>
                        </div>
                   </div>
               </section>
               <section className='product__info'>
                   <div className='product__A'>
                      <div className='product__1'>
                            <h1>FREE SHIPPING</h1>
                            <h4>GET NOW</h4>
                            <h3 className='btn btn-warning info__btn'>Apply Now</h3>
                       </div>
                       <div className='vr__image'>
                           <img src={require('../../VR__Pic/young-woman-using-vr-glasses-with-neon-lights.jpg')} alt='pic'/>
                        </div>
                   </div>
               </section>
               <section className='product__info'>
                   <div className='product__A'>
                      <div className='product__1'>
                            <h1>FREE SHIPPING</h1>
                            <h4>GET NOW</h4>
                            <h3 className='btn btn-warning info__btn'>Apply Now</h3>
                       </div>
                       <div className='vr__image'>
                           <img src={require('../../VR__Pic/Playstation-VR-Computer-Wallpaper.jpg')} alt='pic'/>
                        </div>
                   </div>
               </section>
               <section className='product__info'>
                   <div className='product__A'>
                      <div className='product__1'>
                            <h1>FREE SHIPPING</h1>
                            <h4>GET NOW</h4>
                            <h3 className='btn btn-warning info__btn'>Apply Now</h3>
                       </div>
                       <div className='vr__image'>
                           <img src={require('../../VR__Pic/Playstation-VR-4K (1).jpg')} alt='pic'/>
                        </div>
                   </div>
               </section>
               <section className='product__info'>
                   <div className='product__A'>
                      <div className='product__1'>
                            <h1>FREE SHIPPING</h1>
                            <h4>GET NOW</h4>
                            <h3 className='btn btn-warning info__btn'>Apply Now</h3>
                       </div>
                       <div className='vr__image'>
                           <img src={require('../../VR__Pic/Playstation-VR-Widescreen-.jpg')} alt='pic'/>
                        </div>
                   </div>
               </section>
               <section className='product__info'>
                   <div className='product__A'>
                      <div className='product__1'>
                            <h1>FREE SHIPPING</h1>
                            <h4>GET NOW</h4>
                            <h3 className='btn btn-warning info__btn'>Apply Now</h3>
                       </div>
                       <div className='vr__image'>
                           <img src={require('../../VR__Pic/young-man-s-pointing-using-vr-glasses-neon-light-gradient.jpg')} alt='pic'/>
                        </div>
                   </div>
               </section>
            </div>
         );
    }
}
 
export default Selected;