import law0 from "../Assets/Law0";
import law1 from "../Assets/Law1";
import law2 from "../Assets/Law2";
import law3 from "../Assets/Law3";

const Slide = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={law0} className="d-block w-100" />
        </div>
        <div className="carousel-item">
          <img src={law1} className="d-block w-100" />
        </div>
        <div className="carousel-item">
          <img src={law2} className="d-block w-100" />
        </div>
        <div className="carousel-item">
          <img src={law3} className="d-block w-100" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slide;
