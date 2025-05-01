import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import usePopularCamps from "../hooks/usePopularCamps";

const PopularMedicalCamps = () => {
  const [popularCamps] = usePopularCamps();
  const accenCamps = popularCamps
    .slice()
    .sort((a, b) => b.participant_count - a.participant_count);
  console.log(accenCamps);

  return (
    <div>
      <div className="grid grid-cols-3 gap-5">
        {accenCamps.map((camp, idx) => (
          <div key={idx}>
            <Card sx={{ maxWidth: 345 }}>
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
                  <Typography>
                    {camp.participant_count}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularMedicalCamps;
