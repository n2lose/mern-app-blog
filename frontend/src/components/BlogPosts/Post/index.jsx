import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import dayjs from "dayjs";
import { useDispatch } from 'react-redux';

import * as actions from '../../../redux/actions'
import { useCallback } from 'react';
import { Menu, MenuItem } from '@mui/material';
import { useState } from 'react';

export default function Post({data}) {
  const dispatch = useDispatch()

  const { title, createdAt, content, _id, likesCount, author, authorAvatar, attachment } = data
  const subTitle = dayjs(createdAt).format("MMMM YYYY, dddd")

  const [anchorElement, setAnchorElement] = useState(null)

  const handleLikeButnClick= useCallback(() => {
    dispatch(actions.updatePost.updatePostRequest({...data, likesCount: data.likesCount + 1}))
  }, [dispatch, data.likesCount])

  const open = Boolean(anchorElement)
  const handleOnClose = () => {
    setAnchorElement(null)
  }

  const handleOnDelete = useCallback(()=> {
    dispatch(actions.deletePost.deletePostRequest(_id))
    setAnchorElement(null)
  }, [dispatch, data])

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar alt={author} src={authorAvatar} />
        }
        action={
          <div>
            <IconButton aria-label="settings" onClick={e => setAnchorElement(e.target)}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorElement}
              open={open}
              onClose={handleOnClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleOnClose}>Edit</MenuItem>
              <MenuItem onClick={handleOnDelete}>Delete</MenuItem>
              <MenuItem onClick={handleOnClose}>Sort by date</MenuItem>
            </Menu>
          </div>
        }
        title={title}
        subheader={subTitle}
      />
      <CardMedia
        component="img"
        height="194"
        image={attachment}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleLikeButnClick}>
          <FavoriteIcon />
          <Typography component="span" color="text.secondary">{likesCount} Likes</Typography>
        </IconButton>    
      </CardActions>      
    </Card>
  );
}