import "./Home.css";
import plane1 from "../assets/plane1.jpg";
import jet1 from "../assets/jet1.jpg";
import jet3 from "../assets/jet3.jpg";
import { Link } from "react-router-dom";
import customer1 from "../assets/customer-1.jpg";
import customer2 from "../assets/customer-2.jpg";
import customer3 from "../assets/customer-3.jpg";
import customer4 from "../assets/customer-4.jpg";
import customer5 from "../assets/customer-5.jpg";
import customer6 from "../assets/customer-6.jpg";
import { SignInForm } from "../components/SignInForm";

export const Home = () => {
  return (
    <>
      <section className="section-hero">
        <div className="hero">
          <div className="hero-text-box">
            <h1 className="heading-primary">
              Getting you from point A to point B, in comfort.
            </h1>
            <p className="hero-decription">
              Dedication to the highest quality of customer service delivered
              with a sense of warmth, friendliness, individual pride, and
              company spirit.
            </p>

            <div className="delivery-meals">
              <div className="delivered-imgs">
                <img src={customer1} />
                <img src={customer2} />
                <img src={customer3} />
                <img src={customer4} />
                <img src={customer5} />
                <img src={customer6} />
              </div>
              <p className="delivered-text">
                <span>10,000+</span> happy members!
              </p>
            </div>
          </div>
          <div className="hero-img-box">
            <img src={plane1} className="hero-img1" />
            <img src={jet1} className="hero-img2" />
            <img src={jet3} className="hero-img3" />
          </div>
        </div>
      </section>
      <SignInForm />
    </>
  );
};
