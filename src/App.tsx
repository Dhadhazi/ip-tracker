import React, { useState } from "react";
import "./App.css";
import { InfoLine } from "./components/InfoLine";
import { IpInput } from "./components/IpInput";

function App() {
  const [data, setData] = useState<IpData>();

  console.log(data);

  return (
    <div>
      <div id="absolute-div">
        <main id="details-box">
          <header>IP Address Tracker</header>
          <IpInput setter={setData} />
          {data ? (
            <InfoLine
              ipaddress={data?.ipaddress}
              location={data?.location}
              timezone={data?.timezone}
              isp={data?.isp}
            />
          ) : (
            "Loading"
          )}
        </main>
      </div>
      <div id="img-background"></div>
      <div id="map-box"></div>
    </div>
  );
}

export default App;
