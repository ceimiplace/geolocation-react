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
    classNames: "text-red-600 text-3xl ",
    background: "bg-orange-300",
  },
  winter: {
    text: " Brr its chilly",
    iconName: "snowflake",
    classNames: "text-blue-600 text-3xl bg-blue-300",
    background: "bg-blue-300",
  },
};
function SeasonDisplAY(props) {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName, classNames, background } = seasons[season];
  return (
    <div
      className={`season-display ${season} ${background} h-full w-full flex justify-center items-center`}
    >
      <i
        className={`icon-left fa-solid fa-4x fa-${iconName} absolute top-10 left-10`}
      ></i>
      <h1 className={`${classNames}`}>{text}</h1>
      <i
        className={`icon-right fa-solid fa-4x fa-${iconName} absolute right-10 bottom-10`}
      ></i>
    </div>
  );
}
export default SeasonDisplAY;
