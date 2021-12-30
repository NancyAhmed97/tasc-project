import React
, { useState }// ,{useState} 
from "react";
import DatePicker from "sassy-datepicker";
import "./ScheduleCalender.css";
function ScheduleCalender() {
  const [day, setDay] = useState("")
  const [year, setYear] = useState("")
  const [mon, setMon] = useState("")
  const onChange = (date) => {
    console.log(date.toString());
    setDay(date.toString().slice(8,10))
    setYear(date.toString().slice(11,16))
    setMon(date.toString().slice(4,7))
  };
  const bookingDate=day+mon+year
  console.log(bookingDate);
  localStorage.setItem("date",bookingDate)

  return (
    <div className="ScheduleCalender">
      <DatePicker onChange={onChange} className="mb-4" />
      <p className="mb-5 pb-5">Time displayed in<span> Istanbul/Turkey </span> timezone</p>
    </div>
  );
}

export default ScheduleCalender;
