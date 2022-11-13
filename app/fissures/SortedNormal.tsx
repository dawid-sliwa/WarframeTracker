"use client";
import React, { useEffect, useState } from "react";
import CountdownComp from "../alerts/CountdownComp";

type Props = {
  data: fissure[];
};

type fissure = {
  id: number;
  expiry: string;
  nodeKey: string;
  missionType: string;
  enemy: string;
  tier: string;
  tierNum: number;
  isStorm: boolean;
  isHard: boolean;
};

const SortedNormal = ({ data }: Props) => {
  return (
    <div>
      {data
        .filter((f: fissure) => f.isStorm === false && f.isHard === false)
        .map((f: fissure) => (
          <div
            key={f.id}
            className=" border-2 border-black m-2 flex flex-col p-2"
          >
            <div className=" flex flex-row">
              <p className="font-bold pr-2">{f.nodeKey}</p>
              <p className=" pr-2">{f.missionType}</p>
              <p>{f.tier}</p>
            </div>
            <p>{f.enemy}</p>
            <p>Time remaining</p>
            <CountdownComp time={Date.parse(f.expiry) - Date.now()}/>
          </div>
        ))}
    </div>
  );
};

export default SortedNormal;
