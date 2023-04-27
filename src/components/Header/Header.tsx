import { useState, useEffect } from "react";
import Logo from "../../assets/images/new/Logo.png";
import MenuBar from "./MenuBar";
import { useMediaQuery } from "react-responsive";

function Header() {
  const [top, setTop] = useState(true);
  const isDesktop = useMediaQuery({ query: "(min-width: 1650px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 1320px)" });
  const [isViewMobile, setViewMobile] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 ${
        !isViewMobile && "transition duration-300"
      } ease-in-out bg-transparent ${
        isViewMobile && "backdrop-blur-md shadow-lg"
      } ${!top && "backdrop-blur-md shadow-lg"}`}
    >
      <div className="w-full mx-auto xl:px-[100px] lg:px-[80px] md:px-[40px] px-[20px]">
        <div className="flex items-center justify-between h-[72px] xl:h-28 lg:h-[104px] md:h-24 sm:h-[80px]">
          <div className="flex justify-center items-center 2xl:mt-[10px] xl:mt-[6px]">
            {/* Logo */}
            <div className="2xl:mr-[40px] xl:mr-[30px] lg:mr-[23px] md:mr-[20px]">
              <img
                alt="user"
                src={Logo}
                className={`2xl:w-[82px] xl:w-[80xp] md:w-[70px] w-[60px] 2xl:h-[28px] lg:h-[26px] h-[25px] cursor-pointer hover:scale-[1.05] trasition duration-300`}
              />
            </div>
          </div>

          {/* Site navigation */}
          <nav className={`${!isTablet ? "hidden" : "flex flex-grow"}`}>
            <ul
              className={`flex flex-grow justify-end flex-wrap items-center ${
                isDesktop
                  ? "text-[18px]"
                  : "2xl:text-[18px] xl:text-[17px] lg:text-[16px]"
              }`}
            >
              <li>
                <div
                  className={`font-sans font-[500] text-[#ffffff] hover:bg-[#6B411C] rounded-full px-[20px] py-[10px] flex items-center transition duration-500 ease-in-out cursor-pointer ${
                    isDesktop ? "mr-[40px]" : "mr-[20px]"
                  }`}
                >
                  Who is Batman?
                </div>
              </li>
              <li>
                <div
                  className={`font-sans font-[500] text-[#ffffff] hover:bg-[#6B411C] rounded-full px-[20px] py-[10px] flex items-center transition duration-500 ease-in-out cursor-pointer ${
                    isDesktop ? "mr-[40px]" : "mr-[20px]"
                  }`}
                >
                  Token
                </div>
              </li>
              <li>
                <div
                  className={`font-sans font-[500] text-[#ffffff] hover:bg-[#6B411C] rounded-full px-[20px] py-[10px] flex items-center transition duration-500 ease-in-out cursor-pointer ${
                    isDesktop ? "mr-[40px]" : "mr-[20px]"
                  }`}
                >
                  Telegram
                </div>
              </li>
              <li>
                <div
                  className={`font-sans font-[500] text-[#ffffff] hover:bg-[#6B411C] rounded-full px-[20px] py-[10px] flex items-center transition duration-500 ease-in-out cursor-pointer ${
                    isDesktop ? "mr-[40px]" : "mr-[20px]"
                  }`}
                >
                  Watch Movie
                </div>
              </li>
              <li>
                <div
                  className={`font-sans font-bold text-[#111111] bg-[#FDFF00] rounded-[12px] px-[50px] py-[7px] flex items-center transition duration-500 ease-in-out cursor-pointer hover:text-[#999999] hover:shadow-2xl hover:scale-[1.01]`}
                >
                  Buy $BM
                </div>
              </li>
            </ul>
          </nav>
          <div className={`flex items-center ${isTablet && "hidden"}`}>
            <MenuBar
              isViewMobile={isViewMobile}
              setViewMobile={setViewMobile}
            />
          </div>
        </div>
        {isViewMobile && !isTablet && (
          <div className="w-full flex flex-col justify-center items-center xl:text-[18px] lg:text-[17px] md:text-[16px] sm:text-[15px] text-[14px] md:pb-[30px] pb-[20px]">
            <div
              className={`mt-[20px] font-sans font-bold text-[#ffffff] text-center cursor-pointer`}
            >
              Who is Batman?
            </div>
            <div
              className={`mt-[20px] font-sans font-bold text-[#ffffff] text-center cursor-pointer`}
            >
              Token
            </div>
            <div
              className={`mt-[20px] font-sans font-bold text-[#ffffff] text-center cursor-pointer`}
            >
              Telegram
            </div>
            <div
              className={`mt-[20px] font-sans font-bold text-[#ffffff] text-center cursor-pointer`}
            >
              Watch Movie
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
