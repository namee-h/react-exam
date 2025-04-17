import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Box, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
    const navigate = useNavigate()
  return (
    <AppBar position="relative" color="default">
        <Box sx={{padding:'10px 40px'}}>
            <Toolbar sx={{justifyContent: 'space-between', height:'80px', cursor:'pointer'}}>
                <Typography variant="h6" onClick={()=>navigate('/')}>
                코딩알려주는 누나 도서관
                </Typography>
                <Box>
                    <Button onClick={()=>{navigate('/')}} sx={{ mx: 1 }}>
                        메인
                    </Button>
                    <Button onClick={()=>{navigate('/my-books')}} sx={{ mx: 1 }}>
                        나의 책
                    </Button>
                    <Button onClick={()=>{navigate('/login')}} sx={{ mx: 1, color: '#d4af7f', fontWeight: 'bold' }}>
                        로그인
                    </Button>
                </Box>
            </Toolbar>
        </Box>
    </AppBar>
  )
}

export default Navbar
