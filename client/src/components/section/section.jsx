import React,{useRef} from 'react';
import "../css/section.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Conversion from '../conversion';
import Faq from '../FAQ/faq';
import Faq2 from '../FAQ/faq2';
import Content from '../FAQ/Content';
import image1 from "./compare.png";
import image2 from "./currency-exchange.png"
import Cards from '../VIdeo_cards/cards';

const Section = () => {
    const scrollRef = useRef(null);
    return (
        <div>
            <div ref={scrollRef}>
                <div className='sectionsize sectioncolor onlyconversion'><Conversion></Conversion></div>
                <div className='sectionsize'><Faq Title={Content[0].title} Content={Content[0].content} note={Content[0].note} image={image1} side="right"></Faq></div>
                <div className='sectionsize sectioncolor'><Faq Title={Content[1].title} Content={Content[1].content} note={Content[1].note} image={image2}></Faq></div>
                <div className='sectionsize'><Faq2></Faq2></div>
                <div className='sectionsize sectioncolor'><Cards></Cards></div>
            </div>
        </div>
    );
}

export default Section;
