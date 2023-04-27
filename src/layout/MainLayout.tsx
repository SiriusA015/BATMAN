import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import styled from "styled-components";
import Footer from "../components/Footer";

const StyledPage = styled.div`
  width: 100%;
  background-size: cover;
`;

const MainLayout = () => {
  return (
    <StyledPage className="flex flex-col min-h-screen relative">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
    </StyledPage>
  );
};

export default MainLayout;
