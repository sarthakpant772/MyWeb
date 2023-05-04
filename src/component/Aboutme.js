import { Box, Button, Typography } from '@mui/material'
import { borderRadius } from '@mui/system'
import React from 'react'
import pic from '../Images/MyNew.jpg'
const Aboutme = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('MyResume.pdf').then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob)
        // Setting various property values
        let alink = document.createElement('a')
        alink.href = fileURL
        alink.download = 'MyResume.pdf'
        alink.click()
      })
    })
  }

  return (
    <Box
      id="about"
      sx={{
        width: '100%',
        height: '100vh',
        backgroundColor: 'primary.main',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'space-evenly',
      }}
    >
      {/* img */}

      <Box
        sx={{
          width: '40%',
          height: '100%',
          alignItems: 'center',
          display: { xs: 'none', sm: 'flex' },
          justifyContent: 'center',
          borderWidth: '10rem',
        }}
      >
        <Box
          component="img"
          src={pic}
          sx={{
            width: '60%',
            border: '10px solid',
            borderColor: 'primary.light',
            borderRadius: '15px',
            boxShadow:
              'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
          }}
        />
      </Box>
      {/* aboutMe */}
      <Box
        sx={{
          width: { xs: '100%', sm: '60%' },
          height: { xs: '100%', sm: '90%' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: { xs: '80%', sm: '70%' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', sm: 'start' },
            justifyContent: { xs: 'space-between', sm: 'flex-start' },
          }}
        >
          <Box
            sx={{
              width: { xs: '90%', sm: '70%' },
              height: { xs: '100%' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
            }}
          >
            <Box>
              <Typography variant="subtitle2" color="secondary.dark">
                HERE'S AN INSIGHT
              </Typography>
              <Box sx={{ display: 'flex' }} mb="1rem">
                <Typography variant="h2" color="secondary.main" mr="1rem">
                  About
                </Typography>
                <Typography variant="h2" color="secondary.dark" noWrap>
                  Me
                </Typography>
              </Box>
            </Box>

            <Typography variant="h5" color="secondary.main" mb="1rem">
              I am Noida based software developer who specilizes in building and
              designing exceptional digital experience
            </Typography>
            <Box
              sx={{
                display: { xs: 'none', xl: 'flex' },
                justifyContent: 'space-between',
                alignItems: 'baseline',
              }}
            >
              <Typography variant="h5" color="secondary.main" mb="1rem">
                I have won
              </Typography>
              <Typography variant="h5" color="secondary.dark">
                Smart India Hackathon-2022
              </Typography>
              <Typography variant="h5" color="secondary.main">
                (National level Hackathon)
              </Typography>
            </Box>
            <Box
              sx={{
                display: { xl: 'none' },
              }}
            >
              <Typography variant="h5" color="secondary.main">
                I have won{' '}
                <Typography variant="h5" color="secondary.dark">
                  {' '}
                  Smart India Hackathon-2022{' '}
                </Typography>
                (National Level Hackathon)
              </Typography>
            </Box>
            <Box
              sm={{
                display: { xs: 'none', xl: 'flex' },
              }}
            >
              <Typography
                variant="h5"
                color="secondary.main"
                mr="1rem"
                mb="1rem"
              >
                I am currently working as a SDE INTERN at
              </Typography>
              <Typography variant="h5" color="secondary.dark">
                Crop Coin.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: { xs: '90%', sm: '100%' },
            height: '4%',
            display: 'flex',
            justifyContent: { xs: 'flex-end', sm: 'flex-start' },
          }}
        >
          <Button
            sx={{ backgroundColor: 'primary.light' }}
            size="large"
            onClick={onButtonClick}
          >
            <Typography color="secondary.dark" variant="subtitle1">
              Download CV
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Aboutme
