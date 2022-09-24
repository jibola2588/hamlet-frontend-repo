import { useState } from "react"
import { BlogContent } from "./blogContent"
import { EventContent } from "./eventContent"

export const Tabs = () => {
    const [currentTab, setCurrentTab] = useState('1')
    const tabs = [
        {
            id:1,
            tabTitle:'Blog',
            content: <BlogContent />,
        },
        {
            id: 2,
            tabTitle:'Events',
            content: <EventContent />,
        }
    ]

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id)
    }

    return (
        <div className="tab--container mt-[51px] font-[satoshi] px-4 lg:px-36 mb-20">
            <div className="tabs flex space-x-24">
                {tabs.map((tab, i) => 
                    <button key={i} className="hover:text-sky-600 w-[132px] mb-3 pb-2 border-[#00349A] disabled:border-b-2 font-[500] font-[20px] disabled:text-[#00349A]" id={tab.id} disabled={currentTab === `${tab.id}`} onClick={handleTabClick}>{tab.tabTitle}</button>
                )}
            </div>
            <div className="content">
                {tabs.map((tab, i) => 
                    <div key={i}>
                       {currentTab === `${tab.id}` && <div>
                            <p>{tab.content}</p>
                        </div>}
                    </div>
                )}
            </div>
        </div>
    )
}