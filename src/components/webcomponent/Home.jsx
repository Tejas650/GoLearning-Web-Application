import Common from "./Common";
import web from './Images/home1.png';

const Home = () => {

    return(
        <>
            <Common
            name='Grow your business with'
            btn='Get Started'
            visit='/service'
            imgSrc={web}
            />
        </>
    );
};

export default Home;