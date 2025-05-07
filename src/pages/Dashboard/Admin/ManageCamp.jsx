import React from "react";
import useCamps from "../../../hooks/useCamps";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FaEdit } from "@react-icons/all-files/fa/FaEdit";
import { MdDelete } from "@react-icons/all-files/md/MdDelete";
import { Button } from "@mui/material";

const ManageCamp = () => {
  const [camps] = useCamps();
    
  return (
    <div>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Camp Name</TableCell>
                <TableCell align="left">Date & Time</TableCell>
                <TableCell align="left">Location</TableCell>
                <TableCell align="left">Health Care Professional Name</TableCell>
                <TableCell align="left">Edit Camp</TableCell>
                <TableCell align="left">Delete Camp</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {camps.map((camp) => (
                <TableRow
                  key={camp._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">
                    {camp.camp_name}
                  </TableCell>
                  <TableCell align="left">
                    {camp.date_time}
                  </TableCell>
                  <TableCell align="left">{camp.location}</TableCell>
                  <TableCell align="left">{camp.healthcare_professional_name}</TableCell>
                  <TableCell align="left"><button className=""><FaEdit className=" text-green-600 text-lg hover:text-green-900 hover:cursor-grab"></FaEdit></button></TableCell>
                  <TableCell align="left"><button className=""><MdDelete className="text-red-600 text-lg hover:cursor-grab hover:text-red-900"></MdDelete></button></TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default ManageCamp;
