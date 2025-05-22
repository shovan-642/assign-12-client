import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useRegCamp from '../../../hooks/useRegCamp';
import { MdDelete } from '@react-icons/all-files/md/MdDelete';
import { Link } from 'react-router-dom';

const RegisteredCamps = () => {

    const [camps, loading, refetch]=useRegCamp()
    console.log(camps)
    return (
        <div>
            <div>
                    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Camp Name</TableCell>
            <TableCell align="right">Camp Fees</TableCell>
            <TableCell align="right">Participant Name</TableCell>
            <TableCell align="right">Payment Status</TableCell>
            <TableCell align="right">Confirmation Status</TableCell>
            <TableCell align="right">Cancel Button</TableCell>
            <TableCell align="right">Feedback Button</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {camps.map((camp, idx) => (
            <TableRow
              key={camp._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {camp.camp_name}
              </TableCell>
              <TableCell align="right">{camp.camp_fees}</TableCell>
              <TableCell align="right">{camp.participant_name}</TableCell>
              <TableCell align="right">{camp.payment_status === "unpaid" ? (<Link to={"/dashboard/payment"}><button className='btn btn-accent'>Pay</button></Link>) : ("Paid") }</TableCell>
              <TableCell align="right">{camp.confirmation_status}</TableCell>
              <TableCell align="right">
                                  <button className="">
                                        <MdDelete className="text-red-600 text-lg hover:cursor-grab hover:text-red-900">Cancel</MdDelete>
                                      </button>
              </TableCell>
              <TableCell align="right">
                                  <button className="">
                                        <MdDelete className="text-red-600 text-lg hover:cursor-grab hover:text-red-900">Feedback</MdDelete>
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

export default RegisteredCamps;