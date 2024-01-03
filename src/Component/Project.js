import React from "react";

export default function Project() {
  return (
    <div
      className="container-fluid"
      
      style={{fontFamily:'serif',
        backgroundColor: "#333",  // Background color
        height: "100vh",
        backgroundImage: "linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent)", // Background texture
      }}
    >
      <div className="row">
        <div className="col-12 text-center pt-5">
          <h1 style={{ color: "#fff" }}>Computer Seekho.COM</h1>
          <h2 style={{ color: "#fff" }}>(06/2023 - 08/2023)</h2>
          <p style={{ color: "#fff" }}>
            A web-based system developed using React Js, Spring 6, Maven 3,
            Spring boot 3, REST API, MySQL 8, JPA, JUnit 4, JWT, MicroService,
            Docker, Web API Core, SQL Server, Entity Core, React Js. This website
            is developed for a computer institute that conducts various computer
            courses for all age groups. One part of the System provides
            information on each course and the other is the admin part. The admin
            part is restricted to office staff and allows staff to log all
            inquiries, do follow-up for all inquiries, do registration, and keep
            payment details of each and every student and course. The website is
            developed in multiple technologies using MicroServices and Docker
          </p>
        </div>
        <div className="row">
          <div className="col-12 text-center pt-5">
            <h1 style={{ color: "#fff" }}>
              Modern Toilet System For Indian Railways
            </h1>
            <h2 style={{ color: "#fff" }}>(11/2021 - 04/2022)</h2>
            <p
              className="col-12 text-center pt-5"
              style={{ color: "#fff" }}
            >
              In this system, when the railway engine is coming at the platform,
              the reservoirs of the modern toilet system are coming under
              working by using the speed of the railway shaft. and the human
              wastes are stored in the main reservoir until the train stands on
              the platform. When the train leaves the railway platform at a
              certain distance from the end of the platform, the human wastes
              are discharged with chlorine action.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
