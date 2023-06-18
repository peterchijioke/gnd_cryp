import "./backdrop.scss";

export default function BackDrop({ sidebar, closeSidebar }: any) {
  return (
    <div
      onClick={closeSidebar}
      className={sidebar ? "backdrop backdrop-open" : "backdrop"}
    ></div>
  );
}
