import { Box, Typography } from '@mui/material'
import React from 'react'
import SkillCard from './SkillCard'

const Skills = () => {
  return (
    <Box
      id="skill"
      sx={{
        width: '100%',
        height: { sm: '100vh', xl: '80vh' },
        backgroundColor: 'primary.main',
        display: 'flex',
        flexDirection: 'column',
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
      <Box
        sx={{
          width: '100%',
          height: { sm: '80%' },
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: { xs: '50vh', sm: '20%' },
            display: 'flex',
            alignItems: 'center',
            flexDirection: { xs: 'row', sm: 'row' },
            justifyContent: 'space-evenly',
          }}
        >
          <Box
            sx={{
              width: '50%',
              height: { xs: '100%', sm: '20%' },
              display: 'flex',
              alignItems: 'center',
              flexDirection: { xs: 'column', sm: 'row' },
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
              height: { xs: '100%', sm: '20%' },
              alignItems: 'center',
              flexDirection: { xs: 'column', sm: 'row' },
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
            display: { xs: 'none', sm: 'flex' },
            flexDirection: { xs: 'column', sm: 'row' },
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
            display: { xs: 'none', sm: 'flex' },
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-evenly',
          }}
        >
          <SkillCard props={{ names: 'C++', src: 'c++' }} />
          <SkillCard props={{ names: 'C', src: 'c' }} />
        </Box>

        <Box
          sx={{
            width: '100%',
            height: { xs: '50vh', sm: '20%' },
            display: 'flex',
            alignItems: 'center',
            flexDirection: { xs: 'row', sm: 'row' },
            justifyContent: 'space-evenly',
          }}
        >
          <Box
            sx={{
              width: '50%',
              height: { xs: '100%', sm: '20%' },
              display: { xs: 'flex', sm: 'none' },
              alignItems: 'center',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-evenly',
            }}
          >
            <SkillCard props={{ names: 'Python', src: 'python' }} />
            <SkillCard props={{ names: 'TensorFlow', src: 'tensorFlow' }} />
          </Box>

          <Box
            sx={{
              width: '50%',
              display: { xs: 'flex', sm: 'none' },
              height: { xs: '100%', sm: '20%' },
              alignItems: 'center',
              flexDirection: { xs: 'column', sm: 'row' },
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
