import React from 'react';
import data from "./loading.mp4";
import data1 from "./result.jpg";
import { motion } from 'framer-motion';
import "bootstrap/dist/css/bootstrap.min.css";

import "./result.css"

const Result = ({initialstate,formresult,isloading}) => {
    const formatter= new Intl.NumberFormat('en-IN');
    if (initialstate){
        return(<div className='initial'><h5>Result will be Shown Here</h5><img className='image' src={data1} alt="Loading..."></img></div>)
    }
    else{
        if(isloading){
            return(
                <div className='loading'>
                    <video width="70%" height="70%" muted autoPlay loop>
                        <source src={data} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>)
        }
        else
        {
            if(formresult.Currency && formresult.PPP){
                return (
                    <div className='resultsection'>
                        <h4>Purchasing Power Parity</h4><br></br>
                        <motion.p
                            initial={{opacity:0}}
                            animate={{opacity:1,transition:{duration:2}}}
                        >
                        <p>According to PPP, Amount of <b>{formresult.src} {formatter.format(formresult.a)}</b> in {formresult.sname} is equivalent to <b>{formresult.src} {formatter.format(formresult.Currency)}</b> or <b>{formresult.trg} {formatter.format(formresult.PPP)}</b> in {formresult.tname}</p> 
                        <p>That's <b>{formresult.times}x</b> times the amount you make in {formresult.sname}</p>
                        {/* {console.log(formatter.format(formresult.PPP))} */}
                        <div className='h-divider'><div className='shadow'></div></div>
                        <p>i.e You have to earn <b>{formresult.trg} {formatter.format(formresult.PPP)}</b> in {formresult.tname} (<b>{formresult.src} {formatter.format(formresult.Currency)}</b>) to live a similar quality of life as you would with a salary of {formresult.src} {formatter.format(formresult.a)} in {formresult.sname}. </p>
                        </motion.p>
                    </div>
                    );
                }else if(formresult.Currency){
                    return(
                    <div className='resultsection'>
                        <h4>Currency conversion</h4><br></br>
                        <motion.p
                            initial={{opacity:0}}
                            animate={{opacity:1,transition:{duration:2}}}
                        >
                        <p><b>{formresult.s_code} {formatter.format(formresult.a)} = {formresult.t_code} {formatter.format(formresult.Currency)}</b></p>
                        </motion.p>
                    </div>
                    )
                }
                else{
                    return(
                    <div className='resultsection'>
                        <motion.p
                            initial={{opacity:0}}
                            animate={{opacity:1,transition:{duration:2}}}
                        >
                        <h>{formresult.message}</h>
                        {console.log(formresult.message)}
                        </motion.p>
                    </div>
                    )
                }
            }
        }
}

export default Result;
