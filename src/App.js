import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Post from "./pages/Post";
import profileImage from "./images/profile.jpg";
import styled from "styled-components";
import About from "./pages/About";
import "./App.css";

const Profile = styled.div`
  flex: 1 100%;
`;

const Content = styled.div`
  flex: 2 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImage = styled.img`
  height: 166px;
  width: auto;
  border-radius: 100%;
  padding: 1rem 0;
`;

const Navbar = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding-left: 0;
`;

const Nav = styled.li`
  padding-right: 2rem;
  font-weight: 600;
  color: green;
`;

const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 80%;
  height: 100vh;
`;

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Profile>
          <Wrapper>
            <ProfileImage src={profileImage} />
            <h1>Adi Purnama</h1>
            <span>Software Engineer</span>
          </Wrapper>
        </Profile>
        <Content>
          <Navbar>
            <Nav>
              <Link to="/">Home</Link>
            </Nav>
            <Nav>
              <Link to="/about">About</Link>
            </Nav>
          </Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Content>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
