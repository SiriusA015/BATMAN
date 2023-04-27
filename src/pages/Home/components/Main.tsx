import Telegram from "../../../assets/images/new/telegram.png";
import Medium from "../../../assets/images/new/medium.png";
import Instagram from "../../../assets/images/new/instagram.png";
import Dc from "../../../assets/images/new/dc.png";
import Group from "../../../assets/images/new/Group.png";

const Main = () => {
  return (
    <div className="w-full xl:px-[100px] lg:px-[80px] md:px-[40px] px-[20px]">
      <div className="2xl:mt-[100px] xl:mt-[70px] mt-[50px] font-sans font-[700] xl:text-[72px] lg:text-[60px] text-[40px] text-white">
        BATMAN
      </div>
      <div className="2xl:mt-[20px] lg:mt-[14px] mt-[12px] font-sans font-[600] xl:text-[28px] lg:text-[24px] text-[22px] text-white">
        The Dark Knight
      </div>
      <div className="2xl:mt-[40px] xl:mt-[30px] lg:mt-[26px] mt-[20px] font-sans font-[700] lg:text-[14px] text-[12px] text-[#B2B2B2] flex gap-[40px]">
        <div>ERC20</div>
        <div>$BM</div>
      </div>
      <div className="2xl:mt-[40px] xl:mt-[30px] lg:mt-[26px] mt-[20px] font-sans font-[600] lg:text-[18px] text-[15px] text-white">
        You either die a hero or live long enough to see yourself become the
        villain.
      </div>
      <div className="mt-[20px] font-sans font-[400] 2xl:text-[16px] xl:text-[14px] text-[12px] text-[#eeeeee]">
        One of the most iconic fictional characters in the world, Batman has
        <br></br>
        dedicated his life to an endless crusade{" "}
        <span className="text-white 2xl:text-[20px] xl:text-[18px] text-[14px] underline cursor-pointer">
          Read More
        </span>
      </div>
      <div className="2xl:w-[290px] xl:w-[260px] lg:w-[220px] w-[180px] 2xl:h-[57px] xl:h-[52px] lg:h-[48px] h-[42px] 2xl:mt-[50px] xl:mt-[42px] md:mt-[33px] mt-[24px] rounded-[10px] bg-[#FDFF00] font-sans font-[550] 2xl:text-[26px] lg:text-[24px] text-[22px] text-black flex justify-center items-center cursor-pointer hover:shadow-2xl hover:scale-[1.02] transition duration-500">
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
        <div className="font-sans font-[400] text-[16px] text-[#929292]">
          The Dark Knight Trilogy is a British-American superhero film trilogy
          based on the DC Comics character Batman.
        </div>
      </div>
    </div>
  );
};
export default Main;
