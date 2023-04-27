import HeroImg from "../../assets/images/new/back.png";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import Main from "./components/Main";
import Batman from "./components/Batman";
import TokenDetails from "./components/TokenDetails";
import Movies from "./components/Movies";
import Footer from "../../components/Footer";

const StyledPage = styled.div`
  width: full;
  background: url(${HeroImg});
  background-position: center;
  background-size: cover;
`;

const Home = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1650px)" });

  return (
    <StyledPage
      className={`text-white lg:pt-[100px] sm:pt-[90px] pt-[60px] ${
        isDesktop ? "h-[110vh]" : "h-[100vh]"
      }`}
    >
      <div
        className={`w-full ${
          isDesktop ? "h-[calc(100%-110px)]" : "h-[calc(100%-100px)]"
        } relative`}
      >
        <Main />
        <Batman />
        <TokenDetails />
        <Movies />
        <Footer />
      </div>
    </StyledPage>
  );
};
export default Home;
