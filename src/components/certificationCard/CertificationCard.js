import React from "react";
import "./CertificationCard.css";
import { Fade } from "react-reveal";
import { style } from "glamor";

function CertificationCard(props) {
  const certificate = props.certificate;
  const theme = props.theme;
  const styles = style({
    background: theme.glassBackground,
    backdropFilter: theme.glassBackdropBlur,
    WebkitBackdropFilter: theme.glassBackdropBlur,
    boxShadow: theme.glassShadow,
    border: `1px solid ${theme.glassBorder}`,
    borderRadius: "25px",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    ":hover": {
      boxShadow: `0 15px 45px ${theme.accentColor}`,
      transform: "translateY(-10px) scale(1.02)",
      background: theme.cardHover,
    },
  });

  return (
    <Fade bottom duration={2000} distance="20px">
      <div className="cert-card" {...styles}>
        <div className="content">
          <a
            href={certificate.certificate_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="content-overlay"></div>
            <div
              className="cert-header"
              style={{ backgroundColor: certificate.color_code }}
            >
              <img
                className="logo_img"
                src={require(`../../assests/images/${certificate.logo_path}`)}
                alt={certificate.alt_name}
              />
            </div>
            {/* <div className="content-details fadeIn-top">
									<h3 className="content-title" style={{ color: theme.body }}>
										Certificate
									</h3>
								</div> */}
          </a>
        </div>
        <div className="cert-body">
          <h2 className="cert-body-title" style={{ color: theme.text }}>
            {certificate.title}
          </h2>
          <h3
            className="cert-body-subtitle"
            style={{ color: theme.secondaryText }}
          >
            {certificate.subtitle}
          </h3>
        </div>
      </div>
    </Fade>
  );
}

export default CertificationCard;
