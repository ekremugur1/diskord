/* eslint-disable react/prop-types */
import { TextChannel } from "../TextChannel";

export const Channel = ({ details }) => {
  return (
    <div className="pt-4 text-tl bg-light flex-grow flex flex-col">
      <div className="pl-4 h-[40px]">{details.name}</div>
      <div className="h-[1px] bg-dark" />
      <TextChannel details={details} />
    </div>
  );
};
