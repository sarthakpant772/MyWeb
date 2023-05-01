import { Box, Typography } from '@mui/material'
import React from 'react'
import SkillCard from './SkillCard'

const Skills = () => {
  return (
    <Box
      id="skill"
      sx={{
        width: '100%',
        height: { xs: '95vh', lg: '100vh', xl: '80vh' },
        backgroundColor: 'primary.main',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '20%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly',
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
            height: '20%',
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Typography variant="h2" color="secondary.dark">
              My{' '}
            </Typography>
            <Typography variant="h2" sx={{ color: 'secondary.main' }}>
              Skills
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: '100%',
          height: { xs: '80%', lg: '80%' },
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: { xs: 'space-evenly', lg: 'space-around' },
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: { xs: '50%', lg: '20%' },
            display: 'flex',
            alignItems: 'center',
            flexDirection: { xs: 'row', lg: 'row' },
            justifyContent: 'space-evenly',
          }}
        >
          <Box
            sx={{
              width: '50%',
              height: { xs: '100%', lg: '20%' },
              display: 'flex',
              alignItems: 'center',
              flexDirection: { xs: 'column', lg: 'row' },
              justifyContent: 'space-evenly',
            }}
          >
            <SkillCard props={{ names: 'React.Js', src: 'react' }} />
            <SkillCard props={{ names: 'Node.Js', src: 'node' }} />
          </Box>

          <Box
            sx={{
              width: '50%',
              display: 'flex',
              height: { xs: '100%', lg: '20%' },
              alignItems: 'center',
              flexDirection: { xs: 'column', lg: 'row' },
              justifyContent: 'space-evenly',
            }}
          >
            <SkillCard props={{ names: 'MongoDb', src: 'mongo' }} />
            <SkillCard props={{ names: 'SQL', src: 'sql' }} />
          </Box>
        </Box>
        <Box
          sx={{
            width: '100%',
            height: '20%',
            display: { xs: 'none', lg: 'flex' },
            flexDirection: { xs: 'column', lg: 'row' },
            justifyContent: 'space-evenly',
          }}
        >
          <SkillCard props={{ names: 'Python', src: 'python' }} />
          <SkillCard props={{ names: 'TensorFlow', src: 'tensorFlow' }} />
          <SkillCard props={{ names: 'Redux', src: 'Redux' }} />
        </Box>
        <Box
          sx={{
            width: '100%',
            height: '20%',
            display: { xs: 'none', lg: 'flex' },
            flexDirection: { xs: 'column', lg: 'row' },
            justifyContent: 'space-evenly',
          }}
        >
          <SkillCard props={{ names: 'C++', src: 'c++' }} />
          <SkillCard props={{ names: 'C', src: 'c' }} />
        </Box>

        <Box
          sx={{
            width: '100%',
            height: { xs: '50%', lg: '20%' },
            display: 'flex',
            alignItems: 'center',
            flexDirection: { xs: 'row', lg: 'row' },
            justifyContent: 'space-evenly',
          }}
        >
          <Box
            sx={{
              width: '50%',
              height: { xs: '100%', lg: '20%' },
              display: { xs: 'flex', lg: 'none' },
              alignItems: 'center',
              flexDirection: { xs: 'column', lg: 'row' },
              justifyContent: 'space-evenly',
            }}
          >
            <SkillCard props={{ names: 'Python', src: 'python' }} />
            <SkillCard props={{ names: 'TensorFlow', src: 'tensorFlow' }} />
          </Box>

          <Box
            sx={{
              width: '50%',
              display: { xs: 'flex', lg: 'none' },
              height: { xs: '100%', lg: '20%' },
              alignItems: 'center',
              flexDirection: { xs: 'column', lg: 'row' },
              justifyContent: 'space-evenly',
            }}
          >
            <SkillCard props={{ names: 'Redux', src: 'Redux' }} />
            <SkillCard props={{ names: 'C++', src: 'c++' }} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Skills
