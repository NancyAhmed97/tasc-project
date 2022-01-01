import React
// ,{useState} 
from "react";
import { useSelector } from "react-redux";
import DatePicker from "sassy-datepicker";
import "./ScheduleCalender.css";
function ScheduleCalender({bookingDateState}) {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  // const [day, setDay] = useState("")
  // const [year, setYear] = useState("")
  // const [mon, setMon] = useState("")
  const onChange = (date) => {
    // setDay(date.toString().slice(8,10))
    // setYear(date.toString().slice(11,16))
    // setMon(date.toString().slice(4,7))
    // const bookingDate=day+mon+year
    bookingDateState(date.toString())
  };

  return (
    <div className="ScheduleCalender">
      <DatePicker onChange={onChange} className={currentLocal.language==="English"?"mb-4 ":"mb-4 arDatePicker"} />
      <p className="mb-5 pb-5">{currentLocal.meeting.time}<span> {currentLocal.meeting.timeCity}</span> {currentLocal.meeting.timeZone}</p>
    </div>
  );
}

export default ScheduleCalender;
