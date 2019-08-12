import React from "react"
import "./tech.css";

import AkkaIcon from "../images/svg/akka.svg";
import AngularIcon from "../images/svg/angular.svg";
import AwsIcon from "../images/svg/aws.svg";
import CassandraIcon from "../images/svg/cassandra.svg";
import GoIcon from "../images/svg/golang.svg";
import GraphqlIcon from "../images/svg/graphql.svg";
import JavaIcon from "../images/svg/java.svg";
import K8SIcon from "../images/svg/kubernetes.svg";
import MongoIcon from "../images/svg/mongo.svg";
import NodejsIcon from "../images/svg/nodejs.svg";
import ReactIcon from "../images/svg/reactjs.svg";
import ScalaIcon from "../images/svg/scala.svg";
import SpringbootIcon from "../images/svg/springboot.svg";
import TypescriptIcon from "../images/svg/typescript.svg";
import VueIcon from "../images/svg/vue.svg";

const SupportedTech = () => {
  const icons = [
    <AngularIcon width={100} height={100}/>,
    <JavaIcon width={100} height={100} style={{paddingLeft: '20px'}}/>,
    <AwsIcon width={100} height={100}/>,
    <CassandraIcon width={100} height={100}/>,
    <GraphqlIcon width={100} height={100}/>,
    <GoIcon width={120} height={100}/>,
    <NodejsIcon width={140} height={100} style={{
        paddingTop: '20px',
        paddingLeft: '20px'
    }}/>,
    <ReactIcon width={100} height={100}/>,
    <K8SIcon width={150} height={80}/>,
    <MongoIcon width={150}/>,
    <SpringbootIcon width={150} style={{
        paddingLeft: '20px'
    }}/>,
    <AkkaIcon width={100} height={100}/>,
    <ScalaIcon width={150} style={{
        paddingLeft: '20px'
    }}/>,
    <TypescriptIcon width={150} style={{
        paddingLeft: '20px'
    }}/>,
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