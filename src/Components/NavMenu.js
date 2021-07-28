import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavMenuStyles = styled.div`
  display: flex;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  height: 50px;
  width: 100%;
  padding: 1rem 0;
  background-color: rgb(204, 0, 0);
  color: white;

  .container {
    margin-left: 0.5rem;
    padding-left: 0.5rem;
    height: 55px;
    width: 7rem;
    background-color: white;
    color: rgb(204, 0, 0);
    text-decoration: overline;
    font-size: 1rem;
  }
  .Welcome {
    margin-right: 1rem;
    font-size: 1.2rem;
  }
  ul {
    list-style-type: none;
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: left;
    li {
      display: inline-block;
      border-radius: 9px;
      transition: 0.3s ease backgroung-color;
      /*&:hover{
              background-color:;
          }*/
      a {
        display: inline-block;
        font-family: Georgia;
        padding: 1rem 2rem;
        font-size: 1.5rem;
        outline: none;
        text-decoration: none;
        color: white;
      }
      /*.active{
          background-color:black;
      }*/
    }
  }
`;
function NavMenu() {
  return (
    <NavMenuStyles>
      <div className="container">
        <h2>MENTOS</h2>
      </div>
      <ul>
        <li>
          <NavLink to="/home" exact>
            {" "}
            Home{" "}
          </NavLink>
        </li>

        <li>
          <NavLink to="/schedule"> Schedule </NavLink>
        </li>

        <li>
          <NavLink to="/newsLetter"> NewsLetter </NavLink>
        </li>

        <li>
          <NavLink to="/about"> About </NavLink>
        </li>
      </ul>
      <div className="Welcome">
        Welcome {localStorage.getItem("displayname")}
      </div>
    </NavMenuStyles>
  );
}
export default NavMenu;
