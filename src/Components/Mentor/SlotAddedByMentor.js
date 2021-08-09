import React, { useEffect } from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import axios from "axios";
import TableFooter from "@material-ui/core/TableFooter";
import IconButton from "@material-ui/core/IconButton";
import Delete from "@material-ui/icons/DeleteSharp";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
  },
  tableContainer: {
    width: "80%",
    marginLeft: "150px",
  },
  container: {
    maxHeight: 440,
  },
  tableHeaderCell: {
    fontWeight: "bold",
    // backgroundColor: theme.palette.primary.dark,
    // color: theme.palette.getContrastText(theme.palette.primary.dark),
    backgroundColor: "rgb(204,0,0)",
  },
}));

export default function SlotAddedByMentor() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [ans, setAns] = useState([]);

  // const ans = [];
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function DeleteSchedule(scheduleid) {
    axios
      .delete(`http://localhost:8080/schedule/mentor/deleteslot/${scheduleid}`)
      .then((response) => {
        alert(response.data);
      });
    window.location.reload();
    GetFreeSlotsAddedByMentor();
  }

  function GetFreeSlotsAddedByMentor() {
    axios
      .get(
        `http://localhost:8080/schedule/mentor/getslots/${localStorage.getItem(
          "userid"
        )}`
      )
      .then((response) => {
        console.log(response.data);
        setAns(response.data);
        // const { date, start, end } = response.data;
        const item = {
          date: response.data.date,
          start: response.data.start_time,
          end: response.data.end_time,
        };
      })
      .catch(function (error) {
        if (error.response.request.status == 404) {
          alert(error.response.request.message);
        }
      });
    // window.location.reload();
  }

  useEffect(() => {
    GetFreeSlotsAddedByMentor();
  }, [ans]);

  const no = 1;

  return (
    <div>
      <div>
        <h3>Free Slots</h3>
      </div>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              {/* <TableCell className={classes.tableHeaderCell}>Sr.No</TableCell> */}
              <TableCell className={classes.tableHeaderCell}>Sr. No</TableCell>
              <TableCell className={classes.tableHeaderCell}>Date</TableCell>
              <TableCell className={classes.tableHeaderCell}>
                Start Time
              </TableCell>
              <TableCell className={classes.tableHeaderCell}>
                End Time
              </TableCell>
              <TableCell className={classes.tableHeaderCell}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ans
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.date}>
                  <TableCell>{no}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.start_time}</TableCell>
                  <TableCell>{row.end_time}</TableCell>
                  <TableCell>
                    {/* <button onClick={() => DeleteSchedule(row.schedule_id)}>
                    Delete
                  </button> */}
                    {/* <Icon
                    onClick={() => DeleteSchedule(row.schedule_id)}
                    type="delete"
                    style={{ fontSize: "20px", color: "#CC160B" }}
                    theme="outlined"
                  /> */}
                    <IconButton onClick={() => DeleteSchedule(row.schedule_id)}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
          <TableFooter>
            <TablePagination
              rowsPerPageOptions={[5, 10, 15]}
              component="div"
              count={ans.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
}
