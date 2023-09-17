import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  console.log(getTodayString());

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Enter a title: </label>
      <input
        id="title"
        type="text"
        value={title}
        placeholder="Title"
        onChange={({ target }) => setTitle(target.value)}
        required
        autoComplete="off"
      />
      <label htmlFor="date">Enter a title: </label>
      <input
        id="date"
        type="date"
        value={date}
        placeholder="Date"
        onChange={({ target }) => setDate(target.value)}
        min={getTodayString()}
        required
        autoComplete="off"
      />

      <label htmlFor="time">Enter a title: </label>
      <input
        id="time"
        type="time"
        value={time}
        placeholder="Time"
        onChange={({ target }) => setTime(target.value)}
        required
        autoComplete="off"
      />

      <ContactPicker
        contacts={contacts}
        onChange={({ target }) => setContact(target.value)}
      />

      <input type="submit" value="ADD APPOINTMENT" />
    </form>
  );
};
