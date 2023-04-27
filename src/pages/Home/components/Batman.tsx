import Man1 from "../../../assets/images/new/man1.png";
import { useMediaQuery } from "react-responsive";

const Batman = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1650px)" });
  const isHub = useMediaQuery({ query: "(max-height: 601px)" });
  const isMaxHub = useMediaQuery({ query: "(max-height: 801px)" });

  return (
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
        <div className="font-sans font-[700] 2xl:text-[72px] xl:text-[60px] lg:text-[50px] md:text-[42px] text-[32px] text-[#ffffff]">
          Who is Batman?
        </div>
        <div className="mt-[30px] font-sans font-[700] 2xl:text-[18px] lg:text-[17px] text-[15px] text-[#ffffff]">
          Batman is a superhero appearing in American comic books published by
          DC Comics.
        </div>
        <div className="mt-[40px] font-sans font-[400] 2xl:text-[16px] lg:text-[15px] text-[14px] text-[#ffffff]">
          After witnessing the murder of his parents Dr. Thomas Wayne and Martha
          Wayne as a child, he swore vengeance against criminals, an oath
          tempered by a sense of justice. Bruce Wayne trains himself physically
          and intellectually and crafts a bat-inspired persona to fight crime.
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
  );
};
export default Batman;
