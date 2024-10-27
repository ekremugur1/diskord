import clsx from "clsx";
import { PiHash } from "react-icons/pi";
import { IoVolumeHigh } from "react-icons/io5";

import { ServerHeader } from "./ServerHeader";

const channels = [
  { id: 1, type: "text", name: "amalonaltibucuk" },
  { id: 2, type: "text", name: "command" },
  { id: 3, type: "voice", name: "KÖŞKK" },
  { id: 4, type: "voice", name: "+200 IQ" },
];

export const Channels = () => {
  return (
    <div className="h-full bg-def py-2 w-[240px] overflow-hidden rounded-l-xl">
      <ServerHeader />
      <div className="mb-4" />
      <div className="px-2">
        {channels.map((c) => (
          <div
            key={c.id}
            className={clsx(
              "flex fle-row px-4 text-tg text-center items-center gap-[6px] cursor-pointer py-[1px]",
              { "bg-hg rounded-lg": c.id === 1 }
            )}
          >
            {c.type == "text" ? <PiHash /> : <IoVolumeHigh />}
            <h3>{c.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
