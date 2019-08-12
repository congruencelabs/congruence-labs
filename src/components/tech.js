import React from "react"
import "./tech.css";

import AngularIcon from "../images/svg/icon-angular.inline.svg";
import GraphqlIcon from "../images/svg/icon-graphql.inline.svg";
import MongoIcon from "../images/svg/icon-mongo.inline.svg";
import NpmIcon from "../images/svg/icon-npm.inline.svg";
import ReactIcon from "../images/svg/icon-react.inline.svg";
import VueIcon from "../images/svg/icon-vue.inline.svg";
import ScalaIcon from "../images/svg/icon-scala.inline.svg";
import AkkaIcon from "../images/svg/icon-akka.inline.svg";
import K8SIcon from "../images/svg/icon-kubernetes.inline.svg";

const SupportedTech = () => {
  const icons = [
    <AngularIcon width={100} height={100}/>,
    <GraphqlIcon width={100} height={100}/>,
    <NpmIcon width={100} height={100}/>,
    <ReactIcon width={100} height={100}/>,
    <K8SIcon width={150} height={80}/>,
    <MongoIcon width={150}/>,
    <AkkaIcon width={100} height={100}/>,
    <ScalaIcon width={150}/>,
    <VueIcon width={100}/>,
  ];
  return (
    <div className={'tech-container'}>
      {icons.map(icon => (
        <div className={'icon-container'}>
          {icon}
        </div>
      ))}
    </div>
  )
}

export default SupportedTech;