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
        height: { xs: '97vh', sm: '95vh' },
        width: '100%',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          display: { xs: 'none', sm: 'block' },
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
          flexDirection: { sm: 'row', xs: 'column' },
          // alignItems: 'center',
          justifyContent: 'flex-start',
          backgroundColor: 'primary.dark',
        }}
      >
        {/* left */}

        <Box
          sx={{
            width: { xs: '100%', xl: '60%' },
            height: '100%',
            display: 'Flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
        >
          <Box
            sx={{
              // marginLeft: '10em',
              width: { xs: '100%', xl: '70%' },
              height: '50%',
              color: 'secondary.light',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              // marginLeft: { xs: '2em', sm: 0 },
              // marginRight: { xs: '1em', sm: 0 },
            }}
          >
            <Box
              sx={{
                // marginLeft: '10em',
                width: { xs: '100%', sm: '90%', xl: '90%' },
                height: '60%',
                // margin: { xs: '2em', sm: 0 },
                color: 'secondary.light',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: { xs: 'space-evenly', sm: 'center' },
                alignItems: { xs: 'center', sm: 'start' },
                textAlign: { xs: 'center', sm: 'start' },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.5rem', sm: '3.75rem' },
                }}
              >
                Hi!,
              </Typography>
              {/* Name */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'baseline',
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '1.5rem', sm: '3.75rem' },
                  }}
                >
                  I'm
                </Typography>
                <Typography
                  variant="h1"
                  color="secondary.dark"
                  sx={{
                    fontSize: { xs: '3rem', sm: '6rem' },
                    textShadow: '0.1em 0.1em 0.2em black',
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
                  Developing Creative Ideas and making them come to live.
                </Typography>
              </Box>
            </Box>

            {/* short Info */}
          </Box>
          {/* Connectme */}
          <Box
            sx={{
              width: { xs: '80%', xl: '63.0%' },
              height: { xs: '50%', sm: '15%' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
            }}
          >
            {/* <Typography variant="h5">Contact Me</Typography> */}
            <Box
              sx={{
                width: '100.0%',
                height: { xs: '100%', sm: '50%' },
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: { xs: 'space-evenly', xl: 'space-evenly' },
              }}
            >
              <Button
                sx={{
                  backgroundColor: 'primary.main',
                  width: { sm: '7em' },
                  color: 'secondary.light',
                  '&:hover': {
                    backgroundColor: '#3F72AF',
                  },
                }}
                href="https://www.linkedin.com/in/sarthak-pant-8844521b7/"
                break
              >
                <LinkedInIcon fontSize="large" />
              </Button>

              <Button
                sx={{
                  backgroundColor: 'primary.main',
                  width: { sm: '7em' },
                  color: 'secondary.light',
                  '&:hover': {
                    backgroundColor: '#3F72AF',
                  },
                }}
                href="mailto:sarthak.pant31@gmail.com"
              >
                <EmailIcon fontSize="large" />
              </Button>
              <Button
                sx={{
                  backgroundColor: 'primary.main',
                  width: { sm: '7em' },
                  color: 'secondary.light',
                  '&:hover': {
                    backgroundColor: '#3F72AF',
                  },
                }}
                href="https://github.com/sarthakpant772"
              >
                <GitHub fontSize="large" />
              </Button>
              <Button
                sx={{
                  backgroundColor: 'primary.main',
                  width: { sm: '7em' },
                  color: 'secondary.light',
                  '&:hover': {
                    backgroundColor: '#3F72AF',
                  },
                }}
                href="tel:+917906456695"
              >
                <LocalPhone fontSize="large" />
              </Button>
              <Button
                sx={{
                  backgroundColor: 'primary.main',
                  width: { sm: '7em' },
                  color: 'secondary.light',
                  '&:hover': {
                    backgroundColor: '#3F72AF',
                  },
                }}
                href="https://twitter.com/1SarthakPant"
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
