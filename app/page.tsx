
import CountdownComp from "./alerts/CountdownComp";
import CountdownGlobal from "./CountdownGlobal";

const fecthNecData = async () => {
  const res1 = await fetch("https://api.warframestat.us/pc/cetusCycle");
  const data1 = await res1.json();
 
  const res3 = await fetch(
    "https://api.warframestat.us/pc/archonHunt?language=en"
  );
  const data3 = await res3.json();

  return [data1, data3];
};

type CCycle = {
  expiry: string;
  isDay: boolean;
  timeLeft: string;
  state: string;
};

const Home = async () => {
  const data = await fecthNecData();

  return (
    <div className=" flex flex-wrap flex-row p-4">
      <div className=" m-4 p-2 w-fit h-fit border-2 border-black flex flex-col">
        <p className=" font-bold text-2xl">Cetus Cycle</p>
        <p>Current Cycle: {data[0].state}</p>
        <div className=" flex flex-row">
          <p className=" pr-1">Time left to {data[0].state === "day" ? "night" : "day"}:</p>
          <CountdownGlobal time={Date.parse(data[0].expiry) - Date.now()}/>
        </div>
      </div>
      <div className=" m-4 p-2 w-fit h-fit border-2 border-black flex flex-col">
        <p className=" font-bold text-2xl">Archon Hunt</p>
        <div className=" flex flex-row">
          <p className="pr-2">Time remaining:</p>
          <CountdownComp time={Date.parse(data[1].expiry) - Date.now()}/>
        </div>
        <p>Current boss: {data[1].boss}</p>
      </div>
    </div>
  );
};

export default Home;
