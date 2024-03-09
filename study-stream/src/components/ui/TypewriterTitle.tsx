"use client";
import React from "react";
import Typewriter from "typewriter-effect";


type Props = {};

const TypewriterTitle = (props: Props) => {
  return (
    <Typewriter
      options={{
        loop: true,
      }}
      onInit={(typewriter) => {
        typewriter.typeString(" Notetaking made easier with AI.").pauseFor(1000).deleteAll().typeString("Study Smarter. Study Together.").start();
      }}
    />
  );
};

export default TypewriterTitle;
