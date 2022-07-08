import "../SignInForm/SignInForm.css";
import { Link } from "react-router-dom";

export const SignInForm = () => {
  return (
    <>
      <section className="sign-in">
        <div className="container">
          <div className="cta">
            <div className="cta-text-box">
              <h2 className="heading-secondary">
                Where will tomorrow take you?
              </h2>
              <p className="cta-text">
                To become the world's most loved, most flown, and most
                profitable airline
              </p>

              <form className="cta-form">
                <div>
                  <label htmlFor="username">UserName</label>
                  <input id="username" type="text" placeholder="UserName" />
                </div>

                <div>
                  <label htmlFor="password">Password</label>
                  <input id="password" type="text" />
                </div>

                <div>
                  <label htmlFor="select-auth">Choose your Authorization</label>
                  <select id="select-auth">
                    <option value="">Choose one</option>
                    <option value="admin">Level 1</option>
                    <option value="member">Level 2</option>
                  </select>
                </div>

                <Link to="/FlightControl" className="btn">
                  Sign in
                </Link>
              </form>
            </div>
            <div className="cta-img-box" role="img"></div>
          </div>
        </div>
      </section>
    </>
  );
};
