import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: right;
  align-items: center;
  height: 60px;
  font-size: small;
`;
const LinkMenu = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
`
const NavLink = styled.a`
  padding-left: 15px;
  text-decoration: none;
  color: #000;
  svg{
    padding: 3px 11px 0px 11px;
    height: 24px;
    width: 24px;
  }
`;
const Button = styled.button`
  font-family: Google Sans,Roboto,RobotoDraft,Helvetica,Arial,sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.25px;
  line-height: 16px;
  margin-left: 10px;
  margin-right: 8px;
  min-width: 96px;
  padding: 9px 23px;
  text-align: center;
  vertical-align: middle;
  border-radius: 4px;
  box-sizing: border-box;
  color: #fff;
  background-color: rgb(26, 115, 232);
  border: 1px solid transparent;
  outline: none;
}
  &:hover{
  background: #2b7de9;
  box-shadow: 0 1px 2px 0 rgba(66,133,244,0.3),0 1px 3px 1px rgba(66,133,244,0.15);
  }
`;

const Navbar = () => {
  return (
    <>
      <Nav>
        <LinkMenu>
          <NavLink>Gmail</NavLink>
          <NavLink>Images</NavLink>
          <NavLink>
            <svg focusable="false" viewBox="0 0 24 24">
              <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z">
              </path>
            </svg>
          </NavLink>
          <Button>Sign in</Button>
        </LinkMenu>
      </Nav>
    </>
  )
}

export default Navbar