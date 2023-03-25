import React from 'react';
import "../css/boxs.css";
import "./faq.css"
// import image from "./weighing.png"
import {motion} from "framer-motion";

const Faq = (props) => {
    if(props.side==="right"){
    return (
        <div >
            <motion.div className='container bigbox backcolorwhite'
            initial={{x:-500,opacity:0}}
            whileInView={{x:0,opacity:1,transition:{duration:2}}}
            viewport={{once:true}}>
                <div className='row'>
                    <div className='col-md-9'>
                        <h4>{props.Title}</h4>
                        <p>{props.Content} <b>{props.note}</b></p>
                    </div>
                    <div className='col-md-3' >
                        <img className='images' src={props.image} alt="PPP" />  
                    </div>
                </div>
            </motion.div>
        </div>
    );}
    else{
        return (
            <div >
                <motion.div className='container bigbox backcolorwhite'
                initial={{x:500,opacity:0}}
                whileInView={{x:0,opacity:1,transition:{duration:2}}}
                viewport={{once:true}}>
                    <div className='row'>
                        <div className='col-md-2' >
                            <img className='images2' src={props.image} alt="Foreign exchange" />  
                        </div>
                        
                        <div className='col-md-9'>
                            <h4>{props.Title}</h4>
                            <p>{props.Content} <b>{props.note}</b></p>
                        </div>
                    </div>
                </motion.div>
            </div>
        );  
    }
}

export default Faq;
