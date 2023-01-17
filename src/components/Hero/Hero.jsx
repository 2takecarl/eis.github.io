import styled from '@emotion/styled';
import { Button } from '@mui/material'
import { Box, createTheme } from '@mui/system'
import teams from './teams.png'
import meet from './meet.png'
import skype from './skype.png'
import zoom from './zoom.png'
import circle from './circle.png'
import React from 'react'
import { Link } from 'react-router-dom';

const StyledButton = styled(Button)(`
  text-transform: none;
`);


const Hero = () => {
  return (
    <Box sx={{marginTop: '100px'}}>
        
        <Box sx={{display: 'flex', flexDirection: 'column', textAlign: 'center', fontSize: '5.25rem', color: '#1D3D6C', fontWeight: '700'}}>
            <Box>
                European Conference Solutions
            </Box>
            <Box sx={{fontSize: '3rem', marginTop: '20px'}}>
                <Box>
                    Online, Hybrid, Onsight Events 
                </Box>
                <Box sx={{marginTop: '-10px'}}>
                    with Simultaneous Interpretation
                </Box>
            </Box>
        </Box>

        <Box sx={{fontSize: '1.25rem', textAlign: 'center', marginLeft: {xs: '50px', md: '100px'}, marginRight: {xs: '50px', md:'100px'}}}>
            With our leading technology you will get the best onsight / hybrid / virtual event. We are specialized in EWC's with more than 20 years experience in the organization of European Works Councils. We collaborate with technical suppliers all over Europe and have an exhaustive team of high-tech Conference Interpreters.
        </Box>

        <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <StyledButton draggable={false} size='large' sx={{borderRadius: 28, backgroundColor: '#EDF1F6', paddingLeft: '20px', paddingRight: '20px', fontFamily: `"Source Sans Pro", sans-serif`, marginTop: '20px', fontWeight: '600', fontSize: '1.35rem', color: '#315EA0'}}>
                <a href="/contact">
                    Get a Quote
                </a>

            </StyledButton>        
        </Box>

        <br />
        <br />
        <br />
        <br />
        <br />

        <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', color: 'white'}}>
            <Box sx={{backgroundColor: '#3DBEAF', width: '28%', height: {sm: '560px', md:'420px'}}}>
                <Box sx={{fontSize: '2rem', textAlign: 'center', marginTop: '20px'}}>
                    Online Event
                </Box>
                <Box sx={{marginLeft: '12%', marginRight: '12%', marginTop: '40px', fontSize: '1.15rem'}}>
                    A fully virtual meeting where the participants connect remotely via their own devices recieving interpretation in their headphones.
                </Box>
            </Box>
            <Box sx={{backgroundColor: '#315EA0', width: '28%', height: {sm: '560px', md:'420px'}}}>
                <Box sx={{fontSize: '2rem', textAlign: 'center', marginTop: '20px'}}>
                    Hybrid Event
                </Box>
                <Box sx={{marginLeft: '12%', marginRight: '12%', marginTop: '40px', fontSize: '1.15rem'}}>
                    An onsight meeting with participants at the venue with interpretation remotely via their mobile phones. Possibility for participants to connect remotely.
                </Box>
            </Box>
            <Box sx={{backgroundColor: '#1D3D6C', width: '28%', height: {sm: '560px', md:'420px'}}}>
                <Box sx={{fontSize: '2rem', textAlign: 'center', marginTop: '20px'}}>
                    Onsight Event
                </Box>
                <Box sx={{marginLeft: '12%', marginRight: '12%', marginTop: '40px', fontSize: '1.15rem'}}>
                    Participants and interpreters present at the venue. Convenient as onsight technical equipment is used. Interpreters work from booths.
                </Box>
            </Box>
        </Box>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        
    </Box>
  )
}

export default Hero
