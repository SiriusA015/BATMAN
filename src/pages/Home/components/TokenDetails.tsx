import Man2 from "../../../assets/images/new/man2.png";

const TokenDetails = () => {
  return (
    <div className="w-full lg:flex bg-black xl:px-[100px] lg:px-[80px] md:px-[40px] px-[20px] pt-[78px]">
      <div className="lg:w-[30%] flex items-center justify-center">
        <img
          alt="man2"
          src={Man2}
          className="2xl:w-[500px] xl:w-[450px] lg:w-[420px] md:w-[360px] w-[280px] 2xl:h-[400px] xl:h-[380px] lg:h-[350px] md:h-[310px] h-[280px]"
        />
      </div>
      <div className="lg:w-[70%] lg:mt-0 mt-[80px] flex flex-col items-center">
        <div className="font-sans font-[700] text-white 2xl:text-[72px] xl:text-[60px] lg:text-[54px] md:text-[48px] text-[42px] md:ml-[-290px]">
          Token Details
        </div>
        <div
          className="lg:mt-[40px] mt-[20px] rounded-[30px] flex justify-center items-center 2xl:w-[766px] xl:w-[700px] lg:w-[650px] md:w-[600px] sm:w-[400px] w-[300px]  2xl:h-[400px] lg:h-[360px] md:h-[320px] h-[280px] transition duration-500 hover:scale-[1.02]"
          style={{
            background:
              "linear-gradient(180deg, #0F0F0F 0%, rgba(15, 15, 15, 0) 100%)",
          }}
        >
          <div className="w-[50%] font-sans font-[700] 2xl:text-[35px] xl:text-[30px] lg:text-[26px] sm:text-[22px] text-[16px] text-white flex flex-col justify-center pl-[50px]">
            <div className="mb-[14px]">Token Name</div>
            <div className="mb-[14px]">Token Symbol</div>
            <div className="mb-[14px]">Total Supply</div>
            <div className="mb-[14px]">Tax Buy / Sell</div>
            <div>Contract</div>
          </div>
          <div className="w-[50%] font-sans font-[400] 2xl:text-[30px] xl:text-[28px] lg:text-[25px] sm:text-[20px] text-[14px] text-[#FDFF00] flex flex-col justify-center items-center">
            <div className="mb-[14px]">Batman</div>
            <div className="mb-[14px]">BM</div>
            <div className="mb-[14px]">1,000,000,000,000 $BM</div>
            <div className="mb-[14px]">5% / 5%</div>
            <div>Etherscan</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TokenDetails;
