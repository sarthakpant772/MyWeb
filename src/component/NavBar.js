import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const NavBar = () => {
  return (
    <Box
      sx={{
        position: 'sticky',
        width: '100%',
        height: '5vh',
        backgroundColor: '#000814',
        border: 0,
        margin: 0,
        boxShadow:
          'rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px',
        display: { xs: 'none', sm: 'flex' },
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      {/* logo */}
      <Box
        sx={{
          width: '10%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: 'secondary.main',
            fontFamily: 'Mr De Haviland, cursive',
          }}
        >
          SarthakPant
        </Typography>
      </Box>
      {/* navigation */}
      <Box
        sx={{
          width: '55%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        <Button>
          <Typography
            variant="subtitle1"
            sx={{
              color: 'secondary.main',
            }}
          >
            Aboutme
          </Typography>
        </Button>
        <Button>
          <Typography
            variant="subtitle1"
            sx={{
              color: 'secondary.main',
            }}
          >
            Experience
          </Typography>
        </Button>
        <Button>
          <Typography
            variant="subtitle1"
            sx={{
              color: 'secondary.main',
            }}
          >
            Achivements
          </Typography>
        </Button>
        <Button>
          <Typography
            variant="subtitle1"
            sx={{
              color: 'secondary.main',
            }}
          >
            Projects
          </Typography>
        </Button>
        <Button>
          <Typography
            variant="subtitle1"
            sx={{
              color: 'secondary.main',
            }}
          >
            Connect
          </Typography>
        </Button>
        <Button>
          <Typography
            variant="subtitle1"
            sx={{
              color: 'secondary.main',
            }}
          >
            Resume
          </Typography>
        </Button>
      </Box>
    </Box>
  )
}

export default NavBar
