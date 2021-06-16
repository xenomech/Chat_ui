import "../styles/Styles.css";

var str = "Where words fail, Music speaks.";

const Banner = () => {
  return (
    <div className="banner">
      <h1>
        {str.split(" ").map((i) => {
          return (
            <>
              {i}
              <br />
            </>
          );
        })}
      </h1>
    </div>
  );
};

export default Banner;
