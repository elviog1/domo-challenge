import linkedin from "../assets/linkedin.svg";
import gmail from "../assets/gmail.svg";
import github from "../assets/github.svg";
import portfolio from "../assets/portfolio.svg";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import arrow from "../assets/arrow.svg";
import { useState } from "react";
export default function Footer() {
  const [message,setMessage] = useState("")
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [messageForm,setMessageForm] = useState("")
  const handleSubmit = (e)=>{
    e.preventDefault()
      setMessage("Mensaje enviado exitosamente.")
  }
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  return (
    <div id="contact" className="bg-blue1 d-flex flex-column justify-content-center pt-4">
      <div className="container">
        <div className="d-flex flex-column gap-4">
          <div className="d-flex justify-content-between flex-wrap">
            <div className="d-flex gap-4">
              <div className="container d-flex gap-4 flex-wrap footer-links">
                <form onSubmit={handleSubmit} className=" gap-2 d-flex flex-column">
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control my-2"
                        id="nombre"
                        placeholder="Name"
                        required
                        onChange={(e)=> setName(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control my-2"
                        id="email"
                        placeholder="Email"
                        required
                        onChange={(e)=> setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <textarea
                        className="form-control my-2"
                        id="mensaje"
                        rows="3"
                        placeholder="Mensaje"
                        required
                        onChange={(e)=> setMessageForm(e.target.value)}
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
                  <p className="text-center text-success-emphasis fw-bold">{message}</p>
                </form>
                <div className="d-flex flex-column gap-3 justify-content-around links-footer">
                  <a
                    href="mailto:elvio.galeano827@gmail.com"
                    target="__blank"
                    className="d-flex align-items-center gap-2 text-decoration-none fw-bold fs-5 text-link"
                  >
                    <img src={gmail} className="icon-footer" />
                    Gmail
                  </a>
                  <a
                    href="https://www.linkedin.com/in/elviogaleano-fullstack-developer/"
                    target="__blank"
                    className="d-flex align-items-center gap-2 text-decoration-none fw-bold fs-5 text-link"
                  >
                    <img src={linkedin} className="icon-footer" />
                    Linkedin
                  </a>
                  <a
                    href="https://galeanoelvio.vercel.app"
                    target="__blank"
                    className="d-flex align-items-center gap-2 text-decoration-none fw-bold fs-5 text-link"
                  >
                    <img src={portfolio} className="icon-footer" />
                    Portfolio
                  </a>
                  <a
                    href="https://github.com/elviog1"
                    target="__blank"
                    className="d-flex align-items-center gap-2 text-decoration-none fw-bold fs-5 text-link"
                  >
                    <img src={github} className="icon-footer" />
                    Github
                  </a>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column justify-content-end social-footer py-4">
              <div className="d-flex gap-3 justify-content-center">
                <img src={instagram} className="icon-footer-social" />
                <img src={facebook} className="icon-footer-social" />
                <img src={twitter} className="icon-footer-social" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between bg-secondary">
        <div className="container d-flex align-items-center">
          <p className="m-0 reserved text-white">Todos los derechos reservados © 2024</p>
        </div>
        <img onClick={scrollToTop} src={arrow} className="icon-footer bg-blue3 arrow" />
      </div>
    </div>
  );
}
