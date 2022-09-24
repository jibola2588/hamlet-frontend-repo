// import bgImage from '../../assets/images/testimony.png'
import {Testimonials} from './Testimonials'

const Testimony = () => {
  return (
    <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 my-4 md:my-8 lg:my-[50px]'>
      <h3 className="font-bold leading-[54px] text-[46px] text-center">Testimonials</h3>
       <div className={` flex justify-center mt-[10px]`}>
         <div>
         <Testimonials type="A"/>
         <Testimonials type="B"/>
         <Testimonials type="C"/>
         </div>
       </div>
    </div>
  );
}

export default Testimony;
