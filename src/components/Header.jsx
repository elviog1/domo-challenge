import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-blue1 header-section">
      <div className="container py-2">
        <div className="d-flex justify-content-end  gap-4">
          <a href="#home" className="btn bg-blue2 text-white fw-bold">
            Home
          </a>
          <a href="#service" className="btn bg-blue2 text-white fw-bold">
            Services
          </a>
          <a href="#contact" className="btn bg-blue2 text-white fw-bold">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
