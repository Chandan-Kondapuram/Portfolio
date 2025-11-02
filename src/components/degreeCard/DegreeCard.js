import React from "react";
import "./DegreeCard.css";
import { Fade, Flip } from "react-reveal";
import { style } from "glamor";

function DegreeCard(props) {
  const degree = props.degree;
  const theme = props.theme;

  const style_img = style({
    width: "220px",
    height: "auto",
    borderRadius: " 50%",
    padding: "10px",
    border: `1px solid ${theme.text}`,
    marginRight: "50px",
    boxShadow: `0px 0px 2px ${theme.text}`,
    transition: "all 0.2s ease-in-out",
    ":hover": {
      color: "rgba(255, 255, 255, 1)",
      boxShadow: `0 2px 10px ${theme.text}`,
    },
    "@media (max-width: 768px)": {
      marginLeft: "50px",
      marginBottom: "15px",
      width: "175px",
    },
  });

  const card_body = style({
    border: `1px solid ${theme.glassBorder}`,
    borderRadius: "25px",
    width: "90%",
    margin: "10px",
    background: theme.glassBackground,
    backdropFilter: theme.glassBackdropBlur,
    WebkitBackdropFilter: theme.glassBackdropBlur,
    boxShadow: theme.glassShadow,
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    ":hover": {
      color: "rgba(255, 255, 255, 1)",
      boxShadow: `0 12px 40px ${theme.accentColor}`,
      transform: "translateY(-5px)",
      background: theme.cardHover,
    },
    "@media (max-width: 768px)": {
      width: "100%",
    },
  });

  const button_visit = style({
    textDecoration: "none",
    color: "rgba(255, 255, 255, 1)",
    background: theme.buttonBackground,
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    border: `1px solid ${theme.glassBorder}`,
    padding: "15px 30px",
    marginTop: "25px",
    borderRadius: "15px",
    marginBottom: "20px",
    width: "auto",
    minHeight: "50px",
    fontWeight: "bold",
    fontFamily: "Google Sans Regular",
    fontSize: "17px",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    cursor: "pointer",
    ":hover": {
      color: "rgba(255, 255, 255, 1)",
      boxShadow: `0 12px 40px ${theme.accentColor}`,
      transform: "translateY(-3px) scale(1.05)",
      background: theme.buttonHover,
    },
  });

  return (
    <div className="degree-card">
      <Flip left duration={2000}>
        <div {...style_img}>
          <img
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              transform: "scale(50%, 50%)",
            }}
            src={require(`../../assests/images/${degree.logo_path}`)}
            alt={degree.alt_name}
          />
        </div>
      </Flip>
      <Fade right duration={2000} distance="40px">
        <div {...card_body}>
          <div
            className="body-header"
            // style={{ backgroundColor: theme.accentColor }}
          >
            <div className="body-header-title">
              <h2 className="card-title" style={{ color: theme.text }}>
                {degree.title}
              </h2>
              <h3 className="card-subtitle" style={{ color: theme.text }}>
                {degree.subtitle}
              </h3>
            </div>
            <div className="body-header-duration">
              <h3 className="duration" style={{ color: theme.text }}>
                {degree.duration}
              </h3>
            </div>
          </div>
          <div className="body-content">
            {degree.descriptions.map((sentence) => {
              return (
                <p
                  key={sentence}
                  className="content-list"
                  style={{ color: theme.text }}
                >
                  {sentence}
                </p>
              );
            })}
            <a
              href={degree.website_link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", textAlign: "center" }}
            >
              <p
                {...button_visit}
                style={{
                  marginRight: "23px",
                  textDecoration: "none",
                  float: "right",
                  backgroundColor: theme.accentColor,
                }}
              >
                Visit Website
              </p>
            </a>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default DegreeCard;
