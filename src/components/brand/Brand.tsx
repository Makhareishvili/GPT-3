import "./brand.css";
import google from "../../assets/google.png";
import slack from "../../assets/slack.png";
import atlassian from "../../assets/atlassian.png";
import dropbox from "../../assets/dropbox.png";
import shopify from "../../assets/shopify.png";

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        <img src={google} alt="google pic" />
      </div>
      <div>
        <img src={slack} alt="slack pic" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian pic" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox pic" />
      </div>
      <div>
        <img src={shopify} alt="shopify pic" />
      </div>
    </div>
  );
};
export default Brand;
