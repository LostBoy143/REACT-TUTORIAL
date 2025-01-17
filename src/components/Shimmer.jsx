const Shimmer = () => {
  return (
    <div className="card-container">
      {Array(8)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="shimmer-card"
          >
            <div className="shimmer-image"></div>
          </div>
        ))}
    </div>
  );
};
export default Shimmer;
