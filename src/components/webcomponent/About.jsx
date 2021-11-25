import Common from "./Common";
import web from './Images/hero.png';

const About = () => {
    
    return(
        <>
            <Common 
            name='Welcome to About page'
            btn='Contact Now'
            visit='/contact'
            imgSrc={web}
            />
        </>
    );
};

export default About;