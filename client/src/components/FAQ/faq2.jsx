import React from 'react';
import {motion} from "framer-motion";
import image from "./Purchasing-power-parity-Formula.jpg";
import "./faq.css";

const Faq2 = () => {
    return (
        <div>
            <motion.div initial={{x:-500,opacity:0}} whileInView={{x:0,opacity:1,transition:{duration:2}}} viewport={{once:true}} className='container bigbox backcolorwhite'>
                <div className='row'>
                    <div className='col-md-9'>
                    <h4>How to Calculate Purchasing Power Between two Countries</h4>
                    <p>To compare We need to Have the PPP factors of two countries which we are going to compare</p>
                    <p> Suppose price of bottle in India is INR 20 and want find the price in USA</p> 
                    <p>WE will take the PPP factors which is USA:1 and India:23.13 as of 2022.</p>
                    <p>
                     Simply,Divide the PPP factors: 1/23.13=<b>0.043</b>  
                      and then Multiply it with the amount  0.0.43*20=<b>0.86 USD </b>(Which is around INR 70 in USA)</p>
                    </div>
                    <div className="col-md-3">
                        <img className='images3' src={image} alt="Formula"></img>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default Faq2;
