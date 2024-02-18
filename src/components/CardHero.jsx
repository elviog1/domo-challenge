export default function CardHero({ numberCard, bgColor }) {
  return (
    <div className={`card-hero ${bgColor} text-white`}>
      <div className="d-flex flex-column p-4">
        <div className="w-75">
          <p className="fw-bold fs-5">INTERNAL LINK</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
            vitae pariatur ea id similique, sequi quidem sed magnam, distinctio
            commodi.
          </p>
        </div>
        <div className="d-flex justify-content-between">
          <span className="fs-2 border a border-3 border-white fw-bold text-white rounded-5 text-center ">
            {numberCard}
          </span>
          <button className="fs-2 bg-transparent rounded px-3">↦</button>
        </div>
      </div>
    </div>
  );
}
