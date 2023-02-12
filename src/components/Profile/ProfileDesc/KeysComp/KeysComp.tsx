import React from "react";

// Components
import KeysStrip from "./KeysStrip";

const KeysComp = () => {
  const KeysData = [
    {
      title: "Public Key",
    },
    {
      title: "*private key*",
    },
  ];

  return (
    <div className="mt-6 w-full ">
      {KeysData.map(({ title }) => (
        <KeysStrip key={`key-${title}`} title={title} />
      ))}
    </div>
  );
};

export default React.memo(KeysComp);
