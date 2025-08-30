"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Cta1.module.css";

export function Cta1({
  as: _Component = _Builtin.Block,
  description = '"Got questions? We’ve got answers! Reach out and let’s chat about how we can help you."',
  buttonText = "Find out more",

  buttonLink = {
    href: "#",
  },
}) {
  return (
    <_Component className={_utils.cx(_styles, "div-block")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "div-block-2")} tag="div">
        <_Builtin.Image
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src="https://cdn.prod.website-files.com/68b1846d537c4bf1f29bafa2/68b1846e537c4bf1f29bb07a_FR%20-%20Open%20Graph.jpg"
        />
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "div-block-3")} tag="div">
        <_Builtin.Paragraph>{description}</_Builtin.Paragraph>
        <_Builtin.Link
          className={_utils.cx(_styles, "button-2")}
          button={true}
          block=""
          options={buttonLink}
        >
          {buttonText}
        </_Builtin.Link>
      </_Builtin.Block>
    </_Component>
  );
}
