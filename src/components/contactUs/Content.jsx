import { ContactForm } from "./ContactForm"

export const ContactContent = () => {
    return (
        <div className="grid font-[satoshi] grid-cols-1 lg:pl-[7.4rem] lg:grid-cols-2 mt-8">
            <div className="pl-4">
                <h2 className="text-[#00349A] md:text-[56px] text-[34.6106px] font-[700]">Get in touch</h2>
                <p className="mt-3 font-[400] text-[9.88875px] md:text-[16px] text-[#14142B]">Our friendly team will love to hear from you.<br />
                We are concern about bring knowledge at your pace and your bed space.</p>
                <p className="mt-6 font-[400] text-[9.88875px] md:text-[16px] text-[#14142B]">Start innovation hub, has helped us tons of creative minds grow through<br />
                the years. Their work has always been fantastic, and we hope to work with <br/>
                them in the future.</p>
                <p className="mt-6 font-[400] text-[9.88875px] md:text-[16px] text-[#14142B]">Their Design thought process was customer focused and was very simple.”<br />
                Great Stuff!</p>
            </div>
            <div className="">
                <ContactForm />
            </div>
        </div>
    )
}