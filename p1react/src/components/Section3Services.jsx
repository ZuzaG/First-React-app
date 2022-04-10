const Section3Services = ({ services }) => {
  return (
    <div className="allServices">
      {services.map(({ name, isNew }) => (
        <div isNew={isNew} key={name} className="serviceParent">
          {isNew && <div className="reddot" />}
          <div className="service">{name} (nowość)</div>
        </div>
      ))}
    </div>
  );
};

export default Section3Services;
