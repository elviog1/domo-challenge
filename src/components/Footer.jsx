export default function Footer() {
  return (
    <div className="bg-blue1 d-flex justify-content-center py-4">
      <div className="container">
        <div className="d-flex flex-column gap-4">
          <span className="px-3 fs-3 fw-bold text-white">
            Contact + Footer Links
          </span>
          <div className="d-flex justify-content-between ">
            <div className="d-flex gap-4">
              <div className="container d-flex gap-2">
                <form className="w-50 gap-2 d-flex flex-column ">
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        id="nombre"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <textarea
                        className="form-control"
                        id="mensaje"
                        rows="3"
                        placeholder="Mensaje"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-12">
                      <button type="submit" className="btn bg-blue3 w-100">
                        Enviar mensaje
                      </button>
                    </div>
                  </div>
                </form>
                <div className="d-flex flex-column gap-3">
                  <a href="" target="__blank">
                    Gmail
                  </a>
                  <a
                    href="https://www.linkedin.com/in/elviogaleano-fullstack-developer/"
                    target="__blank"
                  >
                    {" "}
                    Linkedin
                  </a>
                  <a href="https://galeanoelvio.vercel.app" target="__blank">
                    Portfolio
                  </a>
                  <a href="https://github.com/elviog1" target="__blank">
                    Github
                  </a>
                  <a href="" target="__blank">
                    Phone
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
