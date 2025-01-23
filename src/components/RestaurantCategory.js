import ListItems from "./ListItems";

function RestaurantCategory({
  items,
  idx,
  showItems,
  setShowIdx,
  showIdx,
}) {
  const handleClick = () => {
    setShowIdx(showIdx === idx ? null : idx);
  };

  const data = items.itemCards;
  return (
    <div className="w-full cursor-pointer shadow-xl p-2 my-6 bg-gray-100 ">
      <div
        id="top"
        onClick={handleClick}
        className="flex justify-between items-center px-2 min-h-[60px]"
      >
        <span className="font-semibold text-lg">
          {items.title} ({data.length})
        </span>
        <span className="text-xl">⬇️ </span>
      </div>
      {showItems &&
        data.map((data) => (
          <ListItems
            key={data?.card?.info?.id}
            data={data}
          />
        ))}
    </div>
  );
}

export default RestaurantCategory;
