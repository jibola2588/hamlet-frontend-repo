import { SignUpForm } from "./form";
import { SignUpInfo } from "./info";

export const SignUpPage = () => {
    return (
        <div className="flex font-[circular std]">
            <SignUpForm />
            <SignUpInfo />
        </div>
    )
}