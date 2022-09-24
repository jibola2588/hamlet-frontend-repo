import {CategoriesHeader} from './Categories-Header'
import {Category} from './Category'
import "./categories.css"

 const Categories = () => {
  return (
    <div className=" bg-[#FAFAFA] py-[50px]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 box-border">
           <CategoriesHeader />
           <div className="flex items-center justify-center"> 
           <div className="categories flex flex-wrap gap-[40px] items-center xl:justify-between md:space-around sm:justify-center">
               <Category cat="1"/>
               <Category cat="2"/>
               <Category cat="3"/>
               <Category cat="4"/>
               <Category cat="5"/>
               <Category cat="6"/>
           </div>
           </div>
        </div>
    </div>
  );
}
export default Categories 

