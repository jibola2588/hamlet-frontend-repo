import img1 from '../../assets/images/rig1.png'
import img2 from '../../assets/images/rig2.png'
import img3 from '../../assets/images/rig3.png'
import img4 from '../../assets/images/rig4.png'

export const RightImage = ({type}) => {
    let data ;
    switch(type){ 
     case "part1" : 
      data = { 
          img : img1,
      }
      break;
      case "part2" : 
      data ={ 
          img : img2,
      }
      break;
      case "part3" : 
      data ={ 
          img : img3,
      }
      break;
      case "part4" : 
        data ={ 
          img : img4,
      }
      break;
      default:
          break;
    }
  return (
    <div className= {`image md:w-[240px] md:h-[200px] lg:w-[333px] lg:h-[248px]`}>
       <img src={data.img} alt="image of right-header" className={`object-cover w-[100%] h-[100%]`} />
    </div>
  );
}


