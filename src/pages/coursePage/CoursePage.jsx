import React from "react";
import Navbar from "../../components/navbars/Landing-Page-Navbar";
import CategoryCard from "../../components/courses/CategoryCard";
import CategoriesHeader from "../../components/courses/CategoriesHeader";
import Footer from "../../components/footer/Footer";
// images
import UiUxBackgrond from "../../assets/images/UiUx.png";
import backEnd from "../../assets/images/backEnd.jpeg";
import mobileDev from "../../assets/images/mobileDev.jpg";
import digitalMarketting from "../../assets/images/digitalMarketting.jpg";
import frontEnd from "../../assets/images/frontEnd.jpeg";
import CourseCard from "../../components/courses/CourseCard";
import UImg from "../../assets/images/UiUx.png";
import HtmlImg from "../../assets/images/html.png";
import PythonImg from "../../assets/images/python.png";
import ProductImg from "../../assets/images/productMgt.png";
import tutorImg from "../../assets/images/tutor1.png";
import tutorImg1 from "../../assets/images/tutor2.png";
import tutorImg2 from "../../assets/images/tutor3.png";




function CoursePage() {
  return (
    <>
      <Navbar/>
      <div>
        <div className="max-w-6xl mx-auto px-6 mb-44">
          <div className="flex justify-between flex-wrap mt-16 mb-4">
            <h3 className="text-[#00349A] text-2xl">Explore Courses</h3>
            <form className="flex items-center bg-gray-light px-4 py-1 border rounded-full sm:px-7 sm:py-2">
              <input
                type="text"
                placeholder="what do you want to learn"
                className="placeholder:text-sm max-w-[200px] outline-none"
              />
              <i className="bi bi-search text-[#00349A]"></i>
            </form>
          </div>

          <div className="grid gap-4 grid-rows-[200px,_200px,_200px,_200px,_200px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:grid-rows-[minmax(0,_200px),minmax(0,_200px),minmax(0,_200px)] md:grid-rows-[minmax(0,_200px),minmax(0,_200px)] ">
            <CategoryCard
              backgroundImg={UiUxBackgrond}
              categoryText="UI/UX Design"
              rowSpan="sm:row-span-2"
            />
            <CategoryCard backgroundImg={frontEnd} categoryText="Front-end" />
            <CategoryCard
              backgroundImg={digitalMarketting}
              categoryText="Digital Marketting"
            />
            <CategoryCard backgroundImg={backEnd} categoryText="Back-end" />
            <CategoryCard
              backgroundImg={mobileDev}
              categoryText="Mobile Development"
            />
          </div>

          <CategoriesHeader header="Beginners Courses" />

          <div className="grid  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-8 py-2 md:py-4">
            <CourseCard
              backgroundImg={UImg}
              courseReviews="4.5"
              Reviews="(120)"
              courseViews="28,500"
              courseDuration="36"
              courseTitle="Product Management Into-Course"
              tutorImg={tutorImg}
              tutorName="Kera David"
              slashPrice="$55.0"
              currentPrice="$37.67"
            />

            <CourseCard
              backgroundImg={HtmlImg}
              courseReviews="5"
              Reviews="(200)"
              courseViews="78,500"
              courseDuration="96"
              courseTitle="Introduction to html, css and javascript"
              tutorImg={tutorImg1}
              tutorName="Jerry Thomas"
              slashPrice="$87.0"
              currentPrice="$217.67"
            />

            <CourseCard
              backgroundImg={PythonImg}
              courseReviews="4.5"
              Reviews="(120)"
              courseViews="28,500"
              courseDuration="36"
              courseTitle="Introductio to Python, Django & API's"
              tutorImg={tutorImg2}
              tutorName="Patrick James"
              slashPrice="$95.0"
              currentPrice="$237.67"
            />
          </div>
          <CategoriesHeader header="Intermediate Courses" />
          <div className="grid  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-4 py-2 md:py-4">
            <CourseCard
              backgroundImg={ProductImg}
              courseReviews="4.5"
              Reviews="(120)"
              courseViews="28,500"
              courseDuration="36"
              courseTitle="Product Management Into-Course"
              tutorImg={tutorImg}
              tutorName="Kera David"
              slashPrice="$55.0"
              currentPrice="$37.67"
            />

            <CourseCard
              backgroundImg={UImg}
              courseReviews="5"
              Reviews="(200)"
              courseViews="78,500"
              courseDuration="96"
              courseTitle="Introduction to html, css and javascript"
              tutorImg={tutorImg1}
              tutorName="Jerry Thomas"
              slashPrice="$87.0"
              currentPrice="$217.67"
            />

            <CourseCard
              backgroundImg={PythonImg}
              courseReviews="4.5"
              Reviews="(120)"
              courseViews="28,500"
              courseDuration="36"
              courseTitle="Introductio to Python, Django & API's"
              tutorImg={tutorImg2}
              tutorName="Patrick James"
              slashPrice="$95.0"
              currentPrice="$237.67"
            />
          </div>
          <CategoriesHeader header="Professional Courses" />
          <div className="grid  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-4 py-2 md:py-4">
            <CourseCard
              backgroundImg={ProductImg}
              courseReviews="4.5"
              Reviews="(120)"
              courseViews="28,500"
              courseDuration="36"
              courseTitle="Product Management Into-Course"
              tutorImg={tutorImg}
              tutorName="Kera David"
              slashPrice="$55.0"
              currentPrice="$37.67"
            />

            <CourseCard
              backgroundImg={UImg}
              courseReviews="5"
              Reviews="(200)"
              courseViews="78,500"
              courseDuration="96"
              courseTitle="Introduction to html, css and javascript"
              tutorImg={tutorImg1}
              tutorName="Jerry Thomas"
              slashPrice="$87.0"
              currentPrice="$217.67"
            />

            <CourseCard
              backgroundImg={PythonImg}
              courseReviews="4.5"
              Reviews="(120)"
              courseViews="28,500"
              courseDuration="36"
              courseTitle="Introductio to Python, Django & API's"
              tutorImg={tutorImg2}
              tutorName="Patrick James"
              slashPrice="$95.0"
              currentPrice="$237.67"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CoursePage;
