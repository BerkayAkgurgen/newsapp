import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CancelIcon, ERPLYLogo } from "../../assets/svg";
import * as ROUTES from "../../configs/RouterConfig";
import { LOGIN_INFO_UPDATE } from "../../store/actionsName";
import LoginInst from "../../assets/img/loginInst.png";
import RegisterInst from "../../assets/img/registerInst.png";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [modalToggle, setmodalToggle] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const updateModalToggle = () => setmodalToggle((prevState) => !prevState);

  const updateAccessToken = (e: React.ChangeEvent<HTMLInputElement>) =>
    setAccessToken(e.target.value);

  const submitLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate(ROUTES.MAIN);
    }, 2000);
    dispatch({
      type: LOGIN_INFO_UPDATE,
      payload: { email: email, accessToken: accessToken },
    });
  };

  return (
    <div className={"login-container"}>
      <ERPLYLogo />
      <div>
        <form onSubmit={submitLogin}>
          <div className="form-group">
            <input
              type="email"
              name="Email"
              value={email}
              onChange={updateEmail}
              required
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label htmlFor="Email">Email</label>
          </div>
          <div className="form-group">
            <input
              type={"text"}
              name="accessToken"
              value={accessToken}
              onChange={updateAccessToken}
              required
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label htmlFor="accessToken">Access Token</label>
          </div>
          <span className="howCan" onClick={updateModalToggle}>
            How can I get an access token?
          </span>
          <button type={"submit"}>
            {loading ? (
              <div className="spinner">
                <div className="spinner-blade"></div>
                <div className="spinner-blade"></div>
                <div className="spinner-blade"></div>
                <div className="spinner-blade"></div>
                <div className="spinner-blade"></div>
                <div className="spinner-blade"></div>
                <div className="spinner-blade"></div>
                <div className="spinner-blade"></div>
                <div className="spinner-blade"></div>
                <div className="spinner-blade"></div>
                <div className="spinner-blade"></div>
                <div className="spinner-blade"></div>
              </div>
            ) : (
              <>Login</>
            )}
          </button>
        </form>
      </div>
      {modalToggle && (
        <>
          <div className="overlay" onClick={updateModalToggle}></div>
          <div className={"modalWrapper"}>
            <div onClick={updateModalToggle}>
              <CancelIcon />
            </div>
            <h1>How can I get an access token?</h1>
            <p>
              If you visit "https://newsapi.org/register", you should click on
              "Get one here" on this login page.
            </p>
            <img src={LoginInst} alt={"loginInst"} />
            <p>
              Then, if you successfully complete the register form which is
              added photo below, your access token will appear on the screen.
            </p>
            <img src={RegisterInst} alt={"registerInst"} />
          </div>
        </>
      )}
    </div>
  );
};

export default Login;
