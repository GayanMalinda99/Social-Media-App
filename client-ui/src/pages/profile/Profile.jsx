import TopBar from "../../components/topBar/TopBar";
import SideBar from "../../components/sideBar/SideBar";
import RightBar from "../../components/rightBar/RightBar";
import Feed from "../../components/feed/Feed";

export default function Home() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <TopBar />
      <div className="profile">
        <SideBar />
        <div className="profileRight">
          <div className="profileRightTop">
          <div className="profileCover">
            <img
              className="profileCoverImg"
              src="asserts/post/3.jpeg"
              alt=""
            />
            <img
              className="profileUserImg"
              src="asserts/person/1.jpeg"
              alt=""
            />
          </div>
          <div className="profileInfo">
              <h4 className="profileInfoName">Safak Kocaoglu</h4>
              <span className="profileInfoDesc">Hello my friends!</span>
          </div>
          </div>
          <div className="profileRightBottom">
              <Feed/>
              <RightBar profile/>
          </div>
        </div>
      </div>
    </>
  );
}