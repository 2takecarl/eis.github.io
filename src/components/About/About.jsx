import { Box } from '@mui/system'
import img from './img.png'
import react from 'react'

const About = () => {

    return (
        <Box sx={{display: 'flex', flexDirection: {lg: 'row', xs: 'column'} }}>
            <Box sx={{marginLeft: {lg: '150px', xs: '25%'}, marginRight: '40px', marginTop: '200px', fontSize: '1.45rem', maxWidth: '800px'}}>
                <Box sx={{fontSize: {lg: '1.75rem', xs: "1.25rem"}}}> <Box sx={{fontSize: {lg: '2rem', xs: '1.5rem'}}}><b>ECS is a multilingual company supplying Simultaneous Interpretation </b></Box> services to companies and organizations. Specialized in European Works Councils, it supplies interpretation and technical solutions to companies all over Europe. It's widespread network of interpreters as well as technical competences has a large history of very successful events. </Box>
            </Box>
            <Box sx={{marginTop: {lg: '200px', xs:'50px'}, marginLeft: {lg: '50px', xs: 'calc(25% - 50px)'}}}>
                <img src={img} alt=""/>
            </Box>
        </Box>
    )
}

export default About