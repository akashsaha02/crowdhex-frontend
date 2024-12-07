
function HeroBanner({ source }) {
  return (
    <div className="flex items-center justify-center">
      <img
        className="w-screen object-cover lg:h-[35rem] h-[20rem] select-none pointer-events-none "
        src={source}
        alt=""
      />
    </div>
  );
}

export default HeroBanner;