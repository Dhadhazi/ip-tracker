import React from "react";

type Props = {
  ipaddress: string;
  location: string;
  timezone: string;
  isp: string;
};

export const InfoLine = ({ ipaddress, location, timezone, isp }: Props) => {
  return (
    <article id="ip-details">
      <section>
        <h1>IP ADDRESS</h1>
        <h3>{ipaddress}</h3>
      </section>
      <div className="divider-div">
        <hr className="divider" />
      </div>
      <section>
        <h1>LOCATION</h1>
        <h3>{location}</h3>
      </section>
      <div className="divider-div">
        <hr className="divider" />
      </div>
      <section>
        <h1>TIMEZONE</h1>
        <h3>{timezone}</h3>
      </section>
      <div className="divider-div">
        <hr className="divider" />
      </div>
      <section>
        <h1>ISP</h1>
        <h3>{isp}</h3>
      </section>
    </article>
  );
};
