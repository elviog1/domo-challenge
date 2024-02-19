import CardHero from "./CardHero";
import ServiceComponent from "./ServiceComponent";

export default function Hero() {
  return (
    <div>
      <div className="hero d-flex align-items-center ">
        <div className="container ">
          <div className="d-flex flex-column gap-4 ">
            <div className="d-flex gap-2">
              <span className="fs-2 border a border-3 border-white fw-bold text-white rounded-5 text-center ">
                A
              </span>
              <span className="fs-2 text-blue1 fw-semibold">
                Main Hero Content
              </span>
            </div>
            <div className="line"></div>
            <p className="w-75 fs-4 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
              tempora laborum quibusdam natus modi consequuntur provident quo
              aut dicta doloribus error, quisquam cumque excepturi aliquam
              voluptate, ipsum nesciunt tempore! Aperiam.
            </p>
            <div className="dropdown">
              <button
                className="btn bg-dropdown dropdown-toggle fw-semibold text-white"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Select content
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Content 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Content 2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Content 3
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="d-flex justify-content-center pt-5">
            <button className="fs-1 btn-arrow border-0 fw-bold">⌄</button>
          </div>
        </div>
      </div>
      <div className="d-flex flex-wrap div-card-hero">
        <CardHero numberCard={1} bgColor={"bg-blue1"} />
        <CardHero numberCard={2} bgColor={"bg-blue2"} />
        <CardHero numberCard={3} bgColor={"bg-blue3"} />
        <CardHero numberCard={4} bgColor={"bg-blue4"} />
      </div>
      <div>
        <ServiceComponent
          letter={"B"}
          imgUrl={
            "https://e1.pxfuel.com/desktop-wallpaper/499/890/desktop-wallpaper-beautiful-greenery-of-real-nature-scene-beautiful-nature-scenery.jpg"
          }
        />
        <ServiceComponent
          letter={"C"}
          imgUrl={"https://i.ytimg.com/vi/lk7XNn-1-E4/mqdefault.jpg"}
        />
        <ServiceComponent
          letter={"D"}
          imgUrl={"https://i.blogs.es/d9e371/1-real/450_1000.jpeg"}
        />
      </div>
    </div>
  );
}
