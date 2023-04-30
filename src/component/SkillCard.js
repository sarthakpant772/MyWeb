import { Box, Typography } from '@mui/material'
import React from 'react'
import react from '../Images/react.png'
const SkillCard = ({ props }) => {
  return (
    <Box
      sx={{
        width: { xs: '8em', sm: '15.75em' },
        height: { xs: '11em', sm: '7.3em' },
        backgroundColor: 'primary.main',
        borderRadius: '10px',
        boxShadow:
          'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: { sm: '45%' },
          height: { sm: '100%' },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: '90%',
            height: '90%',
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box
            component="img"
            src={require(`../Images/${props.src}.png`)}
            sx={{ width: '100%', height: '100%', alignSelf: 'center' }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          width: '70%',
          height: '100%',
          alignItems: 'center',
          display: { xs: 'none', sm: 'flex' },
          justifyContent: 'center',
        }}
      >
        <Typography variant="h5" color="secondary.main">
          {props.names}
        </Typography>
      </Box>
    </Box>
  )
}

export default SkillCard
