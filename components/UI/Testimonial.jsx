import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import SectionSubtitle from "./SectionSubtitle";
import network from "../../public/images/Connected world.png";
import Slider from "react-slick";
import classes from "../../styles/testimonial.module.css";

const Testimonial = () => {
  const settings = {
    dots: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6" className={`${classes.testimonial__img}`}>
            <Image alt="network-img" src={network} width="400" height="400" />
          </Col>

          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Programming Languages" />
            <h4 className="mt-4 mb-5">What are my Skills</h4>

            <Slider {...settings}>
              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src="/images/mypic.png"
                    width="50"
                    height="50"
                    className=" rounded-2"
                  />

                  <div>
                    <h6>Arsalan Bashir</h6>
                    <h6>Frontend </h6>
                  </div>
                </div>

                {/* <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi saepe eveniet dolores molestias nisi ullam quis
                  delectus inventore, quidem beatae ipsa pariatur doloribus
                  corrupti! Quisquam expedita minima, neque et quis, fugiat hic
                  iste possimus vitae perspiciatis consequatur quod modi
                  dignissimos.
                </p> */}
                <div className="image-container">
                <Image
                 alt="client-img"
                    src="/images/basicfrontend.png"
                    width="300"
                    height="100"
                    className=" rounded-2  "
                ></Image>
                 <Image
                 alt="client-img"
                    src="/images/react.png"
                    width="100"
                    height="100"
                    className=" rounded-2 "
                ></Image>
             
                 <Image
                 alt="client-img"
                    src="/images/bootstrap.png"
                    width="100"
                    height="100"
                    className=" rounded-2 "
                ></Image>
                 <Image
                 alt="client-img"
                    src="/images/nextjs.png"
                    width="100"
                    height="100"
                    className=" rounded-2 "
                ></Image>
                </div>
               
                 
              </div>

              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src="/images/mypic.png"
                    width="50"
                    height="50"
                    className=" rounded-2"
                  />

                  <div>
                  <h6>Arsalan Bashir</h6>
                    <h6>Backend</h6>
                  </div>
                </div>

                <div className="image-container">
                <Image
                 alt="client-img"
                    src="/images/nodejs.svg"
                    width="100"
                    height="100"
                    className=" rounded-2"
                ></Image>
                 <Image
                 alt="client-img"
                    src="/images/php.png"
                    width="100"
                    height="100"
                    className=" rounded-2"
                ></Image>
             
                 <Image
                 alt="client-img"
                    src="/images/java.svg"
                    width="100"
                    height="100"
                    className=" rounded-2"
                ></Image>
                 <Image
                 alt="client-img"
                    src="/images/exp.png"
                    width="100"
                    height="100"
                  
                    className=" rounded-2"
                ></Image>
                </div>
              </div>

              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src="/images/mypic.png"
                    width="50"
                    height="50"
                    className=" rounded-2"
                  />

                  <div>
                  <h6>Arsalan Bashir</h6>
                    <h6>Database</h6>
                  </div>
                </div>
                <Image
                 alt="client-img"
                    src="/images/mssql.png"
                    width="100"
                    height="100"
                    className=" rounded-2"
                ></Image>
                 <Image
                 alt="client-img"
                    src="/images/mongo.png"
                    width="100"
                    height="100"
                    className=" rounded-2"
                ></Image>
             
                 <Image
                 alt="client-img"
                    src="/images/mysql.png"
                    width="100"
                    height="100"
                    className=" rounded-2"
                ></Image>
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
