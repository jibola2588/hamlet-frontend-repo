export const ContactForm = () => {
    return(
        <div className="bg-[#EBF1FF] px-6 py-8 lg:px-[76px] lg:py-[91px] mt-10 lg:mt-0 w-full">
            <div className="bg-white w-full rounded-[11.8889px] md:rounded-[20px]">
                <form className="px-6 md:px-20 pb-10 pt-6 lg:px-[51px] lg:pb-[100px] lg:pt-[38px]" action="">
                    <div className="block">
                        <label className="text-[#00349A] text-[11.8889px] md:text-[20px] font-[500]" htmlFor="first-name">First name</label>
                        <div>
                            <input className="border border-2 w-full mt-1 placeholder:text-[#8F8F8F] placeholder:text-[16px] placeholder:font-[400] rounded-[5.94444px] md:rounded-[10px] p-1 md:p-3 focus:outline-none focus:border-[#00349A]" 
                            placeholder="Enter your first name" 
                            type="text" 
                            name="first-name" required/>
                        </div>
                    </div>
                    <div className="block mt-3 md:mt-[30px]">
                        <label className="text-[#00349A] text-[11.8889px] md:text-[20px] font-[500]" htmlFor="last-name">Last name</label>
                        <div>
                            <input className="border border-2 w-full mt-1 placeholder:text-[#8F8F8F] md:placeholder:text-[16px] placeholder:font-[400] rounded-[5.94444px] md:rounded-[10px] p-1 md:p-3 focus:outline-none focus:border-[#00349A]" placeholder="Enter your last name" type="text" name="last-name" required/>
                        </div>
                    </div>
                    <div className="block mt-3 md:mt-[30px]">
                        <label className="text-[#00349A] text-[11.8889px] md:text-[20px] font-[500]" htmlFor="email">Email</label>
                        <div>
                            <input className="border border-2 w-full mt-1 placeholder:text-[#8F8F8F] placeholder:text-[16px] placeholder:font-[400] rounded-[5.94444px] md:rounded-[10px] p-1 md:p-3 focus:outline-none focus:border-[#00349A]" placeholder="Enter your email" type="email" name="email" required/>
                        </div>
                    </div>
                    <div className="block mt-3 md:mt-[30px]">
                        <label className="text-[#00349A] text-[11.8889px] md:text-[20px] font-[500]" htmlFor="first-name">Tell us more</label>
                        <div>
                            <textarea className="border border-2 h-20 md:h-28 w-full mt-1 placeholder:text-[#8F8F8F] placeholder:text-[16px] placeholder:font-[400] rounded-[5.94444px] md:rounded-[10px] p-1 md:p-3 focus:outline-none focus:border-[#00349A]" placeholder="Write a text" name="contact-details" id="" required></textarea>
                        </div>
                    </div>
                    <div className="flex justify-end mt-[20px]">
                        <button type="submit" className="bg-[#00349A] hover:border hover:bg-white hover:border-[#00349A] hover:text-[#00349A] py-[10.7px] px-[19.1px] md:py-4 md:px-[32px] text-[9.5px] font-[500] md:text-[16px] rounded-[40px] text-white">Send message</button>
                    </div>
                </form>
            </div>
        </div>
    )
}