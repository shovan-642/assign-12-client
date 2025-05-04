import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { TextField } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const CampDetails = () => {
  const data = useLoaderData();
  const { user } = useContext(AuthContext);

  const {
    _id,
    camp_name,
    image,
    camp_fees,
    date_time,
    location,
    healthcare_professional_name,
    participant_count,
    description,
  } = data;

//   modal function
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };


//   select function
  const [gender, setGender] = React.useState('');

  const handleChange = (event) => {
    setGender(event.target.value);
  };


  return (
    <div>
      {/* show camp details */}
      <h1>{_id}</h1>
      <h1>{camp_name}</h1>
      <h1>{camp_fees}</h1>
      <h1>{participant_count}</h1>
      <img className="w-16 h-16" src={image} alt="" />
      <h1>{date_time}</h1>
      {/* join camp button */}
      <div>
        <Button onClick={handleOpen}>Join Camp</Button>
      </div>

      {/* join camp modal */}
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {/* registration information */}
            <form>
              <div className="grid grid-cols-2 gap-5">
                <TextField
                  id="outlined-read-only-input"
                  label="Camp Name"
                  defaultValue={camp_name}
                  slotProps={{
                    input: {
                      readOnly: true,
                    },
                  }}
                />
                <TextField
                  id="outlined-read-only-input"
                  label="Camp Fees"
                  defaultValue={camp_fees}
                  slotProps={{
                    input: {
                      readOnly: true,
                    },
                  }}
                />
                <TextField
                  id="outlined-read-only-input"
                  label="Location"
                  defaultValue={location}
                  slotProps={{
                    input: {
                      readOnly: true,
                    },
                  }}
                />
                <TextField
                  id="outlined-read-only-input"
                  label="Healthcare Professional Name"
                  defaultValue={healthcare_professional_name}
                  slotProps={{
                    input: {
                      readOnly: true,
                    },
                  }}
                />
                <TextField
                  id="outlined-read-only-input"
                  label="Participant Name"
                  defaultValue={user.displayName}
                  slotProps={{
                    input: {
                      readOnly: true,
                    },
                  }}
                />
                <TextField
                  id="outlined-read-only-input"
                  label="Participant Email"
                  defaultValue={user.email}
                  slotProps={{
                    input: {
                      readOnly: true,
                    },
                  }}
                />
                        <TextField
          id="outlined-number"
          label="Age"
          type="number"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />
                        <TextField
          id="outlined-number"
          label="Phone Number"
          type="number"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />
        <div>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={gender}
          onChange={handleChange}
          label="Gender"
          required
        >
          <MenuItem value="" disabled>
            <em>Gender</em>
          </MenuItem>
          <MenuItem value={"male"}>Male</MenuItem>
          <MenuItem value={"female"}>Female</MenuItem>
        </Select>
      </FormControl>
        </div>
        <TextField
          id="outlined-number"
          label="Emergency Contact"
          type="number"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />
              </div>
            </form>
            <div>
              <Button onClick={handleClose}>Close</Button>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default CampDetails;
