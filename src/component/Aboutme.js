import { Box, Button, Typography } from '@mui/material'
import { borderRadius } from '@mui/system'
import React from 'react'
import pic from '../Images/pic.jpeg'
const Aboutme = () => {
  return (
    <Box
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
          display: 'flex',
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
          width: '60%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        <Box sx={{ width: '100%', height: '10%' }}>
          <Box sx={{ width: '70%' }}>
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

            <Typography variant="h5" color="secondary.main" mb="1rem">
              I am Noida based software developer who specilizes in building and
              designing exceptional digital experience
            </Typography>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="baseline"
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
            <Box display="flex">
              <Typography
                variant="h5"
                color="secondary.main"
                mr="1rem"
                mb="1rem"
              >
                I am currently working as a SDE INTERN at
              </Typography>
              <Typography variant="h5" color="secondary.dark">
                EduFuse.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ width: '100%', height: '10%' }}>
          <Button sx={{ backgroundColor: 'primary.light' }} size="large">
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
