import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={""}
          alt="Founder"
        />

        <h2>Subimal Das </h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, porro!</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://twitter.com/subimaldas25" target={"blank"}>
            <AiFillTwitterCircle />
          </a>
          <a href="https://instagram.com/subimaldas.in" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/subimaldas" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
