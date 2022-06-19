import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import profileImage from "./images/profile.jpg";
import styled from "styled-components";
import Experience from "./pages/Experience";
import "./App.css";

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eceff1;
  flex: 1 1 40%;
`;

const Content = styled.div`
  flex-basis: 60%;
  background-color: wheat;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;
`;

const ProfileImage = styled.img`
  height: 166px;
  width: 166px;
  border-radius: 100%;
  padding: 1rem 0;
`;

const Navbar = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 1rem 0;
`;

const Nav = styled.li`
  padding: 0 1rem;
  font-weight: 600;
  color: green;
`;

const Layout = styled.div`
  display: flex;
  margin: 0;
  padding: 0 25rem;
  flex-direction: column;
  background-color: #eceff1;
  height: 100vh;
`;

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Wrapper>
          <Profile>
            <ProfileImage src={profileImage} />
            <h1>Adi Purnama</h1>
            <span>Software Engineer</span>
          </Profile>
          <Navbar>
            <Nav>
              <Link to="/">Home</Link>
            </Nav>
            <Nav>
              <Link to="/experiences">Experiences</Link>
            </Nav>
          </Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experiences" element={<Experience />} />
          </Routes>
        </Wrapper>
        {/* <Content>
        </Content> */}
      </Layout>
    </BrowserRouter>
  );
}

export default App;
