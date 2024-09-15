import React from "react";
import about from "../../imgs/about.png";
import serv from "../../imgs/ServicesAbout.png";
import serv2 from "../../imgs/ServicesAbout2.png";
import member1 from "../../imgs/member1.png";
import member2 from "../../imgs/member2.png";
import member3 from "../../imgs/member3.png";

import Path from "../../Components/path/Path";
import Features from "../../Components/Features/Features";
import Member from "../../Components/member/Member";
const FEATURES = [
  {
    logo: serv,
    numberOf: 10,
    description: "Sallers active our site",
    active: false,
  },
  {
    logo: serv2,
    numberOf: 33,
    description: "Mopnthly Produduct Sale",
    active: true,
  },
  {
    logo: serv,
    numberOf: 45.5,
    description: "Customer active in our site",
    active: false,
  },
  {
    logo: serv,
    numberOf: 25,
    description: "Anual gross sale in our site",
    active: false,
  },
];
const MEMBERS = [
  {
    image: member1,
    name: "Tom Cruise",
    title: "Founder & Chairman",
  },
  {
    image: member2,
    name: "Emma Watson",
    title: "Managing Director",
  },
  {
    image: member3,
    name: "Will Smith",
    title: "Product Designer",
  },
];
export default function About() {
  return (
    <div className="container-fluid my-5">
      <Path current={"About"} previus={["Home"]} />
      <div className="py-5">
        <div className="d-flex justify-content-between align-items-center">
          <article className="col-5">
            <h1>Our Story</h1>
            <p>
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.{" "}
            </p>
            <p>
              Muntag has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </article>
          <div className="col-6 ms-auto">
            <img src={about} alt="" className="w-100" />
          </div>
        </div>
      </div>
      <div className="py-5 d-flex flex-wrap">
        {FEATURES.map((feature, index) => {
          return (
            <div key={index} className="col-3 px-3">
              <Features
                logo={feature.logo}
                numberOf={feature.numberOf}
                description={feature.description}
                className={feature.active}
              />
            </div>
          );
        })}
      </div>
      <div className="py-5 d-flex flex-wrap">
        {MEMBERS.map((member, index) => {
          return (
            <div className="col-4 px-3">
              <Member
                key={index}
                img={member.image}
                name={member.name}
                title={member.title}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
