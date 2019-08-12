import React from "react"
import { useStaticQuery, graphql } from "gatsby"
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
    return (
        <div className={'container'} style={{
            width: "100%",
            display: "flex",
            flexDirection: "column"
        }}>
            <div className={"web-technologies"}>
                <span style={{padding: '0 20px'}}>
                    <AngularIcon width={100}/>    
                </span>
                <span style={{padding: '0 20px'}}>
                    <GraphqlIcon width={100}/>  
                </span>
                <span style={{padding: '0 20px'}}>
                    <NpmIcon width={100}/>    
                </span>


            <span style={{padding: '0 20px'}}>
            <ReactIcon width={100}/>   
            </span>

            <span style={{padding: '0 20px'}}>
            <K8SIcon width={100}/>   
            </span>
            </div>
            <div className={"web-technologies"}>
            <span style={{padding: '0 20px'}}>
            <MongoIcon width={100}/>
            </span>

            <span style={{padding: '0 20px'}}>
            <AkkaIcon width={100} height={100}/>  
            </span>

            <span style={{padding: '0 20px'}}>
            <VueIcon width={100}/>   
            </span>

            <span style={{padding: '0 20px'}}>
                <ScalaIcon width={160}/>
            </span>
            </div>

            <div className={"web-technologies"}>
            

            
            </div>
        </div>
    )
}

export default SupportedTech;