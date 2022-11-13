"use client";
import React, { useEffect, useState } from "react";

type Props = {
  time: number;
};

const CountdownGlobal = ({ time }: Props) => {
  const [duration, setDuration] = useState(time);

  useEffect(() => {
    setTimeout(() => {
      setDuration(duration - 1000);
    }, 1000);
  }, [duration]);

  const formatData = (mil: number) => {
    let total_seconds = Math.floor(mil / 1000);
    let total_minutes = Math.floor(total_seconds / 60);
    let total_hours = Math.floor(total_minutes / 60);
    // let days = Math.floor(total_hours / 24);

    let seconds = Math.floor(total_seconds % 60);
    let minutes = Math.floor(total_minutes % 60);
    let hours = Math.floor(total_hours % 24);

    if (hours <= 0) return ` ${minutes} minutes ${seconds} seconds`;

    return ` ${hours} hours ${minutes} minutes ${seconds} seconds`;
  };

  return <div>{formatData(duration)}</div>;
};

export default CountdownGlobal;
