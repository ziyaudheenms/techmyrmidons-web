import React from "react";
import Card from "../../Components/Landing/Card/Card";
import styles from "./Landing.module.css";
import Navbar from "../../Components/Navbar/Navbar";

const Landing = () => {
  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.first_view_container}>
          <Navbar />
          <div className={styles.first_view}>
            <div className={styles.image_container}>
              <img
                src="/assets/landing/fvimg.png"
                alt="myrmidon"
                className={styles.fvimage}
              />
            </div>
            <div className={styles.fv_texts}>
              <p className={styles.fv_heading}>Does Technology Amaze you?</p>
              <p className={styles.fv_tagline}>
                Follow the Techmyrmidons and stay updated in the latest
                Technology
              </p>
              <a href="#cards">
                <span className={styles.get_started}>Get Started </span>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.explore_view_container}>
          <div className={styles.explore_view}>
            <p className={styles.ev_heading}>Domains To Explore</p>
            <p className={styles.ev_tagline}>
              The best guide for you to start the next world
            </p>
            {/* <button className={styles.search_button}>Search Now</button> */}
          </div>
        </div>

        <div className={styles.cards_view_container}>
          <div id="cards" className={styles.cards_view}>
            <Card
              image="/assets/landing/android.png"
              name="Android"
              link="/android"
              description="Android is a mobile operating system based on a modified version of the Linux kernel and other open-source software."
            />
            <Card
              image="/assets/landing/ios.png"
              name="iOS"
              link="/ios"
              description="iOS is a mobile operating system created and developed by Apple Inc. exclusively for its hardware."
            />
            <Card
              image="/assets/landing/devops.png"
              name="DevOps"
              link="/devops"
              description="DevOps is a set of practices that combines software development and IT operations."
            />
            <Card
              image="/assets/landing/web.png"
              name="Web"
              link="/web"
              description="Web refers to the interconnected system of information and resources accessed through the internet using browsers."
            />
            <Card
              image="/assets/landing/frontend.png"
              name="Front-End"
              link="/frontend"
              description="
            The term Front-End mainly referes to the User Interface which an user view and interacts with and its working"
            />
            <Card 
              image="/assets/landing/backend.png" 
              name="Back-End" 
              link="/backend"
              description="Backend development refers to the server-side aspect of web development, focusing on creating and managing the server logic, databases, and APIs"
            />
            <Card
              image="/assets/landing/blockchain.png"
              name="Blockchain"
              link="/blockchain"
              description="
            A blockchain is a digital ledger or database where encrypted blocks of digital asset data are stored and chained together."
            />
            <Card
              image="/assets/landing/ai.png"
              name="Artifcial Intelligence"
              link="/ai"
              description="AI which stands for artificial intelligence refers to systems or machines that mimic human intelligence to perform tasks."
            />
            <Card
              image="/assets/landing/arvr.png"
              name="AR/VR"
              link="/arvr"
              description="
            Augmented and virtual reality (AR/VR) are immersive technologies that enable users to experience digitally rendered content."
            />

            <Card
              image="/assets/landing/qa.png"
              name="QA"
              link="/qa"
              description="Quality assurance (QA) is any systematic process of determining whether a product or service meets specified requirements."
            />
            <Card
              image="/assets/landing/quantumcomputing.png"
              name="Quantum Computing"
              link="/quantum-computing"
              description="A rapidly-emerging technology that harnesses the laws of quantum mechanics to solve issues too hard for computers."
            />
            <Card
              image="/assets/landing/pm.png"
              name="Product Management"
              link="/pm"
              description="Are you interested in learning to build the right product and the product right?."
            />
            <Card
              image="/assets/landing/iot.png"
              name="IoT"
              link="/iot"
              description="IoT is the network of physical objects that are embedded with sensors, software etc.. for the purpose of connecting and exchanging data over the internet."
            />
            <Card
              image="/assets/landing/uiux.png"
              name="UI/UX"
              link="/uiux"
              description="UI Design and UX Design are some of the most in-demand skills today. While UI deals with the graphical layout of an app, UX deals with the human experience."
            />
            <Card
              image="/assets/landing/cybersec.png"
              name="Cyber Security"
              link="/cybersecurity"
              description="Cyber Security is the practice of defending computers, servers, mobile devices, electronic systems, networks, and data from malicious attacks. "
            />
            <Card
              image="/assets/landing/cdesign.png"
              name="Creative Design"
              link="/creativedesign"
              description="Creative Design helps to portray ideas in the best fashion and requires an expertise in designing and a certain level of creativity. "
            />
            <Card
              image="/assets/landing/marketing.png"
              name="Marketing"
              link="/marketing"
              description="Marketing is the process of promoting and selling goods and services. It involves understanding the product, target audience, and making plans to promote it. "
            />
            <Card
              image="/assets/landing/foss.png"
              name="Foss"
              link="/foss"
              description="FOSS (Free and Open Source Software) is software that anyone can use, modify, and share freely. It promotes collaboration, transparency, and community-driven development."
            />
            <Card
              image="/assets/landing/embedded-system.png"
              name="Embedded Systems"
              link="/embedded-system"
              description="An embedded system is a computer system designed to perform tasks within a larger mechanical or electronic device."
              
            />
          </div>
        </div>

        <div className={styles.cw_text}>© Copyright 2025 Tech Myrmidons</div>
      </div>
    </>
  );
};

export default Landing;
