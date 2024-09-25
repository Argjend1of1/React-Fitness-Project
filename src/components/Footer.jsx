import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import logo from '../assets/images/Logo-1.png';

const Footer = () => {
  return (
    <Box mt="100px" bgcolor='#fff3f4' justifyContent='center' width='100%'>
      <Stack gap="40px"  px="40px" pt="24px" pb='20px' alignItems='center'>
        <img src={logo} alt='logo' width='200px' height='40px' />
        <Typography sx={{ opacity: '0.8', color: 'black' }} pb='10px'>
          All Copyrights Reserved &copy;
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer