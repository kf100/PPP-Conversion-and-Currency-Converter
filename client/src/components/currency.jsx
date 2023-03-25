import React from 'react';
import { motion } from 'framer-motion';
import "./css/ppp.css";

const Currency = () => {
    const para="Amet dolor anim commodo pariatur duis fugiat eiusmod officia consequat. Non non elit in qui reprehenderit et pariatur aliquip adipisicing. Duis cupidatat ex sit laborum do ex mollit dolor anim sit minim do aliqua. Lorem ullamco ipsum nulla ex. Ipsum qui nisi et tempor ullamco laborum sint. Non commodo elit consequat occaecat.";
    const mainbox={
        visible:{x:0,opacity:1,transition:{duration:2,staggerChildren:2}},
        hidden:{x:-100,opacity:0}
    }
    const indibox={
        visible:{x:0,opacity:1,transition:{duration:2}},
        hidden:{x:-500,opacity:0}
    }

    return (
        <div>
            <motion.div className="bigbox container"
            variants={mainbox}
            whileInView="visible"
            initial="hidden"
            >

                <motion.div className='row boxs' variants={indibox} >
                    <motion.div className='col-md-5 indibox text-background' >
                      
                    </motion.div>
                    <motion.div className='col-1'><p></p></motion.div>
                    <motion.div className='col-md-6 indibox text-background' >
                      
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Currency;
