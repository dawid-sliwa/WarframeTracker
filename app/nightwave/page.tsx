import CountdownComp from "../alerts/CountdownComp";

const fetchNight = async () => {
  const res = await fetch("https://api.warframestat.us/pc/nightwave", {
    cache: 'no-store'
  });
  const data = await res.json();
  return data;
};

type challenge = {
  id: string;
  desc: string;
  title: string;
  reputation: number;
};

const page = async () => {
  const data = await fetchNight();

  return (
    <div className=" w-[100%] p-4 flex justify-center flex-wrap flex-col">
      <div>
        <p className=" text-bold text-3xl">Nightwave</p>
        <div className="flex flex-row">
          <p className=" pr-2">Time remainging:</p>
          <CountdownComp time={Date.parse(data.expiry) - Date.now()} />
        </div>
        <p>Current nightwave season: {data.season}</p>
        <p className="p-2 font-bold text-xl">Current challenges</p>
        <div className=" w-[1000px] flex-wrap flex flex-row">
          {data.activeChallenges.map((c: challenge) => (
            <div
              key={c.id}
              className=" w-fit border-2 border-black flex flex-col m-2 p-2"
            >
              <p className=" font-bold">{c.title}</p>
              <p>{c.desc}</p>
              <div className="flex flex-row">
                <p className="pr-2">Reputation</p>
                <p>{c.reputation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
