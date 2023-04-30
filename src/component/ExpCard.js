import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import pic from '../Images/Project.webp'
import CodeIcon from '@mui/icons-material/Code'
import { ArrowRight } from '@mui/icons-material'
import { useSelector } from 'react-redux'
import project from '../json/exp.json'
const ExpCard = () => {
  let value = useSelector((state) => state.card.expValue)
  value = (value + 3) % 3
  console.log(value)
  // let value = 3
  return (
    <Box
      sx={{
        marginLeft: '1em',
        marginRight: '1em',
        position: 'relative',
        height: { xs: '90%', lg: '80%' },
        width: '70em',
        backgroundColor: 'primary.dark',
        boxShadow:
          'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
        display: 'flex',
        borderRadius: '10px',
      }}
    >
      <Box
        sx={{
          width: { xs: '100%', sm: '60%' },
          height: '100%',
          display: 'flex',
          //   backgroundColor: '#FFF',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            height: { xs: '100%', lg: '80%' },
            width: { xs: '100%', sm: '90%', lg: '80%' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', sm: 'start' },
            justifyContent: { xs: 'center', sm: 'flex-start' },
          }}
        >
          <Box
            sx={{
              minHeight: '3em',
              display: 'flex',
              alignItems: { xs: 'center', sm: 'start' },
              justifyContent: { xs: 'center', sm: 'flex-start' },
            }}
          >
            <Typography
              variant="h4"
              color="secondary.dark"
              sx={{ textTransform: 'uppercase' }}
            >
              {project[value].name}
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
              {project[value].description1}
              <Typography variant="subtitle1" mt="1rem">
                {project[value].description2}
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
                <Button
                  sx={{ color: 'secondary.dark' }}
                  href={project[value].codeLink}
                >
                  <CodeIcon />
                </Button>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Button
                  sx={{ color: 'secondary.dark' }}
                  href={project[value].demoLink}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="subtitle2" color="secondary.dark">
                      Demo
                    </Typography>
                    <ArrowRight color="secondary.dark" />
                  </Box>
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: '40%',
          height: '100%',
          display: { xs: 'none', sm: 'flex' },
        }}
      >
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
            src={require(`../Images/${project[value].imageLink}`)}
            sx={{
              width: '80%',
              height: '85%',
              border: '10px solid',
              borderColor: 'primary.light',
              borderRadius: '15px',
              boxShadow:
                'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
            }}
          ></Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ExpCard
