import { Autocomplete, Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import SendIcon from '@mui/icons-material/Send'
const ContactMe = () => {
  return (
    <Box
      id="connect"
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
          height: { xs: '85%', sm: '75%' },
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
            width: { xs: '100%', sm: '40%' },
            backgroundColor: 'primary.dark',
            boxShadow: `rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px`,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            color: 'secondary.light',
            alignItems: 'center',
            borderRadius: '10px',
          }}
        >
          <Box
            sx={{
              width: '80%',
              height: '20%',
              alignItems: 'center',
              display: { xs: 'none', lg: 'flex' },
              flexDirection: 'column',
            }}
          >
            <Typography variant="h2" color="secondary.dark">
              Sarthak Pant
            </Typography>
            <Typography
              variant="h4"
              sx={{ display: { xs: 'none', sm: 'flex' } }}
            >
              Software Developer
            </Typography>
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
              <Box sx={{ width: { xs: '20%', sm: '8%' } }}>
                <Button sx={{ color: 'secondary.light' }}>
                  <InstagramIcon sx={{ height: '100%', width: '100%' }} />
                </Button>
              </Box>
              <Box sx={{ width: { xs: '20%', sm: '8%' } }}>
                <Button sx={{ color: 'secondary.light' }}>
                  <TwitterIcon sx={{ height: '100%', width: '100%' }} />
                </Button>
              </Box>
              <Box sx={{ width: { xs: '20%', sm: '8%' } }}>
                <Button sx={{ color: 'secondary.light' }}>
                  <GitHubIcon sx={{ height: '100%', width: '100%' }} />
                </Button>
              </Box>
              <Box sx={{ width: { xs: '20%', sm: '8%' } }}>
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
            backgroundColor: 'primary.dark',
            borderRadius: '5px',
            boxShadow: `rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px`,
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            color: 'secondary.dark',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '100%',
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
              borderRight: '10px',
            }}
          >
            <Box
              sx={{
                width: '80%',
                height: '80%',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                color: 'secondary.dark',
                borderRight: '10px',
              }}
            >
              <TextField
                id="standard-password-input"
                label="Your Email"
                color="secondary"
                type="email"
                autoComplete="current-password"
                variant="standard"
                sx={{
                  width: '100%',
                  color: 'secondary.dark',
                  '& .MuiFormLabel-root': {
                    color: 'secondary.light',
                  },
                  '& .MuiFormLabel-root.Mui-focused': {
                    color: 'secondary.light',
                  },
                }}
              />
              <TextField
                id="standard-password-input"
                label="Your Name"
                color="secondary"
                autoComplete="current-password"
                variant="standard"
                sx={{
                  width: '100%',
                  color: 'secondary.dark',
                  '& .MuiFormLabel-root': {
                    color: 'secondary.light',
                  },
                  '& .MuiFormLabel-root.Mui-focused': {
                    color: 'secondary.light',
                  },
                }}
              />
              <TextField
                id="standard-basic"
                label="PhoneNumber"
                color="secondary"
                variant="standard"
                sx={{
                  width: '100%',
                  color: 'secondary.dark',
                  '& .MuiFormLabel-root': {
                    color: 'secondary.light',
                  },
                  '& .MuiFormLabel-root.Mui-focused': {
                    color: 'secondary.light',
                  },
                }}
              />
              <TextField
                id="outlined-multiline-static"
                label="Enter Msg"
                multiline
                rows={4}
                color="secondary"
                inputProps={{ color: 'secondary.light' }}
                sx={{
                  width: '100%',
                  color: 'secondary.light',
                  '& .MuiFormLabel-root': {
                    color: 'secondary.light',
                  },
                  '& .MuiFormLabel-root.Mui-focused': {
                    color: 'secondary.light',
                  },
                }}
              />

              <Button
                sx={{
                  backgroundColor: 'secondary.dark',
                  color: 'secondary.light',
                }}
              >
                <Typography variant="subtitle1">Send</Typography>
                <SendIcon />
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ContactMe
