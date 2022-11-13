import React from "react";
import Countdown, { CountdownRenderProps } from "react-countdown";
import CountdownComp from "./CountdownComp";

const fetchCetus = async () => {
  const res = await fetch("https://api.warframestat.us/pc/alerts?language=en");

  const data = await res.json();
  return data;
};

type Alert = {
  id: number;
  active: boolean;
  expiry: string;
  mission: {
    description: string;
    node: string;
    type: string;
    faction: string;
    minEnemyLevel: string;
    maxEnemyLevel: string;
    maxWaveNum: string;
    reward: {
      items: [];
      countedItems: [
        {
          count: number;
          key: string;
        }
      ];
      thumbnail: string;
    };
  };
};

const page = async () => {
  const data = await fetchCetus();

  return (
    <div className=" w-[100%] p-4 flex justify-center flex-wrap">
      {data.map((eachAlert: Alert) => (
        <div
          className=" m-4 p-2 w-fit h-fit border-2 border-black flex flex-col"
          key={eachAlert.id}
        >
          <div>
            <h1 className=" font-bold">{eachAlert.mission.node}</h1>
          </div>
          <div className=" flex flex-row">
            <p>
              {eachAlert.mission.type}: {eachAlert.mission.faction}
            </p>
          </div>
          <p>Enemy level: {eachAlert.mission.minEnemyLevel}-{eachAlert.mission.maxEnemyLevel}</p>
          <p className=" font-bold">Reward</p>
          <div className=" flex flex-row items-center">
            <p>
              {eachAlert.mission.reward.countedItems[0].count}{" "}
              {eachAlert.mission.reward.countedItems[0].key}
            </p>

            <img
              src={eachAlert.mission.reward.thumbnail}
              className=" w-[40px]"
            />
          </div>
          <p className=" font-bold">Time remaining</p>
          <CountdownComp time={Date.parse(eachAlert.expiry) - Date.now()} />
        </div>
      ))}
    </div>
  );
};

export default page;
