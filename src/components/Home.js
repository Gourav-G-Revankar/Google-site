import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 218px;
  height: calc(100% - 560px);

  img {
    width: 272px;
    height: 92px;
    margin-top: auto;
  }
`;

const SearchSection = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Form = styled.form``;

const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 14px;
  background: #fff;
  border: 1px solid #dfe1e5;
  box-shadow: none;
  border-radius: 24px;
  z-index: 3;
  height: 44px;
  margin: 0 auto;
  max-width: 556px;
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
  height: 70px;
  padding-top: 18px;
  top: 53px;
  z-index: 0;

  button {
    background-color: #f8f9fa;
    border: 1px solid #f8f9fa;
    border-radius: 4px;
    color: #3c4043;
    font-family: Roboto, arial, sans-serif;
    font-size: 14px;
    margin: 11px 6px;
    padding: 0 16px;
    line-height: 27px;
    height: 36px;
    min-width: 54px;
    text-align: center;
    cursor: pointer;
    user-select: none;
  }
`;

const SearchIcon = styled.span`
  color: #9aa0a6;
  height: 20px;
  width: 20px;
  padding-right: 10px;
  display: flex;
  align-items: center;

  & svg {
    fill: #9aa0a6;
  }
`;

const SearchInput = styled.input`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  height: 40px;
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.87);
  word-wrap: break-word;
  outline: none;
  height: 34px;
  font-size: 16px;
`;

const BottomSection = styled.div`
    color: #3c4043;
    display: inline-block;
    line-height: 28px;
    text-align: center;
    font-size: small;
`;

const BottomSection__list = styled.a`
  padding: 0 5px;
  color: #1a0dab;
  text-decoration: none;
  font-size: 13px;
  line-height: 28px;
`;

const Footer = styled.div`
  background: #f2f2f2;
  position: absolute;
  bottom: 0;
  width: 100%;
`;
const Footer__Container1 = styled.div`
  padding: 15px 30px;
  border-bottom: 1px solid #dadce0;
  font-size: 15px;
  color: #70757a;
`;
const Footer__Container2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20px;
`;

const Footer__SubContainer2 = styled.div`
  display: flex;
`;

const Footer__P = styled.p`
  color: #70757a;
  margin: 0px;
  padding: 15px;
  font-size: 14px;
  white-space: nowrap;
`;

const Home = () => {
  return (
    <>
    <Container>
      <LogoSection>
        <img
          src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
          alt='google-logo'
        />
      </LogoSection>
      <SearchSection>
        <Form action='/' method='GET' role='search'>
          <Search>
            <SearchIcon>
              <svg
                focusable='false'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
              >
                <path d='M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' />
              </svg>
            </SearchIcon>
            <SearchInput type='text' />
          </Search>
        </Form>
        <ButtonSection>
          <button>Google Search</button>
          <button>I'm Feeling Lucky</button>
        </ButtonSection>
        <BottomSection>
        Google offered in:
            <BottomSection__list>हिन्दी</BottomSection__list>
            <BottomSection__list>বাংলা</BottomSection__list>
            <BottomSection__list>తెలుగు</BottomSection__list>
            <BottomSection__list>मराठी</BottomSection__list>
            <BottomSection__list>தமிழ்</BottomSection__list>
            <BottomSection__list>ગુજરાતી</BottomSection__list>
            <BottomSection__list>ಕನ್ನಡ</BottomSection__list>
            <BottomSection__list>മലയാളം</BottomSection__list>
            <BottomSection__list>ਪੰਜਾਬੀ</BottomSection__list>
        </BottomSection>
      </SearchSection>

    </Container>
    <Footer>
      <Footer__Container1>
        India
      </Footer__Container1>
      <Footer__Container2>
        <Footer__SubContainer2>
          <Footer__P>About</Footer__P>
          <Footer__P>Advertising</Footer__P>
          <Footer__P>Business</Footer__P>
          <Footer__P>How Search works</Footer__P>
        </Footer__SubContainer2>
        <Footer__SubContainer2>
          <Footer__P>Privacy</Footer__P>
          <Footer__P>Terms</Footer__P>
          <Footer__P>Settings</Footer__P>
        </Footer__SubContainer2>
      </Footer__Container2>
    </Footer>
    </>
  );
};

export default Home;
