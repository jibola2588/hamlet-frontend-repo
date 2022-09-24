import img1 from '../../assets/images/colstar.png'
import img2 from '../../assets/images/plainStar.png'

export const ReviewStar = ({color}) => {
  console.log(color);
  let data;
   switch(color) { 
     case 'black':
       data = { 
         img : img1
       }
       break;
       case "white":
         data = { 
           img:img2
         }
         break;
         default:
           break;

   }
  return (
    <div className="w-5 h-5" style = {{marginRight:'5px'}} >
      <img src={data.img}  alt="image of a star" className="w-[100%] h-[100%] object-cover"/>
    </div>
  );
}


