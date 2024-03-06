export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <span className="fs-3 fw-semibold ">DOMO</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto d-flex gap-5">
            <li className="nav-item">
              <a
                className="fs-5 list-group-item fw-semibold banner-link"
                aria-current="page"
                href="#"
              >
                Service 1
              </a>
            </li>
            <li className="nav-item">
              <a
                className="fs-5 list-group-item fw-semibold banner-link"
                aria-current="page"
                href="#"
              >
                Service 2
              </a>
            </li>
            <li className="nav-item">
              <a
                className="fs-5 list-group-item fw-semibold banner-link"
                aria-current="page"
                href="#"
              >
                Service 3
              </a>
            </li>
            <li className="nav-item">
              <a
                className="fs-5 list-group-item fw-semibold banner-link"
                aria-current="page"
                href="#"
              >
                Service 4
              </a>
            </li>
            <li className="nav-item">
              <a
                className="fs-5 list-group-item fw-semibold banner-link"
                aria-current="page"
                href="#"
              >
                Service 5
              </a>
            </li>
            <li className="nav-item">
              <a
                className="fs-5 list-group-item fw-semibold banner-link"
                aria-current="page"
                href="#"
              >
                Service 6
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
