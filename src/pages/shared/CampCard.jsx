import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";

import { Link } from "react-router-dom";
import React from "react";

const CampCard = ({camp}) => {

    const {_id, camp_name, image, camp_fees, date_time, location, healthcare_professional_name, participant_count, description}=camp

  return (
    <div>
      <div className="h-full">
        <Card className="flex flex-col h-full shadow-md" sx={{ maxWidth: 345 }}>
            <div className="flex-grow">
            <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {camp_name}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {description}
              </Typography>
              <Typography>{participant_count}</Typography>
            </CardContent>
          </CardActionArea>
          </div>
          <CardActions className="">
                <Link to={`/camp-details/${_id}`}>          <Button variant="contained" color="success">
  Details
</Button></Link>
          </CardActions>
           
        </Card>

      </div>
    </div>
  );
};

export default CampCard;
