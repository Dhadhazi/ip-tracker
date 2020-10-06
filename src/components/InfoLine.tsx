import React from "react";

type Props = {
  ipaddress: string;
  location: string;
  timezone: string;
  isp: string;
};

export const InfoLine = ({ ipaddress, location, timezone, isp }: Props) => {
  return (
    <article id="ip-details" aria-label="Data about the inserted ip/domain.">
      <section>
        <h2>IP ADDRESS</h2>
        <h3>{ipaddress}</h3>
      </section>
      <div className="divider-div">
        <hr className="divider" />
      </div>
      <section>
        <h2>LOCATION</h2>
        <h3>{location}</h3>
      </section>
      <div className="divider-div">
        <hr className="divider" />
      </div>
      <section>
        <h2>TIMEZONE</h2>
        <h3>{timezone}</h3>
      </section>
      <div className="divider-div">
        <hr className="divider" />
      </div>
      <section>
        <h2>ISP</h2>
        <h3>{isp}</h3>
      </section>
    </article>
  );
};
