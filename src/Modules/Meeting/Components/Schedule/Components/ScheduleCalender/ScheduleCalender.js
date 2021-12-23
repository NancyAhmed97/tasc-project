import React
// ,{useState} 
from "react";
import DatePicker from "sassy-datepicker";
import "./ScheduleCalender.css";
function ScheduleCalender() {
  // const [date, setDate] = useState("")
  const onChange = (date) => {
    console.log(date.toString());
    // setDate(date.toString())
  };
  return (
    <div className="ScheduleCalender">
      <DatePicker onChange={onChange} className="mb-4" />
      <p className="mb-5 pb-5">Time displayed in<span> Asia/Dubai</span> timezone</p>
    </div>
  );
}

export default ScheduleCalender;
