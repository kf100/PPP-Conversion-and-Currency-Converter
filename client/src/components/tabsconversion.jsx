import React, { useState } from 'react';
import {motion} from "framer-motion";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/header.css";
import "./css/boxs.css"
import Form1 from  "./form/form1"
import Result from './form/result';
// import Currency from './currency';

function Tabsconversion() {
    const [key, setKey] = useState('home');
    const [formresult,updateresult]=useState();
    const [formresult2,updateresult2]=useState();
    
    const [initialstate,updatestate]=useState(true);
    const [initialstate2,updatestate2]=useState(true);

    const [isloading,setisloading]=useState(false);
    const [isloading2,setisloading2]=useState(false);

    // const para="Amet dolor anim commodo pariatur duis fugiat eiusmod officia consequat. Non non elit in qui reprehenderit et pariatur aliquip adipisicing. Duis cupidatat ex sit laborum do ex mollit dolor anim sit minim do aliqua. Lorem ullamco ipsum nulla ex. Ipsum qui nisi et tempor ullamco laborum sint. Non commodo elit consequat occaecat.";
    // const mainbox={
    //     visible:{x:0,opacity:1,transition:{duration:2,staggerChildren:2}},
    //     hidden:{x:-100,opacity:0}
    // }
    const indibox={
        visible:{x:0,opacity:1,transition:{duration:2}},
        hidden:{x:-500,opacity:0}
    }
    return (
      
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="container-md nav-fill"
      >
        <Tab className='overflow' eventKey="home" title="PPP Converstion">
          <motion.div 
          animate={{
            x:key==='home' ? 0 : -800,
            transition:{duration:1.5}
          }}
          >
                <motion.div className='row boxs' variants={indibox} >
                    <motion.div className='col-md-6 indibox' >
                      <Form1 URL="http://localhost:8000/PPP" updatestate={updatestate} updateresult={updateresult} setisloading={setisloading}></Form1>
                    </motion.div>
                    <motion.div className='col-1'><p></p></motion.div>
                    <motion.div className='col-md-5 indibox' >
                      <Result initialstate={initialstate} formresult={formresult} isloading={isloading}></Result>
                    </motion.div>
                </motion.div>
            {/* <p>Mollit id reprehenderit aliqua labore tempor ea sunt tempor. Nulla quis excepteur labore cupidatat. Excepteur eiusmod ullamco occaecat quis ullamco consequat. Et nostrud in deserunt labore pariatur eu ex quis consequat officia sunt cupidatat fugiat Lorem.</p> */}
            {/* <Pppconversion /> */}
            
          </motion.div>
        </Tab>
        
        <Tab className="overflow" eventKey="profile" title="Currency Conversion">
          <motion.div
          animate={{
            x:key==='profile' ? 0 : 1000,
            transition:{duration:1.5}
          }}
          >
                <motion.div className='row boxs' variants={indibox} >
                    <motion.div className='col-md-6 indibox' >
                      <Form1 URL="http://localhost:8000/Currency" updatestate={updatestate2} updateresult={updateresult2} setisloading={setisloading2}></Form1>
                    </motion.div>
                    <motion.div className='col-1'><p></p></motion.div>
                    <motion.div className='col-md-5  indibox' >
                    <Result initialstate={initialstate2} formresult={formresult2} isloading={isloading2}></Result>
                    </motion.div>
                </motion.div>
                    
          </motion.div>
        </Tab>
      </Tabs>
    );
  }
  

export default Tabsconversion;