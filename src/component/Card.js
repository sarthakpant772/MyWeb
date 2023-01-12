import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import pic from '../Images/Project.webp'
import CodeIcon from '@mui/icons-material/Code'
import { ArrowRight } from '@mui/icons-material'
const Card = () => {
  return (
    <Box
      sx={{
        marginLeft: '1em',
        marginRight: '1em',
        position: 'relative',
        height: '80%',
        width: '70em',
        backgroundColor: 'primary.main',
        boxShadow:
          'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
        display: 'flex',
      }}
    >
      <Box
        sx={{
          width: '60%',
          height: '100%',
          display: 'flex',
          //   backgroundColor: '#FFF',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            height: '80%',
            width: '80%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box sx={{ minHeight: '3em' }}>
            <Typography
              variant="h4"
              color="secondary.dark"
              sx={{ textTransform: 'uppercase' }}
            >
              Name
            </Typography>
          </Box>
          <Box
            sx={{
              minHeight: '20em',
              width: '90%',
              color: 'secondary.main',
              marginTop: '1.5em',
            }}
          >
            <Typography variant="subtitle1">
              Currently, none of Rockstar’s games have the ability to enable
              cross-play. While we still have no information regarding the
              feature in GTA 6, it’s likely that it could mark the first time
              the feature appears in one of their titles.
              <Typography variant="subtitle1" mt="1rem">
                This could allow players across all hardware to play together.
                Whether you’re on console or PC, you may be able to interact in
                GTA 6 without limitations.
              </Typography>
            </Typography>
          </Box>
          <Box
            sx={{
              width: '90%',
              height: '10%',
              //   backgroundColor: '#fff',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}
          >
            <Box
              color="secondary.dark"
              sx={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Box sx={{ alignItems: 'center', display: 'flex' }}>
                <Button sx={{ color: 'secondary.dark' }}>
                  <CodeIcon />
                </Button>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Typography variant="subtitle2" color="secondary.dark">
                  Demo
                </Typography>
                <ArrowRight color="secondary.dark" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: '40%', height: '100%' }}>
        <Box
          sx={{
            width: '100%',
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
              width: '80%',
              height: '85%',
              border: '10px solid',
              borderColor: 'primary.light',
              borderRadius: '15px',
              boxShadow:
                'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
            }}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Card
