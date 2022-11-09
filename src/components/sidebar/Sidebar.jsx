import "./sidebar.css";

const Sidebar = () => {
    return ( 
    <div className="sidebar">
        <h5 className="sidebar-title">CATEGORIES</h5>
        <ul className="sidebar-links">
            <li className="sidebar-link">travelling</li>
            <li className="sidebar-link">programming</li>
            <li className="sidebar-link">digital marketing</li>
            <li className="sidebar-link">cars</li>
            <li className="sidebar-link">nature</li>
            <li className="sidebar-link">coffee & tea</li>
        </ul>
    </div> );
}
 
export default Sidebar;