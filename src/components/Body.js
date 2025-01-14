import ResCard from "./ResCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        {/* for future input field */}
      </div>
      <div className="res-container grid grid-template-columns-4 px-16">
        {/* restaurant cards */}

        <ResCard />
      </div>
    </div>
  );
};

export default Body;
