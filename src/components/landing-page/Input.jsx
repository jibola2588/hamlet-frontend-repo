
export const Input = () => {
  return (
    <div>
      <div className="input1 flex items-center w-5/6 rounded-full bg-[#EFF0F6]" >
             <input type="email" placeholder="Enter your email" className="flex-1 h-[100%] pl-[16px] lg:pl-[25px] border-none bg-transparent  outline-none placeholder-gray-800"/>
             <button className="flex-2 text-sm  leading-5 px-[32px] py-[14px] bg-[#00349A] rounded-full text-white text-sm leading-5 cursor-pointer hover:bg-[#fff] hover:text-[#00349A] border border-[#00349A]">14 Days Trial</button>
     </div>
      <div className="input2 hidden flex items-center justify-between w-[80%] rounded-full bg-[#EFF0F6]" >
             <input type="email" placeholder="Enter your email" className="flex-1 h-[100%] pl-[16px]  border-none bg-transparent  outline-none placeholder-gray-800"/>
             <button className="flex-2 text-sm  leading-5 px-[18px] py-[9px] bg-[#00349A] rounded-full text-white text-sm leading-5 cursor-pointer hover:bg-[#fff] hover:text-[#00349A] border border-[#00349A]">14 Days Trial</button>
     </div>
    
    </div>
  );
}


