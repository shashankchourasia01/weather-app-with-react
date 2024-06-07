import  { useState } from 'react';
import { Box, styled } from '@mui/material';
import Sunset from '../images/bg.jpg'
import Form from '../components/Form';
import Information from '../components/information';
// import { Component } from 'react';


const Component = styled(Box)({
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
    width: '65%'
})

const Image = styled(Box)({
    backgroundImage: `url(${Sunset})`,
    width: '27%',
    height: '80%',
    backgroundSize: 'cover',
    borderRadius: '20px 0 0 20px'
})



const Home = () => {
    
    const [data, setData] = useState();

    console.log(data, "data")


    return (
        <Component>
             <Image> </Image>
            <Box style={{ width: '73%', height: '80%' }}>
                <Form weatherData={setData} />
                <Information result={data} />
            </Box>
            
        </Component>
    )
}

export default Home;