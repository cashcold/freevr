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
                <section className='game__ads'>
                     <div className='game__A'>
                        <div className='game__A__text game__A__text_img'>
                            <h1>Immerse yourself in incredible virtual reality games and experiences.</h1>
                            <img  src={require('../../VR__Pic/pexels-cottonbro-4009626 (1).jpg')} alt='pic'/> 
                        </div>
                    </div>
                </section>
            </div>
         );
    }
}
 
export default Selected;