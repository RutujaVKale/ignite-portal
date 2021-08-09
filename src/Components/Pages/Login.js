// import Bgpic1 from "../images/Bgpic1.jpg";
import styled from "styled-components";
import GoogleLogin from "react-google-login";

import { useHistory } from "react-router";
import axios from "axios";

import Error from "../Error";

const AppStyles = styled.div`
  .container{
    display:flex;
    height:100%;
    width=100%;
  }
  .login{
    background:rgb(204,0,0);
    width:780px;
    height:710px;
    
  }
  .heading{
    text-decoration: overline;
    text-align:center;
    background:white;
    height:10%;
    width:20%;
    color:rgb(204,0,0);
    padding-top:0.3rem;
    margin-top:0.6rem;
  }
  .innerbox{
    text-align:center;
    font-size:1.1rem;
    background:white;
    width:60%;
    height:60%;
    margin-top:4rem;
    margin-left:10rem;
    font-family:Palatino Linotype;
    padding-top:2rem;
    padding-left:0.5rem;
    padding-right:0.5rem;
    border-radius: 25px
  }  
`;

const Login = () => {
  let history = useHistory();
  //   const onLoginSuccess = (res) => {
  //     history.push("/");
  //   };

  const onLoginSuccess = (res) => {
    //profile information of user trying to login
    var profile = res.profileObj;
    console.log(profile);
    console.log(profile.givenName);

    axios
      .get(`http://localhost:8080/login/getUser/${profile.email}`)
      .then((response) => {
        console.log(response);
        console.log(response.data);
        localStorage.setItem("userid", response.data.userid);
        localStorage.setItem("username", response.data.name);
        localStorage.setItem("displayname", profile.givenName);
        localStorage.setItem("role", response.data.role);

        // render uer to home page
        history.push("/");
        console.log("registered user");
      })
      .catch(function (error) {
        if (error.response.request.status == 401) {
          alert("This Email Id is not registered. Try using another Email Id");
        }
        <Error />;
      });
  };

  const onLoginFailure = (res) => {
    alert("Login Failed");
  };

  return (
    <AppStyles>
      <div className="container">
        <div className="background">
          {/* <img
            src={Bgpic1}
            alt=""
            style={{ height: "710px", width: "750px" }}
          /> */}
        </div>

        <div className="login">
          <div className="heading">
            <h1>MENTOS</h1>
          </div>
          <div className="innerbox">
            <h2>Check.Schedule.Collaborate.</h2>
            <p>
              <b>
                Mentos is a platform for mentors and mentees.<br></br> Whether
                you have to check free slots or book slots.<br></br>
                Mentos is a platform for you !!! <br></br>To collaborate
                efficiently.
              </b>
            </p>
            <br></br>
            <hr></hr>
            <h2>Login </h2>
            <GoogleLogin
              clientId="415218634076-323ovbk93f9jptho379cs6cr7ffnlee2.apps.googleusercontent.com"
              buttonText="Sign in via Gmail"
              onSuccess={onLoginSuccess}
              onFailure={onLoginFailure}
              cookiePolicy={"single_host_origin"}
              theme="dark"
            />
          </div>
        </div>
      </div>
    </AppStyles>
  );
};
export default Login;
