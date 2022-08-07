import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import heroImg from "../../public/images/mypic.png";
import classes from "../../styles/hero.module.css";
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal/Fade';
const Hero = () => {
  return (
    <>

  
    <Fade top>
    <section className={`${classes.hero}`}>
  

  
      <Container>
        <Row>
          {/* ========== hero content ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Hello" />
              <h2 className="mt-3 mb-3">I&apos;m Arsalan Bashir Butt</h2>
              <h5 className="mb-4 " style={{color:"#01d293"}}>
              <Typewriter options={{loop:true,autoStart:true}} onInit={(type)=>{
                type.typeString("Full Stack Developer").start().pauseFor(2000).deleteAll().typeString("Freelancer").start().pauseFor(2000).deleteAll().
                typeString("MERN Developer").start().pauseFor(2000).deleteAll().typeString("Frontend Developer").start().pauseFor(2000).deleteAll().
                typeString("Wordpress Web Developer").start().pauseFor(2000).deleteAll().typeString("Backend Developer").start().pauseFor(2000).deleteAll();       
                       }}>
               </Typewriter>
             </h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Impedit rem sint ipsa cumque. Atque rem vel iusto impedit omnis
                quos!
              </p>
              <div className="mt-5">
                <button className="primary__btn">
                  <Link href="#">Hire me</Link>
                </button>

                <button className="secondary__btn">
                  <Link href="#">Download CV</Link>
                </button>
              </div>
            </div>
          </Col>

          {/* ========== hero img ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image alt="hero-image" src={heroImg} width="400" height="400" />

              <div className={`${classes.hero__skills}`}>
                <h6>Skills</h6>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
              </div>

              <div
                className={`${classes.hero__experience} d-flex align-items-center gap-3`}
              >
                <span>
                  <i className="ri-lightbulb-flash-line"></i>
                </span>
                <div className="bg-transparent">
                  <h6>Experience</h6>
                  <h5 className="mb-0">2 Years</h5>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </Fade>
    </>
  );
};

export default Hero;
