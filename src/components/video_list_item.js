import React from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const VideoListItem = ({video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
  <Card   
  style={{maxWidth: 310,
margin: '10px'
}}
  onClick={() => onVideoSelect(video)}
  
  >
<CardActionArea>
  <CardMedia
    style={{height: '175px'}}

    image={imageUrl}
    title="Contemplative Reptile"
  />
  <CardContent>
    <Typography gutterBottom variant="h6" component="h6">
    {video.snippet.title}
    </Typography>

  </CardContent>
</CardActionArea>

</Card>
    )
}

export default VideoListItem;


