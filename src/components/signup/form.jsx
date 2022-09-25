import logo from "../../assets/images/logo.png"
import googleLogo from "../../assets/images/Glogo.png"
import appleLogo from "../../assets/images/applelogo.png"
import { useState } from "react"

export const SignUpForm = () => {
    const [vMessage, setVMessage] = useState('')
    const showCautionMessage = () => {
        setVMessage('Use 8 or more characters with a mix of numbers, letters and symbols')
    }
    return (
        <div className="lg:px-[120px] lg:pb-[98px] lg:pt-[45px]">
            <img className="w-[113px]" src={logo} alt="logo" />
            <div>
                <p className="font-[900] text-[31px] mt-[79.86px]">Be a part of Hamlet today.😊</p>
            </div>
            <div className="pt-[26px]">
                <button className="flex px-[5.5rem] py-5 rounded-[14px] items-center text-white hover:bg-[#508ff7] bg-[#4285F4]">
                    <img src={googleLogo} alt="" />
                    <p className="font-bold ml-3">Continue with Google</p>
                </button>
            </div>
            <div className="pt-[24px]">
                <button className="flex px-[3.63rem] py-2 rounded-[14px] items-center text-white hover:bg-[#2f2f2f] bg-[#0D0D0D]">
                    <img className="w-20" src={appleLogo} alt="" />
                    <p className="font-bold">Log In with your Apple ID</p>
                </button>
            </div>
            <div className="pt-[28px]">
                <div className="flex items-center">
                    <hr className="bg-[#D4D4D4] w-[10.3rem]" />
                    <p className="uppercase px-4">or</p>
                    <hr className="bg-[#D4D4D4] w-[10.3rem]" />
                </div>
            </div>
            <form action="">
                <div className="block mt-6">
                    <label className="font-[450] text-[16px]" htmlFor="name">Your name</label>
                    <div>
                        <input type="text"
                            className="bg-[#F8FBFC] p-5 w-96 rounded-[14px] mt-[15px] focus:outline-none focus:ring text-[#D4D4D4] font-[450] text-[16px]"
                        />
                    </div>
                </div>
                <div className="mt-6">
                    <label className="font-[450] text-[16px]" htmlFor="email">Email address</label>
                    <div>
                        <input type="email"
                            className="bg-[#F8FBFC] p-5 w-96 rounded-[14px] mt-[15px] focus:outline-none focus:ring text-[#D4D4D4] font-[450] text-[16px]"
                        />
                    </div>
                </div>
                <div className="mt-6">
                    <label className="font-[450] text-[16px]" htmlFor="password">Create a password</label>
                    <div>
                        <input type="password"
                            onFocus={showCautionMessage}
                            className="bg-[#F8FBFC] p-5 w-96 rounded-[14px] mt-[15px] focus:outline-none focus:ring text-[#D4D4D4] font-[450] text-[16px]"
                        />
                    </div>
                </div>
                <div>
                    <p className="text-[#ABA6A6] font-[450] text-[10px] mt-5 ml-5">{vMessage}</p>
                </div>
                <div className="submit-btn mt-6">
                    <button className="flex px-[7.7rem] py-5 rounded-[14px] items-center text-white hover:bg-[#2f2f2f] bg-black">
                        <p className="font-[450] text-[16px]">Create my account</p>
                    </button>
                </div>
            </form>
            <div>
                <p className="text-center font-[500] text-[14px] mt-5 text-[#ABA6A6]">By continuing, you agree to the <span className="text-[#1E1E1E]">Terms of use,<br />
                Privacy Policy,</span> and <span className="text-[#1E1E1E]">Community Standards</span> of Hamlet</p>
            </div>
            <div className="flex items-center justify-center mt-5 text-center font-[450] text-[16px]">
                <p>Already have an account?</p>
                <button className="text-[#1F3697] ml-1">Log in</button>
            </div>
        </div>
    )
}