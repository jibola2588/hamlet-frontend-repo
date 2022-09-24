import img1 from '../../assets/images/right1.png'
import img2 from '../../assets/images/right2.png'
import img3 from '../../assets/images/right3.png'
import img4 from '../../assets/images/right4.png'



export const RightImageAppend = ({type}) => {
    let data;
switch(type){ 
    case "A" : 
       data = { 
           img : img1,
           rounded:"rounded-tl",
           bgColor:"#ECE4D7"
       }
       break;
    case "B" : 
       data = { 
           img : img2,
           rounded:"rounded-tr",
           bgColor:"#95C5EE"
       }
       break;
    case "C" : 
       data = { 
           img : img3,
           rounded:"rounded-bl",
           bgColor:"#92BBA9"
        }
        break;
        case "D" : 
        data = { 
            img : img4,
           rounded:"rounded-br",
           bgColor:"#E9EAE5"
       }
       break;
}
  return (
    <div className={`w-[20.8125rem] h-[17.5rem] bg-[${data.bgColor}] ${data.rounded}-[50%]`}>
       <img src={data.img} alt="image" className="w-[100%] h-[100%] object-cover "/>
    </div>
  );
}

