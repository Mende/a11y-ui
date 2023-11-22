import { useState, Key, ReactElement, JSXElementConstructor, ReactNode } from "react"
import cn from 'classnames';

export const TabPanel = ({ tabs, panels, selectedIndex = 0 }) => {
    const [selectedTab, setSelectedTab] = useState(selectedIndex)

    function renderTab(tab: { label: ReactElement<any, string | JSXElementConstructor<any>> }, i: number) {
        const tabClasses = cn(
            'tab',
            {
                'selected': selectedTab === i
            }
        )

        return (
            <button
                className={}
                aria-controls={`panel-${i}`}
                aria-expanded={i === selectedTab}
                aria-selected={i === selectedTab}
                id={`tab-${i}`}
                key={`${tab.label}-${i}`}
                onClick={() => setSelectedTab(i)}
                role="tab"
            >
                {tab.label}
            </button>
        )
    }

    function renderPanel(panel: { content: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> |  null | undefined }, i: any) {
        return (
            <div
                role="tabpanel"
                id={`panel-${i}`}
                aria-labelledby={`tab-${i}`}
                tabIndex={ i === selectedTab ? 0 : -1 }
            >
                {panel.content}
            </div>
        )
    }

    return (
        <>
            {selectedTab}
            <div className="tab-panel" role="tab-list">
                {
                    tabs.map(renderTab)
                }
            </div>
            {
                panels.map(renderPanel)
            }
        </>
    )

}