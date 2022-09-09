function getSeason(lat, month) {
  if (month < 2 && month > 8) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
}

function SeasonDisplAY(props) {
  const season = getSeason(props.lat, new Date().getMonth());
  const text = season === "winter" ? "Brrr,its chilly" : " Lets hit the beach ";
  const icon = season === "winter" ? "snowflake" : "sun";
  return (
    <>
      <i className={`fa-solid fa-${icon}`}></i>
      <h1>{text}</h1>
      <i className={`fa-solid fa-${icon}`}></i>
    </>
  );
}
export default SeasonDisplAY;
