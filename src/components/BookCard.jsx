import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  CardActions
} from '@mui/material'
import { FavoriteBorder } from '@mui/icons-material'

const BookCard = ({ title, author, image }) => {
  return (
    <Card
      sx={{
        width: 180,
        height: 300,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: 2,
        borderRadius: 2
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{
          height: 180,
          width: '100%',
          objectFit: 'cover'
        }}
      />
      <CardContent sx={{ px: 2, py: 1 }}>
        <Typography variant="subtitle2" fontWeight="bold" noWrap>
          {title}
        </Typography>
        <Typography variant="caption" color="text.secondary" noWrap>
          {author}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end', px: 1, pb: 1 }}>
        <IconButton size="small">
          <FavoriteBorder fontSize="small" />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default BookCard
