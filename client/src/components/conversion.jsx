import React from 'react';
import {motion} from "framer-motion";
import "./css/boxs.css";
import Tabsconversion from './tabsconversion';


const Conversion = () => {
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
            <motion.div className="bigbox container overflow backcolorwhite"
            variants={mainbox}
            whileInView="visible"
            viewport={{once:true}}
            initial="hidden"
            >
                <motion.div className='row boxs' variants={indibox} >
                    
                    <Tabsconversion />
                    
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Conversion;
