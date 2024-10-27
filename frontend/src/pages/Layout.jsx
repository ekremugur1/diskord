import { SideBar } from "../components/SideBar";
import { Channels } from "../components/Channels";
import { Channel } from "../components/Channel";

export const Layout = () => {
  return (
    <div className="flex flex-col bg-dark h-[100vh]">
      <div className="w-full py-[2px] text-th">
        <h1 className="w-[60px] text-center text-sm">Mike</h1>
      </div>
      <div className="h-full flex flex-row">
        <SideBar />
        <Channels />
        <Channel details={{ id: 1, type: "text", name: "amalonaltibucuk" }} />
      </div>
    </div>
  );
};
