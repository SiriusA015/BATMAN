import HeroImg from "../../assets/images/new/back.png";
import Telegram from "../../assets/images/new/telegram.png";
import Medium from "../../assets/images/new/medium.png";
import Instagram from "../../assets/images/new/instagram.png";
import Dc from "../../assets/images/new/dc.png";
import Group from "../../assets/images/new/Group.png";
import Man1 from "../../assets/images/new/man1.png";
import Man2 from "../../assets/images/new/man2.png";
import Img1 from "../../assets/images/new/img1.png";
import Img2 from "../../assets/images/new/img2.png";
import Img3 from "../../assets/images/new/img3.png";
import Peakpx from "../../assets/images/new/peakpx.png";
import { useEffect, useState, useRef, Fragment } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { ScrollType } from "../../types";

const StyledPage = styled.div`
  width: full;
  background: url(${HeroImg});
  background-position: center;
  background-size: cover;
`;

const Home = () => {
  const [scrollType, setScrollType] = useState(ScrollType.Initial);
  const isDesktop = useMediaQuery({ query: "(min-width: 1650px)" });
  const isHub = useMediaQuery({ query: "(max-height: 601px)" });
  const isMaxHub = useMediaQuery({ query: "(max-height: 801px)" });
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
        <div className="w-full xl:px-[100px] lg:px-[80px] md:px-[40px] px-[20px]">
          <div className="2xl:mt-[100px] xl:mt-[70px] mt-[50px] font-[700] xl:text-[72px] lg:text-[60px] text-[40px] text-white">
            BATMAN
          </div>
          <div className="2xl:mt-[20px] lg:mt-[14px] mt-[12px] font-[600] xl:text-[28px] lg:text-[24px] text-[22px] text-white">
            The Dark Knight
          </div>
          <div className="2xl:mt-[40px] xl:mt-[30px] lg:mt-[26px] mt-[20px] font-[700] lg:text-[14px] text-[12px] text-[#B2B2B2] flex gap-[40px]">
            <div>ERC20</div>
            <div>$BM</div>
          </div>
          <div className="2xl:mt-[40px] xl:mt-[30px] lg:mt-[26px] mt-[20px] font-[600] lg:text-[18px] text-[15px] text-white">
            You either die a hero or live long enough to see yourself become the
            villain.
          </div>
          <div className="mt-[20px] font-[400] 2xl:text-[16px] xl:text-[14px] text-[12px] text-[#eeeeee]">
            One of the most iconic fictional characters in the world, Batman has
            <br></br>
            dedicated his life to an endless crusade{" "}
            <span className="text-white 2xl:text-[20px] xl:text-[18px] text-[14px] underline cursor-pointer">
              Read More
            </span>
          </div>
          <div className="2xl:w-[290px] xl:w-[260px] lg:w-[220px] w-[180px] 2xl:h-[57px] xl:h-[52px] lg:h-[48px] h-[42px] 2xl:mt-[50px] xl:mt-[42px] md:mt-[33px] mt-[24px] rounded-[10px] bg-[#FDFF00] font-[550] 2xl:text-[26px] lg:text-[24px] text-[22px] text-black flex justify-center items-center cursor-pointer hover:shadow-2xl hover:scale-[1.02] transition duration-500">
            $ Buy BM
          </div>
          <div className="lg:mt-[25px] mt-[18px] flex gap-[10px]">
            <div className="bg-[#FDFF00] 2xl:w-[56px] xl:w-[50px] lg:w-[45px] w-[40px] 2xl:h-[56px] xl:h-[50px] lg:h-[45px] h-[40px] flex justify-center items-center cursor-pointer rounded-l-[7px]">
              <img alt="Telegram" src={Telegram} />
            </div>
            <div className="bg-[#FDFF00] 2xl:w-[56px] xl:w-[50px] lg:w-[45px] w-[40px] 2xl:h-[56px] xl:h-[50px] lg:h-[45px] h-[40px] flex justify-center items-center cursor-pointer">
              <img alt="Instagram" src={Instagram} />
            </div>
            <div className="bg-[#FDFF00] 2xl:w-[56px] xl:w-[50px] lg:w-[45px] w-[40px] 2xl:h-[56px] xl:h-[50px] lg:h-[45px] h-[40px] flex justify-center items-center cursor-pointer rounded-r-[7px]">
              <img alt="Medium" src={Medium} />
            </div>
          </div>
          <div className="mt-[70px] flex gap-[16px]">
            <img alt="icon1" src={Dc} className="w-[24px] h-[24px]" />
            <img alt="icon2" src={Group} className="w-[24px] h-[24px]" />
            <div className="font-[400] text-[16px] text-[#929292]">
              The Dark Knight Trilogy is a British-American superhero film
              trilogy based on the DC Comics character Batman.
            </div>
          </div>
        </div>
        <div
          className={`w-full lg:flex justify-center items-center bg-black xl:px-[100px] lg:px-[80px] md:px-[40px] px-[20px] pt-[15px] ${
            isDesktop
              ? "mt-[170px]"
              : `${
                  isMaxHub
                    ? `${isHub ? "mt-[-118px]" : "mt-[0px]"}`
                    : "2xl:mt-[-10px] xl:mt-[75px] lg:mt-[130px] md:mt-[150px] mt-[150px]"
                }`
          }`}
        >
          <div className={`lg:w-[50%] ${isHub ? "mt-[250px]" : ""}`}>
            <div className="font-[700] 2xl:text-[72px] xl:text-[60px] lg:text-[50px] md:text-[42px] text-[32px] text-[#ffffff]">
              Who is Batman?
            </div>
            <div className="mt-[30px] font-[700] 2xl:text-[18px] lg:text-[17px] text-[15px] text-[#ffffff]">
              Batman is a superhero appearing in American comic books published
              by DC Comics.
            </div>
            <div className="mt-[40px] font-[400] 2xl:text-[16px] lg:text-[15px] text-[14px] text-[#ffffff]">
              After witnessing the murder of his parents Dr. Thomas Wayne and
              Martha Wayne as a child, he swore vengeance against criminals, an
              oath tempered by a sense of justice. Bruce Wayne trains himself
              physically and intellectually and crafts a bat-inspired persona to
              fight crime.
            </div>
          </div>
          <div className="lg:w-[50%] flex justify-center items-center">
            <img
              alt="man1"
              src={Man1}
              className="2xl:w-[500px] xl:w-[450px] w-[420px] 2xl:h-[600px] xl:h-[550px] h-[500px]"
            />
          </div>
        </div>
        <div className="w-full lg:flex bg-black xl:px-[100px] lg:px-[80px] md:px-[40px] px-[20px] pt-[78px]">
          <div className="lg:w-[30%] flex items-center justify-center">
            <img
              alt="man2"
              src={Man2}
              className="2xl:w-[500px] xl:w-[450px] lg:w-[420px] md:w-[360px] w-[280px] 2xl:h-[400px] xl:h-[380px] lg:h-[350px] md:h-[310px] h-[280px]"
            />
          </div>
          <div className="lg:w-[70%] lg:mt-0 mt-[80px] flex flex-col items-center">
            <div className="font-[700] text-white 2xl:text-[72px] xl:text-[60px] lg:text-[54px] md:text-[48px] text-[42px] md:ml-[-290px]">
              Token Details
            </div>
            <div
              className="lg:mt-[40px] mt-[20px] rounded-[30px] flex justify-center items-center 2xl:w-[766px] xl:w-[700px] lg:w-[650px] md:w-[600px] sm:w-[400px] w-[300px]  2xl:h-[400px] lg:h-[360px] md:h-[320px] h-[280px] transition duration-500 hover:scale-[1.02]"
              style={{
                background:
                  "linear-gradient(180deg, #0F0F0F 0%, rgba(15, 15, 15, 0) 100%)",
              }}
            >
              <div className="w-[50%] font-[700] 2xl:text-[35px] xl:text-[30px] lg:text-[26px] sm:text-[22px] text-[18px] text-white flex flex-col justify-center pl-[50px]">
                <div className="mb-[14px]">Token Name</div>
                <div className="mb-[14px]">Token Symbol</div>
                <div className="mb-[14px]">Total Supply</div>
                <div className="mb-[14px]">Tax Buy / Sell</div>
                <div>Contract</div>
              </div>
              <div className="w-[50%] font-[400] 2xl:text-[30px] xl:text-[28px] lg:text-[25px] sm:text-[20px] text-[16px] text-[#FDFF00] flex flex-col justify-center items-center">
                <div className="mb-[14px]">Batman</div>
                <div className="mb-[14px]">BM</div>
                <div className="mb-[14px]">1,000,000,000,000 $BM</div>
                <div className="mb-[14px]">5% / 5%</div>
                <div>Etherscan</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col bg-black xl:px-[100px] lg:px-[80px] md:px-[40px] px-[20px] pt-[160px]">
          <div className="text-center font-[700] 2xl:text-[72px] xl:text-[68px] lg:text-[62px] md:text-[58px] text-[45px] text-white mx-auto ">
            Watch the movies
          </div>
          <div className="xl:flex justify-center items-center w-full 2xl:mt-[100px] xl:mt-[80px] md:mt-[50px] mt-[30px] gap-[32px]">
            <div className="rounded-[10px] border-[1px] border-[#383838] w-[392px] h-[200px] flex overflow-hidden xl:mx-0 mx-auto">
              <div className="w-full">
                <img alt="img1" src={Img1} className="w-[140px] h-[200px]" />
              </div>
              <div className="flex flex-col justify-center px-[10px]">
                <div className="font-[700] text-[12px] text-[#929292]">
                  ACTION, ADVENTURE
                </div>
                <div className="mt-[6px] font-[700] text-[18px] text-[#ffffff]">
                  Batman Begins
                </div>
                <div className="mt-[6px] font-[400] text-[12px] text-[#ffffff]">
                  IMDB: <span className="text-[#FDFF00]">8.2</span>
                </div>
                <div className="mt-[6px] font-[400] text-[12px] text-[#929292]">
                  Batman Begins explores the origins of the Batman legend and
                  the Dark Knight's emergence as a force...
                </div>
                <div className="mt-[12px] flex justify-between items-center w-full">
                  <div className="rounded-[8px] bg-[#FDFF00] w-[100px] h-[26px] flex justify-center items-center font-[700] text-[12px] text-[#000000] cursor-pointer">
                    Watch
                  </div>
                  <div className="rounded-[8px] border-[1px] border-[#B2B2B2] w-[100px] h-[26px] flex justify-center items-center font-[700] text-[12px] text-[#B2B2B2] cursor-pointer">
                    Details
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[10px] border-[1px] border-[#383838] w-[392px] h-[200px] flex overflow-hidden xl:mx-0 mx-auto xl:mt-0 mt-[30px]">
              <div className="w-full">
                <img alt="img2" src={Img2} className="w-[140px] h-[200px]" />
              </div>
              <div className="flex flex-col justify-center px-[10px]">
                <div className="font-[700] text-[12px] text-[#929292]">
                  Action, Crime, Drama
                </div>
                <div className="mt-[6px] font-[700] text-[18px] text-[#ffffff]">
                  The Dark Knight
                </div>
                <div className="mt-[6px] font-[400] text-[12px] text-[#ffffff]">
                  IMDB: <span className="text-[#FDFF00]">9.0</span>
                </div>
                <div className="mt-[6px] font-[400] text-[12px] text-[#929292]">
                  Christian Bale and director Christopher Nolan reunite
                  following their blockbuster success with...
                </div>
                <div className="mt-[12px] flex justify-between items-center w-full">
                  <div className="rounded-[8px] bg-[#FDFF00] w-[100px] h-[26px] flex justify-center items-center font-[700] text-[12px] text-[#000000] cursor-pointer">
                    Watch
                  </div>
                  <div className="rounded-[8px] border-[1px] border-[#B2B2B2] w-[100px] h-[26px] flex justify-center items-center font-[700] text-[12px] text-[#B2B2B2] cursor-pointer">
                    Details
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[10px] border-[1px] border-[#383838] w-[392px] h-[200px] flex overflow-hidden xl:mx-0 mx-auto xl:mt-0 mt-[30px]">
              <div className="w-full">
                <img alt="img3" src={Img3} className="w-[140px] h-[200px]" />
              </div>
              <div className="flex flex-col justify-center px-[10px]">
                <div className="font-[700] text-[12px] text-[#929292]">
                  Action, Adventure
                </div>
                <div className="mt-[6px] font-[700] text-[18px] text-[#ffffff]">
                  The Dark Knight Rises
                </div>
                <div className="mt-[6px] font-[400] text-[12px] text-[#ffffff]">
                  IMDB: <span className="text-[#FDFF00]">8.4</span>
                </div>
                <div className="mt-[6px] font-[400] text-[12px] text-[#929292]">
                  Directing one of the most anticipated films of the year,
                  Christopher Nolan returns to Gotham to complete his...
                </div>
                <div className="mt-[12px] flex justify-between items-center w-full">
                  <div className="rounded-[8px] bg-[#FDFF00] w-[100px] h-[26px] flex justify-center items-center font-[700] text-[12px] text-[#000000] cursor-pointer">
                    Watch
                  </div>
                  <div className="rounded-[8px] border-[1px] border-[#B2B2B2] w-[100px] h-[26px] flex justify-center items-center font-[700] text-[12px] text-[#B2B2B2] cursor-pointer">
                    Details
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-black xl:px-[100px] lg:px-[80px] md:px-[40px] px-[20px] 2xl:pt-[180px] xl:pt-[160px] lg:pt-[140px] pt-[100px] 2xl:pb-[119px] xl:pb-[90px] lg:pb-[70px] pb-[50px]">
          <div className="w-full md:flex justify-between">
            <div className="flex justify-center items-center 2xl:gap-[56px] xl:gap-[40px] gap-[30px]">
              <img
                alt="img5"
                src={Peakpx}
                className="2xl:w-[200px] xl:w-[170px] lg:w-[150px] md:w-[120px] w-[100px] 2xl:h-[177px] xl:h-[140px] lg:h-[110px] md:h-[80px] h-[60px]"
              />
              <div>
                <div className="font-[700] text-white 2xl:text-[70px] xl:text-[55px] lg:text-[50px] md:text-[50px] text-[40px]">
                  BATMAN
                </div>
                <div className="2xl:mt-[10px] mt-[5px] font-[700] text-white 2xl:text-[28px] xl:text-[25px] lg:text-[22px] text-[18px]">
                  The Dark Knight
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center font-[400] 2xl:text-[20px] xl:text-[17px] lg:text-[14px] text-[12px] 2xl:gap-[100px] xl:gap-[80px] gap-[50px] md:mt-0 mt-[30px]">
              <div>
                <div className="cursor-pointer">Back to Top</div>
                <div className="cursor-pointer">Privacy Policy</div>
                <div className="cursor-pointer">Policy Terms of Service</div>
                <div className="cursor-pointer">Legal Overview</div>
              </div>
              <div>
                <div className="underline cursor-pointer">Telegram</div>
                <div className="underline cursor-pointer">Medium</div>
                <div className="underline cursor-pointer">Twitter</div>
              </div>
            </div>
          </div>
          <div className="mt-[70px] flex gap-[16px] items-center">
            <img alt="icon1" src={Dc} className="w-[24px] h-[24px]" />
            <img alt="icon2" src={Group} className="w-[24px] h-[24px]" />
            <div className="font-[400] text-[12px] text-[#929292]">
              The Dark Knight Trilogy is a British-American superhero film
              trilogy based on the DC Comics character Batman.
            </div>
          </div>
        </div>
      </div>
    </StyledPage>
  );
};
export default Home;
