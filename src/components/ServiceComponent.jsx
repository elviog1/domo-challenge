export default function ServiceComponent({ letter, imgUrl }) {
  return (
    <div className="d-flex justify-content-center align-items-center py-5">
      <div className="container d-flex gap-2 flex-wrap">
        <div className="d-flex flex-column gap-4 service-description">
          <div className="d-flex gap-2 ">
            <span className="fs-2 border a border-3 border-black fw-bold text-black rounded-5 text-center ">
              {letter}
            </span>
            <span className="fs-2 text-blue1 fw-semibold">
              Main Service Offering
            </span>
          </div>
          <div className="line2"></div>
          <p className="w-100 fs-4 text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
            tempora laborum quibusdam natus modi consequuntur provident quo aut
            dicta doloribus error, quisquam cumque excepturi aliquam voluptate,
            ipsum nesciunt tempore! Aperiam.
          </p>
          <div className="dropdown">
            <button
              className="btn bg-dropdown dropdown-toggle fw-semibold text-white"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Select Service
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Service 1
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Service 2
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Service 3
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-end div-img-service">
          <img className="img-service" src={imgUrl} />
        </div>
      </div>
    </div>
  );
}
