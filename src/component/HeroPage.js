import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import image from '../Images/main.json'
import myPic from '../Images/pic.jpeg'
import back from '../Images/homeBack.svg'
import { GitHub, LocalPhone, Twitter } from '@mui/icons-material'
import ParticleBackground from './ParticleBackground'
const HeroPage = () => {
  return (
    <Box
      sx={{
        height: '95vh',
        width: '100%',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '95vh',
          color: 'secondary.light',
        }}
      >
        <ParticleBackground />
      </Box>

      <Box
        sx={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: { sm: 'row', sx: 'column' },
          // alignItems: 'center',
          justifyContent: 'flex-start',
          backgroundColor: '#000814',
        }}
      >
        {/* left */}

        <Box
          sx={{
            width: '50%',
            height: '100%',
            display: 'Flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
        >
          <Box sx={{ width: '63.%', color: 'secondary.light' }}>
            <Typography variant="h2">Hi!,</Typography>
            {/* Name */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'baseline',
              }}
            >
              <Typography variant="h2">I'm</Typography>
              <Typography
                variant="h1"
                color="secondary.dark"
                sx={{
                  textShadow: ' 0.1em 0.1em 0.2em black',
                }}
              >
                Sarthak Pant
              </Typography>
            </Box>
            {/* title */}
            <Typography variant="h4">Software Developer</Typography>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-start',
              }}
            >
              <Typography variant="h5">
                Developing Creative Ideas and making them come to live
              </Typography>
            </Box>
            {/* short Info */}
          </Box>
          {/* Connectme */}
          <Box
            sx={{
              width: '63.0%',
              height: '15%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
            }}
          >
            <Typography variant="h5">Contact Me</Typography>
            <Box
              sx={{
                width: '100.0%',
                height: '50%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
              }}
            >
              <Button
                sx={{
                  backgroundColor: 'primary.main',
                  width: '7em',
                  color: 'secondary.light',
                  '&:hover': {
                    backgroundColor: '#3F72AF',
                  },
                }}
              >
                <LinkedInIcon fontSize="large" />
              </Button>

              <Button
                sx={{
                  backgroundColor: 'primary.main',
                  width: '7em',
                  color: 'secondary.light',
                  '&:hover': {
                    backgroundColor: '#3F72AF',
                  },
                }}
              >
                <EmailIcon fontSize="large" />
              </Button>
              <Button
                sx={{
                  backgroundColor: 'primary.main',
                  width: '7em',
                  color: 'secondary.light',
                  '&:hover': {
                    backgroundColor: '#3F72AF',
                  },
                }}
              >
                <GitHub fontSize="large" />
              </Button>
              <Button
                sx={{
                  backgroundColor: 'primary.main',
                  width: '7em',
                  color: 'secondary.light',
                  '&:hover': {
                    backgroundColor: '#3F72AF',
                  },
                }}
              >
                <LocalPhone fontSize="large" />
              </Button>
              <Button
                sx={{
                  backgroundColor: 'primary.main',
                  width: '7em',
                  color: 'secondary.light',
                  '&:hover': {
                    backgroundColor: '#3F72AF',
                  },
                }}
              >
                <Twitter fontSize="large" />
              </Button>
            </Box>
          </Box>
        </Box>
        {/* right:  */}
      </Box>
    </Box>
  )
}

export default HeroPage
