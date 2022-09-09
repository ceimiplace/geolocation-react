import "./SeasonDisplay.css";
function getSeason(lat, month) {
  if (month < 2 && month > 8) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
}
const seasons = {
  summer: {
    text: " Lets hit the beach ",
    iconName: "sun",
  },
  winter: {
    text: " Brr its chilly",
    iconName: "snowflake",
  },
};
function SeasonDisplAY(props) {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasons[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left fa-solid fa-4x fa-${iconName}`}></i>
      <h1>{text}</h1>
      <i className={`icon-right fa-solid fa-4x fa-${iconName}`}></i>
    </div>
  );
}
export default SeasonDisplAY;
