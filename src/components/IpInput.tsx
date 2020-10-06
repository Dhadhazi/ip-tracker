import React, { useState, useEffect } from "react";
import axios from "axios";

type Props = {
  setter: Function;
};

export const IpInput = ({ setter }: Props) => {
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((res) => getData(res.ip));
  }, []);

  function ValidateIPaddress(ipaddress: string) {
    if (
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
        ipaddress
      )
    ) {
      return true;
    }
    return false;
  }

  async function getData(inputString: string) {
    var result;

    if (ValidateIPaddress(input)) {
      result = await axios(
        `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPFY}&${inputString}`
      );
    } else {
      try {
        result = await axios(
          `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPFY}&domain=${inputString}`
        );
      } catch (error) {
        alert("Bad Domain name or IP");
      }
    }
    if (result && result.data.as.domain === "https://www.akamai.com/") {
      alert("Bad Domain Name or IP Address");
    } else {
      if (result) {
        const data = result?.data;
        const selectedData = {
          ipaddress: data.ip,
          location: `${data.location.city}, ${data.location.country} ${data.location.postalCode}`,
          timezone: `UTC ${data.location.timezone}`,
          isp: data.isp,
          lat: data.location.lat,
          lng: data.location.lng,
        };
        setter(selectedData);
        setLoading(false);
      }
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    getData(input);
  }

  return (
    <form
      id="input-box"
      onSubmit={(e) => handleSubmit(e)}
      aria-label="Form for IP/Domain input. Default is your IP."
    >
      <input
        id="ip-input"
        placeholder={
          loading ? "Loading..." : "Search for any IP address or domain"
        }
        onChange={(e) => setInput(e.target.value)}
        value={input}
        aria-label="Input domain name or IP address"
      />
      <button id="submit-btn">{">"}</button>
    </form>
  );
};
