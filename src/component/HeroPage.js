import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import image from '../Images/main.json'
import myPic from '../Images/pic.jpeg'
import back from '../Images/homeBack.svg'
import { GitHub, LocalPhone, Twitter } from '@mui/icons-material'
const HeroPage = () => {
  return (
    <Box
      sx={{
        height: '95vh',
        width: '100%',
        position: 'relative',
      }}
    >
      {/* <Box
        component="img"
        src={back}
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: '-1',
        }}
      /> */}

      <Box
        sx={{
          zIndex: '1',
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: { sm: 'row', sx: 'column' },
          alignItems: 'center',
          justifyContent: 'space-evenly',
          backgroundColor: 'primaryk.main',
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
          <Box sx={{ width: '63.%', color: 'primary.contrastText' }}>
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
        <Box
          sx={{
            width: '40%',
            height: '100%',
            background: 'primary.main',
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box
            component="img"
            src={myPic}
            sx={{
              // backgroundColor: 'secondary.main',
              height: '25em',
              width: '25em',
              borderRadius: '50%',
              boxShadow:
                'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
            }}
          />
          <Box
            sx={{
              filter: 'blur(8px)',
              position: 'absolute',
              zIndex: '-1',
              width: '55em',
            }}
          >
            <svg viewBox="0 0 190 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#112D4E" transform="translate(100 100)">
                <animate
                  attributeName="d"
                  dur="10000ms"
                  repeatCount="indefinite"
                  values="M60.4,-20.9C65.5,-3.9,48.1,19.2,25.8,35.3C3.6,51.5,-23.6,60.6,-44.1,48.6C-64.6,36.5,-78.6,3.2,-70.1,-18.4C-61.7,-40.1,-30.8,-50.1,-1.6,-49.6C27.6,-49.1,55.3,-38,60.4,-20.9Z;
                                    M39.9,-13.9C47.2,9.5,45.5,34.9,29.9,47.7C14.4,60.5,-15,60.8,-37.5,45.8C-60.1,30.8,-75.9,0.5,-68.5,-23C-61.1,-46.5,-30.6,-63.3,-7.1,-61C16.3,-58.7,32.6,-37.3,39.9,-13.9Z;
                                                      M40.5,-19.9C46,3.8,39.5,24.6,23.9,36.8C8.4,49,-16.2,52.7,-34.2,41C-52.1,29.4,-63.3,2.6,-56.5,-22.9C-49.7,-48.3,-24.8,-72.5,-3.7,-71.3C17.5,-70.1,35,-43.6,40.5,-19.9Z;
                  M52.4,-21.1C59.3,4.3,50.4,30.7,30,46.9C9.6,63.1,-22.4,69,-39.8,56C-57.1,43.1,-59.9,11.4,-50.8,-17C-41.7,-45.4,-20.9,-70.4,0.9,-70.7C22.7,-71,45.5,-46.6,52.4,-21.1Z;
                  M66.1,-20.2C74.8,5.1,63.4,38.3,42.3,52.1C21.3,65.9,-9.3,60.4,-31.4,44.1C-53.5,27.8,-67.2,0.8,-60.6,-21.8C-53.9,-44.3,-27,-62.3,0.9,-62.6C28.7,-62.9,57.5,-45.5,66.1,-20.2Z;
                  M60.4,-20.9C65.5,-3.9,48.1,19.2,25.8,35.3C3.6,51.5,-23.6,60.6,-44.1,48.6C-64.6,36.5,-78.6,3.2,-70.1,-18.4C-61.7,-40.1,-30.8,-50.1,-1.6,-49.6C27.6,-49.1,55.3,-38,60.4,-20.9Z;"
                ></animate>
              </path>
            </svg>
          </Box>
          {/* <Box component="img" src={myPic} sx={{ zIndex: 3 }} /> */}
        </Box>
      </Box>
    </Box>
  )
}

export default HeroPage
