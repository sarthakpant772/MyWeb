import { Box, Typography, Button } from '@mui/material'
import React, { useState } from 'react'
import Card from './Card'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'

import { useDispatch, useSelector } from 'react-redux'
import { addExpValue } from '../features/card/cardSlice'
import ExpCard from './ExpCard'
const Experience = () => {
  const [pointer, setPointer] = useState(0)
  const dispatch = useDispatch()
  let value = useSelector((state) => state.card.expValue)

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
      id="exp"
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
            display: { sm: 'flex' },
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
          <Button onClick={() => dispatch(addExpValue(value - 1))}>
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
          </Button>
        </Box>
        <Box
          sx={{
            width: '70%',
            height: '100%',
            display: 'flex',
            flexDirection: 'row',
            // overflowX: 'scroll',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              height: '100%',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <ExpCard />
          </Box>

          {/* <Card /> */}
        </Box>

        <Box
          sx={{
            width: '10%',
            height: '100%',
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button onClick={() => dispatch(addExpValue(value + 1))}>
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
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Experience
