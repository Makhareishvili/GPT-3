import { Feature } from "../../components";
import "./whatGPT3.css";

const featuresData = [
  {
    tittle: "Chatbots",
    text: "We so opinion friends me message as delight. Whole front do of plate heard oh ought.",
  },
  {
    tittle: "Knowledgebase",
    text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b",
  },
  {
    tittle: "Education",
    text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b",
  },
];
const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          tittle={"What is GPT-3"}
          text={
            "We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
          }
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        {featuresData.map((item, index) => (
          <Feature
            tittle={item.tittle}
            text={item.text}
            key={item.tittle + index}
          />
        ))}
      </div>
    </div>
  );
};
export default WhatGPT3;
