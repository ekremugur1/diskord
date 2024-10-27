import { IoIosArrowDown } from "react-icons/io";

export const ServerHeader = () => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center text-center text-tl px-4 h-[40px]">
        <h2 className="uppercase">Kuyudibi</h2>
        <IoIosArrowDown />
      </div>
      <div className="w-full h-[1px] bg-dark mt-2" />
    </div>
  );
};
