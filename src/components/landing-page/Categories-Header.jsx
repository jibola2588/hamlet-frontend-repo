
export const CategoriesHeader = () => {
  return (
    <div className="flex flex-wrap items-center justify-between mb-[25px] md:mb-[30px] lg:mb-[40px]">
              <div className="">
              <h3 className="font-medium leading-[20px] text-[24px]  sm:leading-[25px] sm:text-[28px] md:leading-[34px] md:text-[34px] text-[#00349A]">Get choice of your course</h3>
              </div>
               <div className="right flex items-center mt-3 md:mt-0">
                    <div className="">
                       <select className="bg-transparent text-[#00349A]   sm:text-[12px] text-[10px] font-medium md:text-sm mr-8 md:mr-4 lg:mr-[24px] border-none outline-none ">
                           <option value="">UI/UX Design</option>
                           <option value="">Web Development</option>
                           <option value="">Front-End Development</option>
                           <option value="">Back-End Development</option>
                           <option value="">Python And Robotics</option>
                           <option value="">Mobile Development</option>
                           <option value="">Digital Marketing</option>
                           <option value="">Hardware Engineering</option>
                       </select>
                    </div>
               
                  <button  
                  className="
                  md:text-sm font-bold md:leading-5 md:px-[32px] md:py-[14px] bg-[#00349A] rounded-full 
                  text-white cursor-pointer transition ease-in-out delay-150  
                  hover:bg-[#fff] hover:text-[#00349A] border border-[#00349A]
                  leading-4 text-[10px] px-[24px] py-[10px]
                  ">
                      View all
                  </button>
              </div>
          </div>
  );
}


