import img1 from '../../assets/images/bnb.png'
import img2 from '../../assets/images/hubspot.png'
import img3 from '../../assets/images/google.png'
import img4 from '../../assets/images/soft.png'
import img5 from '../../assets/images/mart.png'
import img6 from '../../assets/images/fed.png'

export  const SingleLogo = ({type}) => {
    console.log(type);
    
    let data;
    switch(type){ 
        case "bnb" : 
          data = { 
              img:img1
          }
           break;
        case "hub" : 
          data = { 
              img:img2
          }
           break;
        case "google" : 
          data = { 
              img:img3
          }
           break;
        case "soft" : 
          data = { 
              img:img4
          }
           break;
        case "mart" : 
          data = { 
              img:img5
          }
           break;
        case "fed" : 
          data = { 
              img:img6
          }
           break;
         default:
              break;
    }
  return (
    <div>
        <div>
            <img src={ data.img } alt="google logo" />
        </div>
    </div>
  );
}

;
