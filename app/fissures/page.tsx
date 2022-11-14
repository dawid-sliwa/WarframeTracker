import React from "react";
import CountdownComp from "../alerts/CountdownComp";
import SortedNormal from "./SortedNormal";

const fetchFissures = async () => {
  const res = await fetch("https://api.warframestat.us/pc/fissures", {
    cache: 'no-store'
  });

  const data = await res.json();
  return data;
};

type fissure = {
  id: number;
  expiry: string;
  node: string;
  missionType: string;
  enemy: string;
  tier: string;
  tierNum: number;
  isStorm: boolean;
  isHard: boolean;
};

const Fissures = async () => {
  const data = await fetchFissures();
  const rightData = data;
  // @ts-ignore
  rightData.sort((a, b): any => (a.tierNum > b.tierNum ? 1 : -1));
  const newData = rightData;

  let stormFissures: fissure[] = [];
  let normalFissures: fissure[] = [];

  //   useEffect(() => {
  //     for (let i = 0; i < newData.length; i++) {
  //       if (newData[i].isStorm === false) {
  //         normalFissures.push(newData[i]);
  //       } else {
  //         stormFissures.push(newData[i]);
  //       }
  //     }
  //   }, []);

  return (
    <div className="flex flex-wrap flex-row p-4">
      <div className=" p-8">
        <p className=" font-extrabold text-3xl">Normal Fissures</p>
        {newData
          .filter((f: fissure) => f.isStorm === false && f.isHard === false)
          .map((f: fissure) => (
            <div
              key={f.id}
              className=" border-2 border-black m-2 flex flex-col p-2"
            >
              <div className=" flex flex-row">
                <p className="font-bold pr-2">{f.node}</p>
                <p className=" pr-2">{f.missionType}</p>
                <p>{f.tier}</p>
              </div>
              <p>{f.enemy}</p>
              <p>Time remaining</p>
              <CountdownComp time={Date.parse(f.expiry) - Date.now()} />
            </div>
          ))}
      </div>
      <div className=" p-8">
        <p className=" font-extrabold text-3xl">Storm Fissures</p>
        {newData
          .filter((f: fissure) => f.isStorm === true && f.isHard === false)
          .map((f: fissure) => (
            <div
              key={f.id}
              className=" border-2 border-black m-2 flex flex-col p-2"
            >
              <div className=" flex flex-row">
                <p className="font-bold pr-2">{f.node}</p>
                <p className=" pr-2">{f.missionType}</p>
                <p>{f.tier}</p>
              </div>
              <p>{f.enemy}</p>
              <p>Time remaining</p>
              <CountdownComp time={Date.parse(f.expiry) - Date.now()} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Fissures;
