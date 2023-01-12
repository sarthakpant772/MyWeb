import { Box, Typography } from '@mui/material'
import React from 'react'
import SkillCard from './SkillCard'

const Skills = () => {
  return (
    <Box
      sx={{ width: '100%', height: '80vh', backgroundColor: 'primary.main' }}
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
          height: '80%',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '20%',
            display: 'flex',
            flexDirection: { sm: 'row' },
            justifyContent: 'space-evenly',
          }}
        >
          <SkillCard props={{ names: 'React.Js', src: 'react' }} />
          <SkillCard props={{ names: 'Node.Js', src: 'node' }} />
          <SkillCard props={{ names: 'MongoDb', src: 'mongo' }} />
          <SkillCard props={{ names: 'SQL', src: 'sql' }} />
        </Box>
        <Box
          sx={{
            width: '100%',
            height: '20%',
            display: 'flex',
            flexDirection: { sm: 'row' },
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
            display: 'flex',
            flexDirection: { sm: 'row' },
            justifyContent: 'space-evenly',
          }}
        >
          <SkillCard props={{ names: 'C++', src: 'c++' }} />
          <SkillCard props={{ names: 'C', src: 'c' }} />
        </Box>
      </Box>
    </Box>
  )
}

export default Skills
