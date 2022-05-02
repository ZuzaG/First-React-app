const Section3Services = ({ services }) => {
  return (
    <div className="allServices">
      {services.map(({ id, name, isNew }) => (
        <div key={id} className="serviceParent">
          {isNew && (
            <>
              <div className="reddot" />{" "}
            </>
          )}
          <div className="service">
            {name} {isNew && <div>(nowość)</div>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Section3Services;
