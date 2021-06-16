import "./banner.css";

var str = "Where words fail, Music speaks.";

const Banner = () => {
  return (
    <div className="banner">
      <h1>
        {str.split(" ").map((i,index) => {
          return (
            <span key={index}>
              {i}
              <br />
            </span>
          );
        })}
      </h1>
    </div>
  );
};

export default Banner;
