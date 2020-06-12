import React from "react";
import Image from "./";
import Capsule from "../../../assets/images/capsule.jpg";

export default {
  title: "Atoms|Image",
  component: Image,
};

export const CustomSize = () => (
  <Image src={Capsule} alt="Capsule" width="100%" height="50rem" />
);

export const CustomSize2 = () => (
  <Image src={Capsule} alt="Capsule" width="50rem" height="50rem" />
);
