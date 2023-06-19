import { useNavigate } from "react-router-dom";
import "./toolbar.scss";
import { RxDashboard } from "react-icons/rx";
import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const MEDIA_BASE_URL = process.env.REACT_APP_MEDIA_BASE_URL;
export default function ToolBar({ openSidebar, ...props }: any) {
  const navigate = useNavigate();

  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 1000px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(max-width: 1000px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, [window.matchMedia("(max-width: 1000px)").matches]);
  return (
    <div className="tool-bar">
      <div className="inner-toolbar">
        <div className="hambugger-wrapper">
          {matches && <RxDashboard onClick={openSidebar} size={25} />}
        </div>
        <div className="search">
          <AiOutlineSearch style={{ marginLeft: 10 }} size={15} />
          <input placeholder="Search...." />
        </div>
        <div
          style={{
            width: 50,
            height: 50,
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#ccc",
              alignSelf: "",
              cursor: "pointer",
            }}
            onClick={() => {
              // navigate("/profile");
            }}
            src={"https://avatars.githubusercontent.com/u/52561307?v=4"}
            alt="profile photo"
          />
        </div>
      </div>

      {/* </div> */}
    </div>
  );
}
