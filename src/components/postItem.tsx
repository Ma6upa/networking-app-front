import React, { FC } from "react"
import { Post } from "../types/post"
import {
  Box,
  Typography,
} from '@mui/material';

interface PostProps {
  item: Post
}

const PostItem: FC<PostProps> = ({
  item
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        border: '1px solid lightgray',
        padding: 2,
        width: '100%',
        marginTop: 2,
        marginBottom: 2
      }}
    >
      <Box>
        <img src={`/${item.postPathToImg}`} style={{
          width: 100,
          height: 100,
        }} />
        <Typography component="h2" variant="h6">
          {item.author.name}
        </Typography>
      </Box>
      <Box
        sx={{
          flex: 1,
          textAlign: 'center'
        }}
      >
        <Typography component="h1" variant="h5">
          {item.postText}
        </Typography>
      </Box>
    </Box>
  )
}

export default PostItem