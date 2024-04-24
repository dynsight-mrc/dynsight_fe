export function CardInfo({
    title,
    items,
  }: {
    title: string;
    items: { title: string; value: string }[];
  }) {
    return (
      <div>
        <div className={`${title === "" && "hidden"}  text-xl text-gray-700 font-opensans my-2 ml-1 `}>
          <h3>{title}</h3>
        </div>
        <div className="rounded-md shadow-md bg-white flex flex-col  w-85 ">
          {items.map((ele, index) => (
            <CardInfoItem key={index} title={ele.title} value={ele.value} />
          ))}
          
        </div>
      </div>
    );
  }
  
  function CardInfoItem({ title, value }: { title: string; value: string }) {
    return (
      <div className=" px-4 py-2 flex flex-row justify-between items-center border-b border-b-gray-100">
        <span className="font-opensans text-gray-500">{title}</span>
        <span className="text-blue-500 font-opensans">{value}</span>
      </div>
    );
  }