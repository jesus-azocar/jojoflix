import jojosImg from '../assets/jojos-cover.jpg';
import {Image, Container} from '@mantine/core';

const HomeArea = function(props){
    return (<div className="homeArea">
        <h3>Welcome to Jojoflix</h3>
        <p>Please feel free to explore this application, made with love for both coding and Jojo's Bizarre Adventure.</p>
        <Container size="md">
            <Image fit="contain" className="jojosImg" src={jojosImg}/>
        </Container>
    </div>);
};

export default HomeArea;