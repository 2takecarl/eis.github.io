import { Box } from '@mui/system'
import react from 'react'
import img from './img.png'

const Services = () => {

    return (
        <Box sx={{marginTop: '150px', display: 'flex', flexDirection:{xs: 'column', lg:'row'}}}>
            <Box sx={{textAlign:{xs: 'center', lg:'left'}, ml:{lg: "150px", xs:'25%'}, mr:'40px'}}>
                <Box sx={{fontSize: '2rem', fontWeight: '700'}}>
                    One stop for all your language needs
                </Box>
                <Box sx={{fontSize: '1.5rem'}}>
                    our depth of language expertise and experience allows us to break down language barriers and solve any form of communicatiion challenge. Any language, any project, any time. We offer interpretation from and in to all European languages.
                </Box>
            </Box>
            <Box sx={{mx: {xs: 'auto', lg:'80px'}, mt:{xs: '40px', lg:"0"}}}>
                <img src={img} alt="" />
            </Box>
        </Box>
    )
}

export default Services