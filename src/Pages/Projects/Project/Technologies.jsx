import React from "react";
import { FaReact } from "react-icons/fa";
import { GrNode, GrMysql } from "react-icons/gr";
import { DiNpm, DiMongodb } from "react-icons/di";
import { BsBootstrapFill } from "react-icons/bs";
import { IoLogoNodejs } from "react-icons/io";

const Technologies = (props) => {
  const { techs } = props;
  const FormTech = techs.replace(/['"]+/g, "");
  console.log(FormTech);
  return <FormTech />;
};

export default Technologies;
