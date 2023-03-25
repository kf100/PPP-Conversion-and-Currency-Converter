// import { text } from '@fortawesome/fontawesome-svg-core';
import React,{useState,useRef} from 'react';
import Tippy from "@tippy.js/react";
import data from "./csvjson_last&final.json";
import "./form.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "tippy.js/dist/tippy.css";
import data1 from "./swap.png";
import axios from 'axios';

const Form1 = ({URL,updatestate,updateresult,setisloading}) => {
    const src=useRef(null);
    const trg=useRef(null);
    const d=data;
    const [formdata,updateform]=useState({
        target:"Aruba",
        source:"Aruba",
        amount:""
    });
    
    function handlechange(event){
        const newdata={...formdata}
        newdata[event.target.id]=event.target.value;
        updateform(newdata)
    }
    
    function swap(e){
        e.preventDefault();

        var source_select=src.current.value;
        src.current.value=trg.current.value;
        formdata.source=trg.current.value;

        trg.current.value=source_select;
        formdata.target=source_select;
    }

    function submitprocess(event){
        event.preventDefault();
        updatestate(false);
        setisloading(true);
        axios.post(URL,formdata)
        .then(res=>{updateresult(res.data);setisloading(false);console.log(res)})
    }

    return (
        
        <div>
            <form className='dynamic' onSubmit={submitprocess}>
                <label className='mb-1'><b>Source Country:</b></label><br />
                <select id='source' onChange={(e)=>handlechange(e)} value={formdata.source} ref={src} className='input-group mb-3'>
                    {d.map((x)=>
                        <option key={x.Country_Name} id={x.Country_Name}>{x.Country_Name}</option>
                    )}
                </select>
                <Tippy content="exchange Source and Target" placement='right'><input className='image_swap' type={"image"} src={data1} alt="swapimage" onClick={e=>swap(e)}></input></Tippy>
                <br />
                <label className='mb-1'><b>Target Country:</b></label><br />
                <select id="target" onChange={(e)=>handlechange(e)} value={formdata.target} ref={trg} className='input-group mb-1'>
                    {d.map((x)=>    
                        <option key={x.Country_Name} id={x.Country_Name}>{x.Country_Name}</option>
                    )}
                </select>
                <br />
                <input id="amount" className='input-group mb-4' onChange={(e)=>handlechange(e)} value={formdata.amount} type="number" placeholder="Source Country's Amount" required></input>
                <input className='mb-5 submit'type="submit"></input>
            </form>
        </div>
    );
}

export default Form1;
