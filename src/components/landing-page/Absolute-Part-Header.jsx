import {YellowStar} from './Yellow-Star'


export const AbsolutePartHeader = () => {
  return (
   <div>
       <div className= "partheader1 p-[12px] w-[200px] rounded-lg shadow bg-white">
        <h3  className="font-bold text-[11px] leading-[15.29px]">Full-Stack Web Developer:</h3>
        <h3  className="font-bold text-[11px] leading-[15.29px]">Tokyo Online</h3>
        <div className="flex items-center justify-between mt-2">
            <div className="left flex items-center gap-[5px]">
                 <YellowStar />
                 <YellowStar />
                 <YellowStar />
                 <YellowStar />
                 <YellowStar />
            </div>
            <div className="right flex items-center">
               <h3 className="font-bold text-[10px] leading-[14px]">40</h3>
                 <p className="text-[9px] pl-[2px]">Members</p>
                 </div>
        </div>
    </div>
    <div className= "hidden partheader2  p-[12px] w-[120px] rounded-lg shadow bg-white">
        <h3  className="font-bold text-[11px] leading-[15.29px]">Full-Stack Web Developer:</h3>
        <h3  className="font-bold text-[11px] leading-[15.29px]">Tokyo Online</h3>
        <div className="flex flex-col justify-between mt-2">
            <div className="left flex items-center gap-[5px]">
                 <YellowStar />
                 <YellowStar />
                 <YellowStar />
                 <YellowStar />
                 <YellowStar />
            </div>
            <div className="right flex items-center mt-2">
               <h3 className="font-bold text-[10px] leading-[14px]">40</h3>
               <p className="text-[9px] pl-[2px]">Members</p>
            </div>
        </div>
    </div>
   </div>
  );
}


