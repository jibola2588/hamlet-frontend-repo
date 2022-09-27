import QuickInfo from "./QuickInfo";
import Form from "./Form";

const SignIn = () => {
  return (
    <div className="flex font-[circular std] max-w-[1500px] mx-auto">
      <Form />
      <QuickInfo bgColor={"bg-[#654DE4]"}/>
    </div>
  );
};
export default SignIn;
