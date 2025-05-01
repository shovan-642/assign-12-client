import { Link } from "react-router-dom";
import usePopularCamps from "../hooks/usePopularCamps";
import CampCard from "../pages/shared/CampCard";
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

const PopularMedicalCamps = () => {
  const [popularCamps] = usePopularCamps();
  const accenCamps = popularCamps
    .slice()
    .sort((a, b) => b.participant_count - a.participant_count);

  return (
    <div>
      <div className="grid grid-cols-3 gap-5">
        {accenCamps.map((camp, idx) =><CampCard key={idx} camp={camp}></CampCard>)}
      </div>
      <div>
          <Link to={"/available_camps"}>
            {" "}
            <Button
              className="uppercase"
              variant="contained"
              endIcon={<SendIcon />}
            >
              See all campaign
            </Button>
          </Link>
        </div>



    </div>
  );
};

export default PopularMedicalCamps;
