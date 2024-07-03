import React from 'react';
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
      options={{
        strings: [
          "Front-End Developer",
          "Web Developer",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
    );
};

export default Type;