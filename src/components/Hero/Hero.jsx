import styled from '@emotion/styled';
import { Button } from '@mui/material'
import { Box, createTheme } from '@mui/system'
import teams from './teams.png'
import meet from './meet.png'
import skype from './skype.png'
import zoom from './zoom.png'
import circle from './circle.png'
import React from 'react'

const StyledButton = styled(Button)(`
  text-transform: none;
`);

const Hero = () => {
  return (
    <Box sx={{marginTop: '100px'}}>
        <Box sx={{marginLeft: '340px', marginTop: '200px', fontSize: '3.7rem', fontWeight: '700', color: '#1D3D6C'}}>
            <Box>
                Leader in Translation and
            </Box>
            <Box sx={{marginTop: '-20px'}}>
                Interpretation Services
            </Box>
        </Box>
        <Box sx={{marginLeft: '340px', fontSize: '1.25rem', marginTop: '10px'}}>
            <Box>
                European Interpretation Services is an internationally recognized leader in multilingual
            </Box>
            <Box>
                translation and interpretation services with expert linguists all around the globe
            </Box>
        </Box>

        <StyledButton size='large' sx={{borderRadius: 28, backgroundColor: '#EDF1F6', paddingLeft: '20px', paddingRight: '20px', fontFamily: `"Source Sans Pro", sans-serif`, marginLeft: '340px', marginTop: '20px', fontWeight: '600', fontSize: '1.35rem', color: '#315EA0'}}>
            Book a consultation    
        </StyledButton>        

        <Box>
            <Box sx={{color: '#7C7C7C', fontSize: '1.1rem', marginLeft: '690px', marginTop: '160px', fontFamily: `"Source Sans Pro", sans-serif`}}>
                Using cutting edge technology for real time interpretation on the most used communication platforms
            </Box>
            <Box sx={{marginLeft: '600px', marginTop: '30px', display: 'flex', justifyContent: 'space-around', maxWidth: '900px'}}>
                <Box sx={{marginLeft: '400px', marginTop: '-5px'}}>
                    <img src={teams} alt="" draggable={false} />
                </Box>
                <Box sx={{marginLeft: '20px'}}>
                    <img src={zoom} alt="" draggable={false} />
                </Box>
                <Box sx={{marginLeft: '20px'}}>
                    <img src={meet} alt="" draggable={false} />
                </Box>
                <Box sx={{marginLeft: '20px', marginTop: '-5px'}}>
                    <img src={skype} alt="" draggable={false} />
                </Box>
            </Box>
        </Box>

        <Box>
            <Box sx={{position: 'fixed', color: '#DEF4F1'}}>
                <img src={circle} alt="" width="100%" height="100%" />
            </Box>
        </Box>
    </Box>
  )
}

export default Hero
