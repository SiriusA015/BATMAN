import HeroImg from "../../assets/images/new/back.png";
import { useEffect, useState, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { ScrollType } from "../../types";
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
  const [scrollType, setScrollType] = useState(ScrollType.Initial);
  const isDesktop = useMediaQuery({ query: "(min-width: 1650px)" });
  const prevScrollY = useRef(0);
  const [goingUp, setGoingUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
      }
      prevScrollY.current = currentScrollY;
      let dt = document.body.scrollHeight - window.innerHeight;
      if (currentScrollY < dt / 3) {
        setScrollType(ScrollType.Initial);
      } else if (currentScrollY < (2 * dt) / 3) {
        setScrollType(ScrollType.Middle);
      } else {
        setScrollType(ScrollType.End);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);

  return (
    <StyledPage
      className={`text-white lg:pt-[100px] sm:pt-[90px] pt-[60px] ${
        isDesktop ? "h-[110vh]" : "h-[100vh]"
      }`}
    >
      <div className="w-full h-full relative">
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
