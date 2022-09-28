import { SignUpForm } from "./form";
// import { SignUpInfo } from "./info";
import QuickInfo from "../signIn/QuickInfo";

export const SignUpPage = () => {
    return (
        <div className="flex font-[circular std] md:justify-center">
            <SignUpForm />
            {/* <SignUpInfo /> */}
            <QuickInfo bgColor={"bg-[#1f3697]"} />
        </div>
    )
}