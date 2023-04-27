import Dc from "../../assets/images/new/dc.png";
import Group from "../../assets/images/new/Group.png";
import Peakpx from "../../assets/images/new/peakpx.png";

const Footer = () => {
  return (
    <div
      className="w-full bg-black font-sans xl:px-[100px] lg:px-[80px] md:px-[40px] px-[20px] 2xl:pt-[180px] xl:pt-[160px] lg:pt-[140px] pt-[100px] 2xl:pb-[119px] xl:pb-[90px] lg:pb-[70px] pb-[50px]"
      id="bottom"
    >
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
            <a className="cursor-pointer" rel="noreferrer" href="#">
              Back to Top
            </a>
            <div className="cursor-pointer">Privacy Policy</div>
            <div className="cursor-pointer">Policy Terms of Service</div>
            <div className="cursor-pointer">Legal Overview</div>
          </div>
          <div className="flex flex-col">
            <a className="underline cursor-pointer" rel="noreferrer" href="/">
              Telegram
            </a>
            <a className="underline cursor-pointer" rel="noreferrer" href="/">
              Medium
            </a>
            <a className="underline cursor-pointer" rel="noreferrer" href="/">
              Twitter
            </a>
          </div>
        </div>
      </div>
      <div className="mt-[70px] flex gap-[16px] items-center">
        <img alt="icon1" src={Dc} className="w-[24px] h-[24px]" />
        <img alt="icon2" src={Group} className="w-[24px] h-[24px]" />
        <div className="font-[400] text-[12px] text-[#929292]">
          The Dark Knight Trilogy is a British-American superhero film trilogy
          based on the DC Comics character Batman.
        </div>
      </div>
    </div>
  );
};
export default Footer;
