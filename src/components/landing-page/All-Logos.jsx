
import {SingleLogo} from './Single-Logo'

export const AllLogos = () => {
  return (
       <div className = " flex items-center justify-center ">
        <div className = " flex gap-[13px] items-center justify-start sm:gap-[40px] md:gap-[20px]"> 
            <div className="flex flex-col gap-[20px] md:flex-row ">
                 <SingleLogo type="bnb" /> 
                 <SingleLogo type="hub" /> 
            </div>
            <div className="flex flex-col gap-[20px]  md:flex-row ">
              <SingleLogo type="google" /> 
                <SingleLogo type="soft" className="justify-self-center"/> 
              
              </div>
            <div className="flex flex-col gap-[20px]  md:flex-row ">
                <SingleLogo type="mart" /> 
                <SingleLogo type="fed" /> 
              </div>
        </div>
     </div>
  );
}




