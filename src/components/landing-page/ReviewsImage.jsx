import rev1 from '../../assets/images/rev1.png'
import rev2 from '../../assets/images/rev2.png'
import rev3 from '../../assets/images/rev3.png'
import rev4 from '../../assets/images/rev4.png'
import rev5 from '../../assets/images/rev5.png'

export const ReviewsImage = ({type}) => {
    let data;
   switch(type) { 
       case "rev1" :
           data = { 
               img : rev1,
               zIndex: "9"
           }
           break;
           
       case "rev2" :
           data = { 
               img : rev2,
               zIndex: " 7",
           }
           break;
       case "rev3" :
           data = { 
               img : rev3,
               zIndex: " 5"
           }
           break;
       case "rev4" :
           data = { 
               img : rev4,
               zIndex: " 3"
           }
           break;
       case "rev5" :
           data = { 
               img : rev5,
               zIndex: " 1"
           }
           break;
        default : 
           break;

   }
  return (
    <div className= 'w-10 h-10' style = {{marginLeft : (data.zIndex > 7 ) ? '0px' : '-10px',zIndex : data.zIndex }} >
    <img src={data.img} alt="image of review" className="w-[100%] object-cover h-[100%]" />
  </div>
  );
}


