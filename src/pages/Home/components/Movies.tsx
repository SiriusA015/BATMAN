import Img1 from "../../../assets/images/new/img1.png";
import Img2 from "../../../assets/images/new/img2.png";
import Img3 from "../../../assets/images/new/img3.png";
import { useMediaQuery } from "react-responsive";

const Movies = () => {
  const isSmall = useMediaQuery({ query: "(max-width: 430px)" });
  const isXSmall = useMediaQuery({ query: "(max-width: 370px)" });
  const is2XSmall = useMediaQuery({ query: "(max-width: 340px)" });

  return (
    <div
      className={`w-full flex flex-col bg-black ${
        isSmall
          ? "px-[3px]"
          : "xl:px-[100px] lg:px-[80px] md:px-[40px] px-[20px]"
      } pt-[160px]`}
    >
      <div className="font-sans text-center font-[700] 2xl:text-[72px] xl:text-[68px] lg:text-[62px] md:text-[58px] text-[45px] text-white mx-auto ">
        Watch the movies
      </div>
      <div className="xl:flex justify-center items-center w-full 2xl:mt-[100px] xl:mt-[80px] md:mt-[50px] mt-[30px] gap-[32px]">
        <div
          className={`rounded-[10px] border-[1px] border-[#383838] ${
            isSmall
              ? `${
                  isXSmall
                    ? `${
                        is2XSmall
                          ? "w-[280px] h-[220px]"
                          : "w-[320px] h-[220px]"
                      }`
                    : "w-[350px] h-[220px]"
                }`
              : "w-[392px] h-[200px]"
          } flex overflow-hidden xl:mx-0 mx-auto`}
        >
          <div className="w-full">
            <img alt="img1" src={Img1} className="w-[140px] h-[200px]" />
          </div>
          <div className="flex flex-col justify-center px-[10px]">
            <div className="font-sans font-[700] text-[12px] text-[#929292]">
              ACTION, ADVENTURE
            </div>
            <div className="mt-[6px] font-sans font-[700] text-[18px] text-[#ffffff]">
              Batman Begins
            </div>
            <div className="mt-[6px] font-sans font-[400] text-[12px] text-[#ffffff]">
              IMDB: <span className="text-[#FDFF00]">8.2</span>
            </div>
            <div className="mt-[6px] font-sans font-[400] text-[12px] text-[#929292]">
              Batman Begins explores the origins of the Batman legend and the
              Dark Knight's emergence as a force...
            </div>
            <div className="mt-[12px] flex justify-between items-center w-full">
              <a
                className={`rounded-[8px] bg-[#FDFF00] ${
                  isSmall ? "w-[80px] h-[22px]" : "w-[100px] h-[26px]"
                } flex justify-center items-center font-sans font-[700] text-[12px] text-[#000000] cursor-pointer`}
                rel="noreferrer"
                href="/"
              >
                Watch
              </a>
              <a
                className={`rounded-[8px] border-[1px] border-[#B2B2B2] ${
                  isSmall ? "w-[80px] h-[22px]" : "w-[100px] h-[26px]"
                } flex justify-center items-center font-sans font-[700] text-[12px] text-[#B2B2B2] cursor-pointer`}
                rel="noreferrer"
                href="/"
              >
                Details
              </a>
            </div>
          </div>
        </div>
        <div
          className={`rounded-[10px] border-[1px] border-[#383838] ${
            isSmall
              ? `${
                  isXSmall
                    ? `${
                        is2XSmall
                          ? "w-[280px] h-[220px]"
                          : "w-[320px] h-[220px]"
                      }`
                    : "w-[350px] h-[220px]"
                }`
              : "w-[392px] h-[200px]"
          } flex overflow-hidden xl:mx-0 mx-auto xl:mt-0 mt-[30px]`}
        >
          <div className="w-full">
            <img alt="img2" src={Img2} className="w-[140px] h-[200px]" />
          </div>
          <div className="flex flex-col justify-center px-[10px]">
            <div className="font-sans font-[700] text-[12px] text-[#929292]">
              Action, Crime, Drama
            </div>
            <div className="mt-[6px] font-sans font-[700] text-[18px] text-[#ffffff]">
              The Dark Knight
            </div>
            <div className="mt-[6px] font-sans font-[400] text-[12px] text-[#ffffff]">
              IMDB: <span className="text-[#FDFF00]">9.0</span>
            </div>
            <div className="mt-[6px] font-sans font-[400] text-[12px] text-[#929292]">
              Christian Bale and director Christopher Nolan reunite following
              their blockbuster success with...
            </div>
            <div className="mt-[12px] flex justify-between items-center w-full">
              <a
                className={`rounded-[8px] bg-[#FDFF00] ${
                  isSmall ? "w-[80px] h-[22px]" : "w-[100px] h-[26px]"
                } flex justify-center items-center font-sans font-[700] text-[12px] text-[#000000] cursor-pointer`}
                rel="noreferrer"
                href="/"
              >
                Watch
              </a>
              <a
                className={`rounded-[8px] border-[1px] border-[#B2B2B2] ${
                  isSmall ? "w-[80px] h-[22px]" : "w-[100px] h-[26px]"
                } flex justify-center items-center font-sans font-[700] text-[12px] text-[#B2B2B2] cursor-pointer`}
                rel="noreferrer"
                href="/"
              >
                Details
              </a>
            </div>
          </div>
        </div>
        <div
          className={`rounded-[10px] border-[1px] border-[#383838] ${
            isSmall
              ? `${
                  isXSmall
                    ? `${
                        is2XSmall
                          ? "w-[280px] h-[230px]"
                          : "w-[320px] h-[220px]"
                      }`
                    : "w-[350px] h-[220px]"
                }`
              : "w-[392px] h-[200px]"
          } flex overflow-hidden xl:mx-0 mx-auto xl:mt-0 mt-[30px]`}
        >
          <div className="w-full">
            <img alt="img3" src={Img3} className="w-[140px] h-[200px]" />
          </div>
          <div className="flex flex-col justify-center px-[10px]">
            <div className="font-sans font-[700] text-[12px] text-[#929292]">
              Action, Adventure
            </div>
            <div className="mt-[6px] font-sans font-[700] text-[18px] text-[#ffffff]">
              The Dark Knight Rises
            </div>
            <div className="mt-[6px] font-sans font-[400] text-[12px] text-[#ffffff]">
              IMDB: <span className="text-[#FDFF00]">8.4</span>
            </div>
            <div className="mt-[6px] font-sans font-[400] text-[12px] text-[#929292]">
              Directing one of the most anticipated films of the year,
              Christopher Nolan returns to Gotham to complete his...
            </div>
            <div className="mt-[12px] flex justify-between items-center w-full">
              <a
                className={`rounded-[8px] bg-[#FDFF00] ${
                  isSmall ? "w-[80px] h-[22px]" : "w-[100px] h-[26px]"
                } flex justify-center items-center font-sans font-[700] text-[12px] text-[#000000] cursor-pointer`}
                rel="noreferrer"
                href="/"
              >
                Watch
              </a>
              <a
                className={`rounded-[8px] border-[1px] border-[#B2B2B2] ${
                  isSmall ? "w-[80px] h-[22px]" : "w-[100px] h-[26px]"
                } flex justify-center items-center font-sans font-[700] text-[12px] text-[#B2B2B2] cursor-pointer`}
                rel="noreferrer"
                href="/"
              >
                Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Movies;
