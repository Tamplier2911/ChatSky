const transformDateToLocaleString = (
  date,
  dateStyle = "full",
  timeStyle = "medium",
  hours = false
) =>
  new Date(date).toLocaleString("en-us", {
    dateStyle,
    timeStyle,
    hour12: hours,
  });

export default transformDateToLocaleString;
