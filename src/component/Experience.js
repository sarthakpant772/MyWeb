import { Box, Typography } from '@mui/material'
import React from 'react'
import Card from './Card'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'
import { Button } from 'react-scroll'
const Experience = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        backgroundColor: 'primary.main',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: '50%',
            height: '2px',
            backgroundColor: 'secondary.dark',
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          width: '100%',
          height: '10%',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            alignItems: 'baseline',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h2" noWrap color="secondary.dark">
            Experiences
          </Typography>
          {/* <Typography>/</Typography> */}
          <Typography variant="h2" noWrap color="secondary.main">
            /Achievements
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          height: '80%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        <Box
          sx={{
            width: '10%',
            height: '100%',
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              height: '3rem',
              width: '3rem',
              backgroundColor: 'secondary.dark',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '50%',
            }}
          >
            <KeyboardDoubleArrowLeftIcon />
          </Box>
        </Box>
        <Box
          sx={{
            width: '70%',
            height: '100%',
            display: 'flex',
            flexDirection: 'row',
            // overflowX: 'scroll',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
        >
          <Box
            sx={{
              height: '100%',
              width: '100%',
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <Card />
          </Box>

          {/* <Card /> */}
        </Box>

        <Box
          sx={{
            height: '3rem',
            width: '3rem',
            backgroundColor: 'secondary.dark',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
          }}
        >
          <KeyboardDoubleArrowRightIcon />
        </Box>
      </Box>
    </Box>
  )
}

export default Experience
