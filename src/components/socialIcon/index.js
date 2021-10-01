import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
export default function Social() {
  return (
    <div className="social-icons">
      <div className="social-icons-initial">
        <a href="#">
          <AiFillGithub size={40} color="black" />
        </a>
      </div>
      <div className="social-icons-initial">
        <a href="#">
          <AiFillInstagram size={40} color="#c2185b" />
        </a>
      </div>

      <div className="social-icons-initial">
        <a href="#">
          <AiFillLinkedin size={40} color="#0d47a1" />
        </a>
      </div>
    </div>
  );
}
