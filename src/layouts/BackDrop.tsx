import { useEffect, useState } from "react";
import "./backdrop.scss";

export default function BackDrop({ sidebar, closeSidebar }: any) {
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 1000px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(max-width: 1000px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, [window.matchMedia("(max-width: 1000px)").matches]);

  if (!matches) {
    return null;
  }
  return (
    <div
      onClick={closeSidebar}
      className={sidebar ? "backdrop backdrop-open" : "backdrop"}
    ></div>
  );
}
