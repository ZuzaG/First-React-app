import services from "../data/services";
import Section3Services from "./Section3Services";

const Section3 = () => {
  return (
    <div className="section3" id="section3">
      <h1 className="nag-sec3">Czym zajmuje się nasza firma?</h1>

      <Section3Services services={services} />
    </div>
  );
};
export default Section3;
