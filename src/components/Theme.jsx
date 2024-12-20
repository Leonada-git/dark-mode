import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../redux/ActionsCreators";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const Theme=()=>{
    const theme = useSelector((state) => state.theme);
    const dispatch = useDispatch();

    useEffect(() => {
        document.body.style.backgroundColor = theme === "light" ? "#ffffff" : "#020228";
        document.body.style.color = theme === "light" ? "#000000" : "#ffffff";    
        return () => {
          document.body.style.backgroundColor = "";
          document.body.style.color = "";
        };
      }, [theme]);
    return(<div className="btn-theme">
        <span className={theme==="light"? "light-mode": "dark-mode" } onClick={() => dispatch(changeTheme())}>
            {theme==="light"? <MdOutlineDarkMode style={{fontSize: '2rem'}}/>: <MdOutlineLightMode style={{fontSize: '2rem'}} />}
        </span>
    </div>)
}
export default Theme;