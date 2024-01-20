import { TABS } from "../redux/actions/type.js";
import { useDispatch } from 'react-redux';
import { toggleTab } from "../redux/actions";

const Tabs = ({ currentTab }) => {
    const dispatch = useDispatch();

    return (
        TABS.map((tab, index) => ( // Add the 'index' parameter for a unique key
            <button
                key={index} // Use 'index' as the key
                className={tab === currentTab ? 'button selected' : 'button'}
                onClick={() => dispatch(toggleTab(tab))}
            >
                {tab}
            </button>
        ))
    )
}

export default Tabs;
