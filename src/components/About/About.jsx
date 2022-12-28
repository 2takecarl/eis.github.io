import { Box } from '@mui/system'
import img from './img.png'
import react from 'react'

const About = () => {

    return (
        <Box sx={{display: 'flex', flexDirection: 'row'}}>
            <Box sx={{marginLeft: '150px', marginTop: '200px', fontSize: '1.45rem', maxWidth: '500px'}}>
                <Box sx={{fontSize: '2rem'}}> <b>ECS is a multilingual company supplying Simultaneous Interpretation </b></Box> services to companies and organizations. Specialized in European Works Councils, it supplies interpretation and technical solutions to companies all over Europe. It's widespread network of interpreters as well as technical competences has a large history of very successful events. 
            </Box>
            <Box sx={{marginTop: '200px', marginLeft: '50px'}}>
                <img src={img} alt=""/>
            </Box>
        </Box>
    )
}

export default About