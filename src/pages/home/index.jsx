import React, { useRef } from "react";
import { useHistory } from "react-router-dom";

import {
  CheckmarkList,
  FeatureIllustration,
  HeaderIllustration,
} from "../../assets";
import { DiamondLogo, FreeLogo } from "../../assets";
import "./home.scss";
import { Button } from "../../components/atoms";
import { PlanContainer } from "../../components/molecules";
import Carousel from "react-material-ui-carousel";
import { FotoFerdian, FotoJona, FotoQisas, FotoLithgow } from "../../assets";
import Navbar from "../../components/organism/Navbar";

const Homepage = () => {
  const featureRef = useRef(null);
  // const smoothScroll = (e) => {
  //   e.preventDefault();
  //   featureRef.current.scrollIntoView({ behavior: "smooth" });
  // };
  let history = useHistory();
  const routeToDashboard = () => {
    history.push("/student/dashboard/");
  };
  var items = [
    {
      name: "Jonathan",
      image: FotoJona,
      description: "Teknik Komputer 2018",
    },
    {
      name: "Ferdian Julianto",
      image: FotoFerdian,
      description: "Teknik Komputer 2018",
    },
    {
      name: "Qisas T. Hasanudin",
      image: FotoQisas,
      description: "Teknik Komputer 2018",
    },
    {
      name: "Vincentius I. Lithgow",
      image: FotoLithgow,
      description: "Teknik Komputer 2018",
    },
    {
      name: "Nathaniel Faustine",
      image:
        "https://firebasestorage.googleapis.com/v0/b/webamv-c51f6.appspot.com/o/member%2Fmember_nathaniel.JPG?alt=media&token=9005378a-6cba-4eb2-a9e5-4e3f1a997aa6",
      description: "Teknik Komputer 2018",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="homepage">
        <div className="homepage__header">
          <div className="homepage__header__left">
            <div className="homepage__header__left__content">
              <h1>
                Customizeable Solution for Secure <span>Online Testing</span>
              </h1>
              <p>
                We provide security and technology measures to protect your
                intellectual property, the validity of your exam scores, and the
                financial health of your testing operation.
              </p>

              <Button
                buttonColor="primary"
                buttonStyle="semi-rounded"
                buttonSize="large"
                // onClick={(e) => smoothScroll(e)}
                onClick={routeToDashboard}
              >
                Get Started
              </Button>
            </div>
          </div>
          <div className="homepage__header__right">
            <img src={HeaderIllustration} alt="illustration" />
          </div>
        </div>
        <div className="homepage__feature" ref={featureRef}>
          <div className="homepage__feature__left">
            <img src={FeatureIllustration} alt="illustration" />
          </div>
          <div className="homepage__feature__right">
            <h1>We Provide Many Features You Can Use</h1>
            <h2>
              You can explore the features that we provide with ease and have
              their own functions each feature.
            </h2>
            <div className="homepage__feature__right__lists">
              <div className="homepage__feature__right__lists__item">
                <p>Student Performance Review</p>
                <img src={CheckmarkList} alt="list" />
              </div>
              <div className="homepage__feature__right__lists__item">
                <p>Augmented AI Face recognition</p>
                <img src={CheckmarkList} alt="list" />
              </div>
              <div className="homepage__feature__right__lists__item">
                <p>Media communication detection</p>
                <img src={CheckmarkList} alt="list" />
              </div>
              <div className="homepage__feature__right__lists__item">
                <p>Special Exam Platform</p>
                <img src={CheckmarkList} alt="list" />
              </div>
            </div>
          </div>
        </div>
        <div className="homepage__pricing">
          <div className="homepage__pricing__header">
            <h1>Simple & flexible pricing built for everyone</h1>
            <p>
              Let's Choose the package that is best for you and explore it
              happily and cheerfully
            </p>
          </div>
          <div className="homepage__pricing__plans">
            <div className="homepage__pricing__plans__left">
              <PlanContainer
                logo={FreeLogo}
                plan="Free Plan"
                buttonStyle="rounded-nofill"
              >
                <p>No Time Limits</p>
                <p>Window Overriding</p>
                <p>With Face Recognition</p>
                <p>Plagiarism Detection</p>
                <p>Audio Detection</p>
              </PlanContainer>
            </div>
            <div className="homepage__pricing__plans__right">
              <PlanContainer
                logo={DiamondLogo}
                plan="Diamond Plan"
                buttonStyle="rounded"
                price="Rp 299.000"
              >
                <p>No Time Limits</p>
                <p>Window Overriding</p>
                <p>With Face Recognition</p>
                <p>Plagiarism Detection</p>
                <p>Audio Detection</p>
                <p>Premium LMS</p>
              </PlanContainer>
            </div>
          </div>
        </div>
        <div className="homepage__slider">
          <h1>Our Team</h1>
          <div className="homepage__slider__carousel">
            <Carousel>
              {items.map((item) => {
                return (
                  <div className="homepage__slider__carousel__item">
                    <img src={item.image} alt="foto" />
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p>Universitas Indonesia</p>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
