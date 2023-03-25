import React from 'react';
import Youtube from "react-youtube";
import "../css/boxs.css";
import "../form/result.css"
import {motion} from "framer-motion";

const Cards = () => {
    const opts = {
        height: '175',
        width: '350',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        }};
        
        function onReady(e){
            // access to player in all event handlers via event.target
            e.target.playVideo();
          }
    const video={
        visible:{x:0,opacity:1,transition:{duration:2,staggerChildren:1.2}},
        hidden:{x:-500,opacity:0}
    }
    const child={
        visible:{x:0,opacity:1,transition:{duration:2}},
        hidden:{x:-450,opacity:0}
    }

    return (
        <div className='container overflow'>
            <motion.div initial={{y:-40,opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:4}}} viewport={{once:true}} style={{textAlign:'center'}}>
                <h4>Videos For Reference</h4>
                <div className='h-divider'><div className='shadow'></div></div>
            </motion.div>
                <motion.div variants={video} whileInView="visible" viewport={{once:true}} initial="hidden" className='row'>
                    <motion.div variants={child} className='col-md-4'><Youtube videoId="VtVeid_T6vQ" opts={opts} onReady={(e)=>{onReady(e)}} /></motion.div>
                    <motion.div variants={child} className='col-md-4'><Youtube videoId="zO61ETg8oMg" opts={opts} onReady={(e)=>{onReady(e)}} /></motion.div>
                    <motion.div variants={child} className='col-md-4'><Youtube videoId="giqrlRpKv2U" opts={opts} onReady={(e)=>{onReady(e)}} /></motion.div>            
                </motion.div><br></br>
            <motion.div initial={{y:25,opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:4}}} viewport={{once:true}} style={{textAlign:'center'}}>
                <div className='h-divider'><div className='shadow'></div></div>
            </motion.div>
        </div>
    );
}

export default Cards;
