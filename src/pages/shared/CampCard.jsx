import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import SendIcon from '@mui/icons-material/Send';
import { Link } from "react-router-dom";
import React from "react";

const CampCard = ({camp}) => {

  return (
    <div>
      <div className="h-full">
        <Card className="flex flex-col h-full shadow-md" sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={camp.image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {camp.camp_name}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {camp.description}
              </Typography>
              <Typography>{camp.participant_count}</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>

          </CardActions>
        </Card>

      </div>
    </div>
  );
};

export default CampCard;
