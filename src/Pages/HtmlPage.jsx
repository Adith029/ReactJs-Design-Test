import React from "react";
import "../Styles/HtmlPage.css";
import { RxCross1 } from "react-icons/rx";
import image1 from "../Assets/Fortnite-Next-Gen-Superheroes.avif";
import { Button, Col, Container, Row } from "react-bootstrap";

function HtmlPage() {
  return (
    <>
      <div className="x-div">
        <RxCross1 className="x" />
      </div>
      <div className="description-1">
        <p className="descPara-1">
          {" "}
          Epic Games : An American video game and software developer <br /> and
          publisher based in Cary, North Carolina.
        </p>
      </div>

      <div>
        <img src={image1} alt="" className="image1" />
      </div>

      <div>
        <p className="descPara-2">
          Create, play, and battle with friends for free in Fortnite. Be the
          last player standing in Battle Royale and Zero Build, experience a
          concert <br /> or live event, or discover over a million creator made
          games, including racing, parkour, zombie survival, and more. Each
          Fortnite island has <br /> an individual age rating so you can find
          the one that's right for you and your friends. Find it all in Fortnite
          ... Drop In.
        </p>
      </div>

      <div>
        <Button className="visit-website">Visit Website</Button>
      </div>
      <Container className="flexImagesContainer">
        <Row>
          <Col>
            <img
              src="https://s3-alpha-sig.figma.com/img/7147/9344/2501faa7f289434a9b99bafaa474cc0e?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d8HDTlxmw117HmpP~7h9dtfD-enULnsw3OoIeh2oBd2N7vvhAiaeKgk0rBSPmXwORzVM-g7c1IgegjDAjEftRLNi~-8WvCDWIRWHGyYoRE35sZl7jKvdtqIyT3XaT1Cw3VaX~U9hef6uTVFSlJOs~xurJcscLOuriIHl5FZ222v0sLP9uDpGfFDQheYS-m-zpqyDPkH62u-uLPl7RwG1e0TYNwP90KSlgJUA~gQfZtcLXVHdEm15gGx881ZOuH631HqcKzgXN72G8xlX-GzGpWFmISQ7U0ScId162~tngGyKzXNapcXLnJOsn9cL-Xn5YxEjsyVCruq2vDMTofUY1A__"
              alt=""
              className="flexImages"
            />
            <p className="flex-para-1">
              Explore large, destructible <br /> environments where no two games{" "}
              <br /> are ever the same.
            </p>
          </Col>
          <Col>
            <img
              src="https://s3-alpha-sig.figma.com/img/ff28/c642/d7258eeaa99e5ea5585055099ce474ea?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IsZie-tYJ5V0owMBb8qdDdLPGP8eVJVyBrDNll3V0Q39Ah7EWcbk5-RUxG5~lTbioKIlKRCeVGRAI95o1GrUbIxLbsqFcPwNm1HoF~9X7Pxih1O-hK~MCrvh9Ym2uQgp0xbU4vN9cOvODHaTe7OonM2CkOakqbZIhr0pgfm9Ek~IRQRPv7ZmEuA1~5RcYvxPQw5MSC73p2DuXmPUHor9hlKKrvg63tuwgK2AGeejuY8cqCrHs0W1hxbLCYzC-X-0LO95nISM6qcBJOu0bXyF5YrvYQE5Vj-rzVQru7UFy28~N16GKu~DnphCbentZ3Yktmec--cquSkkksCIrB4Umg__"
              alt=""
              className="flexImages"
            />
            <p className="flex-para-1">
              Team up with friends by sprinting,
              <br /> climbing and smashing your way to <br /> earn your Victory
              Royale
            </p>
          </Col>
          <Col>
            <img
              src="https://s3-alpha-sig.figma.com/img/a09a/b5b0/95547eb344eb0c0875a5194c38c5747c?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZZyXB5HxObStebeA6tyi5bfFtUTC30yXB5XBCXk7YB7kjCADbjq3ua3DvFwYfLNRZBGTZdCMT5wflEOWgxLHG6E6SuS8DDauFJksJBTfQGSb6zmFl-hzV1qG-JOSCRJ~uBCukoge7frOcNZAk7VIXonb82t0~r8cTqATdVhsnKp3hFt01KfB4uT~RhxQDfNWcm6MLbbccEh09jnSn1O1V3fj2VPKvDYarcC7DMlqQNr72yBil9zq9iJdRSuLyuJFCYADSTdT6X32L6fKK9VYUZKazG3qECViWkLhwdnvaLp0mGBlmYJM9e4PFdrs~ZRJMSZUJKHpBbw~pwx4HB0Ydg__"
              alt=""
              className="flexImages"
            />
            <p className="flex-para-1">
              Discover even more ways to play <br /> across thousands of
              creator-made <br /> game genres
            </p>
          </Col>
        </Row>
      </Container>

      <div>
        <h1 className="contribution">Our Contribution</h1>
        <p className="descPara-3">
          Our core offering extends beyond mere profit generation; we emphasize
          the growth and active involvement of our user <br />
          community. Collaborating with us represents an investment, rather than
          a mere expenditure. Our dedication to providing <br />
          distinctive digital interactions guarantees unparalleled benefits for
          our clientele.
        </p>
      </div>

      <Container className="userExp">
        <Row>
          <Col>
            <h1 className="userExp-flex">5M</h1>
            <p className="user-para">
              Daily User
              <br />
              Engagements
            </p>
          </Col>
          <Col>
            <h1 className="userExp-flex">$500K</h1>
            <p className="user-para">
              Revenue Surge for an
              <br />
              platform
            </p>
          </Col>
          <Col>
            <h1 className="userExp-flex">10X</h1>
            <p className="user-para">
              Roads on all our
              <br />
              marketing campaigns
            </p>
          </Col>
        </Row>
      </Container>

      <div>
        <h3 className="interested">
          Interested in delving deeper into the project?
        </h3>
        <br />
        <p className="descPara-4">
          If you'd like to explore further details about our initiatives or any
          of our
          <br /> affiliated brands, don't hesitate to connect. You can reach out
          to us via
          <br /> email at <b>hello@abc.com</b> or give us a call at{" "}
          <b>+91 480 20802730.</b>
        </p>
      </div>

      <Container className="twoButtons">
        <Row>
          <Col></Col>
          <Col></Col>
          <Col>
            <Button className="skype">Ring us on skype</Button>
          </Col>
          <Col>
            <Button className="contact">Contact us</Button>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
      <div>
        <p className="rights">
          © 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved
        </p>
      </div>
    </>
  );
}

export default HtmlPage;
