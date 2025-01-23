import { IMG_URL } from "../utils/constant";
const ListItems = ({ data }) => {
  const {
    name,
    description,
    imageId,
    price,
    defaultPrice,
  } = data.card.info;

  return (
    <div className="border-b py-2 border-gray-400 flex justify-between items-center my-2">
      <div className="w-9/12 flex flex-col justify-center ">
        <h3 className="font-bold">
          {name} - ₹{" "}
          {price
            ? price / 100
            : defaultPrice / 100}
        </h3>
        <p>{description}</p>
      </div>
      <div className="w-3/12">
        <img
          src={IMG_URL + imageId}
          alt="food-img"
          className="w-[150px] h-[120px] object-cover"
        />
      </div>
    </div>
  );
};

export default ListItems;
