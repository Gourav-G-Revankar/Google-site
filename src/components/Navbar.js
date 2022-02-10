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
  margin-right: 16px;
  display: flex;
  align-items: center;
`
const NavLink = styled.a`
  padding-left: 15px;
  text-decoration: none;
  color: #000;
  svg{
    padding: 3px 8px 0px 8px;
    height: 24px;
    width: 24px;
  }
`;
const Button = styled.button`
  padding: 9px 23px;
  color: #fff;
  background-color: rgb(26, 115, 232);
  text-align: center;
  border-radius: 4px;
  outline: none;
  margin-left: 8px;
  border: 1px solid transparent;
  font-size: 14px
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
          <Button>Sign In</Button>
        </LinkMenu>
      </Nav>
    </>
  )
}

export default Navbar