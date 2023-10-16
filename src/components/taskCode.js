import React, { useState } from 'react';

export default function Code() {
  const [age, setAge] = useState(0);
  const [inputDate, setInputDate] = useState('');

  const handleAgeChange = () => {
    const currentDate = new Date();
    const inputDateObj = new Date(inputDate);
    
    const yearsDiff = currentDate.getFullYear() - inputDateObj.getFullYear();
    
    // Checking if B'day hasn't appeared this year
    if (
      currentDate.getMonth() < inputDateObj.getMonth() ||
      (currentDate.getMonth() === inputDateObj.getMonth() &&
        currentDate.getDate() < inputDateObj.getDate())
    ) {
      setAge(yearsDiff - 1);
    } else {
      setAge(yearsDiff);
    }
  };

  const handleDate = (e) => {
    setInputDate(e.target.value);
  };

  return (
    <div className="w-25">
      <h1 className="fw-bold mt-3">Age Calculator</h1>
      <label className="fw-bold mt-4">Enter your date of birth</label>
      <input className="form-control mt-3" type="date" onInput={handleDate} />
      <button className="btn btn-primary mt-3" onClick={handleAgeChange}>
        Calculate Age
      </button>
      {age > 0 && (
        <p className="fw-bold mt-4">You are {age} years old</p>
      )}
    </div>
  );
}
