import Image from "next/image";
import TrashIcon from "@/svg/trashvector.svg";
import plusvector from "@/svg/plusvector.svg";

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
      <button onClick={handleRemove} className="px-3 py-1 rounded-md">
        <Image src={TrashIcon} alt="حذف" width={20} height={20} />
      </button>

      <span className="font-xregular text-[1.5rem]">{count}</span>

      <button
        onClick={() => setCount(count + 1)}
        className="px-3 py-1 rounded-md"
      >
        <Image src={plusvector} alt="افزایش" width={20} height={20} />
      </button>
    </div>
  );
}
