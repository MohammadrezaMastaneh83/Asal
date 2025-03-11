import Image from "next/image";


export default function Counter({ count, setCount, removeCard }) {
  const handleRemove = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      removeCard();
    }
  };
  return (
    <div className="flex items-center space-x-2 border rounded-[10px] p-2">
      <button
        onClick={() => setCount(count + 1)}
        className="px-3 py-1 rounded-md"
      >
        <Image src="/svgs/plusvector.svg" alt="افزایش" width={20} height={20} />
      </button>

      <span className="font-xregular text-[1.5rem]">{count}</span>
      <button onClick={handleRemove} className="px-3 py-1 rounded-md">
        <Image src="/svgs/trashvector.svg" alt="حذف" width={20} height={20} />
      </button>
    </div>
  );
}
