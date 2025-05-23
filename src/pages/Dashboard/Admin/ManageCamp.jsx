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
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageCamp = () => {
  const [camps, loading, refetch] = useCamps();
  const axiosSecure = useAxiosSecure();

  const handleDeleteCamp = (camp) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async(result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/delete-camp/${camp._id}`)
        console.log(res.data)
        if(res.data.deletedCount > 0){
          refetch()
          
          Swal.fire({
            title: `${camp.camp_name} deleted successfully`,
            text: "Your file has been deleted.",
            icon: "success",
          });
          
        }

      }
    });
  };

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
                <TableCell align="left">
                  Health Care Professional Name
                </TableCell>
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
                  <TableCell align="left">{camp.camp_name}</TableCell>
                  <TableCell align="left">{camp.date_time}</TableCell>
                  <TableCell align="left">{camp.location}</TableCell>
                  <TableCell align="left">
                    {camp.healthcare_professional_name}
                  </TableCell>
                  <TableCell align="left">
                    <Link to={`/dashboard/update-camp/${camp._id}`}>
                      <button className="">
                        <FaEdit className=" text-green-600 text-lg hover:text-green-900 hover:cursor-grab"></FaEdit>
                      </button>
                    </Link>
                  </TableCell>
                  <TableCell align="left">
                  <button onClick={()=>handleDeleteCamp(camp)} className="">
                        <MdDelete className="text-red-600 text-lg hover:cursor-grab hover:text-red-900"></MdDelete>
                      </button>
                  </TableCell>
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
