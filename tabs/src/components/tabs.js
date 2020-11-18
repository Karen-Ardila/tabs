import React, { useState } from 'react';


const Tabs = ({ tabs }) => {
    const [seletedTab, setSelectedTab] = useState(0)
    console.log(seletedTab)


    return (
        <div>
            <div style={{ display: 'flex' }}>
                {
                    tabs.map((tab, i) =>
                        <div
                            key={i}
                            onClick={() => setSelectedTab(i) }
                            style={{
                                padding: '1rem', 
                                backgroundColor: i == seletedTab ? 'white' : 'black', 
                                color: i == seletedTab ? 'black' : 'white' }}>
                            {tab.label}
                        </div>)
                }
            </div>
            {tabs[seletedTab].content}
        </div>
    )
}
export default Tabs;