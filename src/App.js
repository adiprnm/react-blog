import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import profileImage from "./images/profile.jpg";
import styled from "styled-components";
import Experience from "./pages/Experience";
import rails from "./images/rails.svg";
import laravel from "./images/laravel.svg";
import php from "./images/php.svg";
import nodejs from "./images/nodejs.svg";
import reactjs from "./images/reactjs.svg";

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  padding: 0 1.5rem;
`;

const ProfileImage = styled.img`
  height: 166px;
  width: 166px;
  border-radius: 100%;
  padding: 1rem 0;
`;

const Navigation = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 1rem 0;
`;

const NavItem = styled.li`
  padding: 0 1rem;
  font-weight: 600;
  color: green;
`;

const Layout = styled.div`
  display: flex;
  margin: 0;
  flex-direction: column;
  align-items: center;
  background-color: #eceff1;
  height: 100vh;
`;

const Icon = styled.img`
  height: 70px;
`;

const JobTitle = styled.span`
  font-size: 12pt;
  color: #757575;
`;

const Anchor = styled(Link)`
  text-decoration: none;
  color: #00897b;
`;

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Container>
          <Profile>
            <ProfileImage src={profileImage} />
            <h2>Adi Purnama</h2>
            <JobTitle>Software Engineer</JobTitle>
            <Navigation>
              <NavItem>
                <Icon src={rails} />
              </NavItem>
              <NavItem>
                <Icon src={laravel} />
              </NavItem>
              <NavItem>
                <Icon src={php} />
              </NavItem>
              <NavItem>
                <Icon src={nodejs} />
              </NavItem>
              <NavItem>
                <Icon src={reactjs} />
              </NavItem>
            </Navigation>
          </Profile>
          <Navigation>
            <NavItem>
              <Anchor to="/">Home</Anchor>
            </NavItem>
            <NavItem>
              <Anchor to="/experiences">Experiences</Anchor>
            </NavItem>
          </Navigation>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experiences" element={<Experience />} />
          </Routes>
        </Container>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
