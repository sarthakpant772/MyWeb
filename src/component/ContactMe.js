import { Autocomplete, Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
const ContactMe = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '80vh',
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
            Contact
          </Typography>
          {/* <Typography>/</Typography> */}
          <Typography variant="h2" noWrap color="secondary.main">
            Me
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          height: '75%',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        <Box
          sx={{
            height: '90%',
            width: '40%',
            // backgroundColor: '#FFF',
            boxShadow: `rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px`,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            color: 'secondary.light',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: '80%',
              height: '20%',
              alignItems: 'center',
            }}
          >
            <Typography variant="h2" color="secondary.dark">
              Sarthak Pant
            </Typography>
            <Typography variant="h4">Software Developer</Typography>
          </Box>
          <Box
            sx={{
              width: '80%',
              height: '20%',
              // alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h5">
              Email: sarthak.pant31@gmail.com
            </Typography>
            <Typography variant="h5">Phone: 7906456695</Typography>
          </Box>
          <Box
            sx={{
              width: '80%',
              height: '30%',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography variant="h5">Find me on: </Typography>

            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}
            >
              <Box sx={{ width: '8%' }}>
                <Button sx={{ color: 'secondary.light' }}>
                  <InstagramIcon sx={{ height: '100%', width: '100%' }} />
                </Button>
              </Box>
              <Box sx={{ width: '8%' }}>
                <Button sx={{ color: 'secondary.light' }}>
                  <TwitterIcon sx={{ height: '100%', width: '100%' }} />
                </Button>
              </Box>
              <Box sx={{ width: '8%' }}>
                <Button sx={{ color: 'secondary.light' }}>
                  <GitHubIcon sx={{ height: '100%', width: '100%' }} />
                </Button>
              </Box>
              <Box sx={{ width: '8%' }}>
                <Button sx={{ color: 'secondary.light' }}>
                  <LinkedInIcon sx={{ height: '100%', width: '100%' }} />
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            height: '90%',
            width: '40%',
            // backgroundColor: '#FFF',
            borderRadius: '5px',
            boxShadow: `rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px`,
            display: 'flex',
            flexDirection: 'column',
            color: 'secondary.dark',
          }}
        >
          <Box>
            <TextField id="standard-basic" label="Email" variant="standard" />
            <TextField
              id="standard-basic"
              label="Standard"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Standard"
              variant="standard"
            />
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ContactMe
