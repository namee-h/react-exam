import React from 'react'
import { Box, CircularProgress, Grid } from '@mui/material'
import BookCard from '../components/BookCard'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import SearchBar from '../components/SearchBar'

const MainPage = () => {
  const handleSearch=(query)=>{
    console.log('검색하쟈',query)
  }
  const getBooks = () => {
    return axios.get("https://openlibrary.org/subjects/love.json?limit=12")
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ["subjects", "love"],
    queryFn: () => getBooks(),
    retry: 1,
  })

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
        <CircularProgress />
      </Box>
    )
  }
  if (error) return <div>에러 발생!</div>

  return (
    <>
      <SearchBar onSearch={handleSearch}/>
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: 2, py: 4 }}>
      <Grid container spacing={2} justifyContent="center">
        {data.data.works.map((book) => (
          <Grid item key={book.key}>
            <BookCard
              title={book.title}
              author={book.authors?.[0]?.name || '작자 미상'}
              image={
                book.cover_id
                  ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`
                  : 'https://via.placeholder.com/150x220?text=No+Image'
              }
            />
          </Grid>
        ))}
      </Grid>
    </Box>
    </>
  )
}

export default MainPage
