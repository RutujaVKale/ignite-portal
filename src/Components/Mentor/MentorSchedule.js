import Dateselect from "../DateSelect";
import Timeselect from "../Timeselect";
import { Button } from "@material-ui/core";
import styled from "styled-components";
import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import SlotAddedByMentor from "./SlotAddedByMentor";
import Bookedslots from "./Bookedslots";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import addDays from "date-fns/addDays";
import { TimePicker } from "@progress/kendo-react-dateinputs";
// import TimePicker from "react-time-picker";

const AboutStyles = styled.div`
  text-align: center;
  .maincont {
    margin-top: 3rem;
    margin-bottom: 5rem;
  }
  .container {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    margin-left: 30rem;
    margin-right: 30rem;
    margin-top: 3rem;
    margin-bottom: 12 rem;
  }

  .buttoncol {
    align-self: flex-end;
  }
  .datepicker {
    margin-top: 2rem;
  }
  .shapeme {
    height: 5rem;
  }
`;

const MentorSchedule = () => {
  const [selectDate, setselectDate] = useState(null);
  const [selectStartTime, setselectStartTime] = useState("");
  const [selectEndTime, setselectEndTime] = useState("");
  const [table, settable] = useState(true);
  const [displayname1, setdisplayname1] = useState("Free Slots");
  const [displayname2, setdisplayname2] = useState("Booked Slots");

  return (
    <div>
      <AboutStyles>
        <div className="maincont">
          <h2>Feed in the details to mark your free slot in the schedule</h2>
          <div className="container">
            <div className="datecol">
              <h3>Date</h3>
              {/* <Dateselect /> */}
              <form>
                {/* <TextField
                  id="date"
                  type="date"
                  value={selectDate}
                  onChange={(date) => setselectDate(date.target.value)}
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                /> */}
                <div className="datepicker">
                  <DatePicker
                    name="startDate"
                    selected={selectDate}
                    onChange={(date) => setselectDate(date)}
                    dateFormat="dd/MM/yyyy"
                    minDate={new Date()}
                    maxDate={addDays(new Date(), 7)}
                    isClearable={true}
                    placeholderText="dd/mm/yyyy"
                  />
                </div>
                {console.log(selectDate)}
              </form>
            </div>
            <div className="timecol">
              <h3>Start time</h3>
              {/* <Timeselect /> */}
              <form className="shapeme">
                <TextField
                  id="time"
                  type="time"
                  variant="outlined"
                  value={selectStartTime}
                  onChange={(time) => setselectStartTime(time.target.value)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    step: 300, // 5 min
                  }}
                />
                {/* <TimePicker
                  onChange={(time) => setselectStartTime(time.target.value)}
                  value={new Date()}
                /> */}

                {console.log(selectStartTime)}
              </form>
            </div>
            <div className="timecol">
              <h3>End time</h3>
              {/* <Timeselect /> */}
              <form>
                <TextField
                  id="time"
                  type="time"
                  variant="outlined"
                  value={selectEndTime}
                  onChange={(time) => setselectEndTime(time.target.value)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    step: 300, // 5 min
                  }}
                />
                {console.log(selectEndTime)}
              </form>
            </div>
            <div className="buttoncol">
              <Button
                variant="contained"
                color="primary"
                onClick={() =>
                  Saveme(selectDate, selectStartTime, selectEndTime)
                }
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </AboutStyles>
      <div>
        {/* <CustomPaginationActionsTable /> */}
        <div style={{ display: "flex" }}>
          {/* <div style={{ marginLeft: "150px" }}>
            <h2>Free Slots</h2>
          </div> */}
          <button
            style={{ marginLeft: "100px", height: "50px" }}
            onClick={() => {
              settable(!table);
            }}
          >
            table 2
          </button>
        </div>
        <div>{table ? <SlotAddedByMentor /> : <Bookedslots />}</div>
      </div>
    </div>
  );
};

function Saveme(selectDate, selectStartTime, selectEndTime) {
  axios
    .post("http://localhost:8080/schedule/mentor/addfreeslot", {
      mentor_id: localStorage.getItem("userid"),
      date: selectDate,
      start_time: selectStartTime + ":00",
      end_time: selectEndTime + ":00",
    })
    .then(
      (response) => {
        console.log(response.data);
        alert(response.data);
      },
      (error) => {
        console.log(error);
        alert("Some error occured. Try ");
      }
    );
}

export default MentorSchedule;
