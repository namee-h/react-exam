import { Box, Typography, TextField, Button, Stack } from '@mui/material'
import { useState } from 'react'

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('')

  const handleSearch = () => {
    if (!query.trim()) return
    onSearch(query)
  }

  return (
    <Box
      sx={{
        backgroundColor: '#13332c',
        color: '#d4af7f',
        padding:"40px",
        borderRadius: 2,
        mb: 4,
        textAlign: 'center',
        display: 'flex',
        justifyContent:'space-between'
      }}
    >
      <Typography variant="h5" fontWeight="bold" mb={2}>
        코딩알려주는 누나 도서관
      </Typography>

      <Stack direction="row" spacing={0} justifyContent="center">
        <TextField
          placeholder="책 제목이나 작가를 검색하세요"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          sx={{
            width: 400,
            backgroundColor: 'white',
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
          }}
        />
        <Button
          variant="contained"
          onClick={handleSearch}
          sx={{
            backgroundColor: '#e2bb7f',
            color: 'black',
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            px: 3,
            fontWeight: 'bold'
          }}
        >
          검색
        </Button>
      </Stack>
    </Box>
  )
}

export default SearchBar
