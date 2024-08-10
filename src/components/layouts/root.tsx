import { Outlet, useNavigation } from "react-router-dom";
import { AppLogo, AppName } from "../../assets/icons/logos";
import { Bell, PopDown, Search } from "../../assets/icons/icons";
import userImage from "../../assets/images/user-image.png"
import Sidebar from "./sidebar";

export default function Root() {
  const navigation = useNavigation();
  return (
    <div id="root">
      <nav className="root-nav">
        <div className="flex items-center justify-between px-7 py-5">

          <section className="flex items-center gap-19">
            <div className="root-app-logo">
              <AppLogo width={20} /> <AppName width={100} />
            </div>
            <form className="root-search-form">
              <input type="search" id="" className="root-search-box" placeholder="Search for anything" />
              <button type="submit"><Search /></button>
            </form>
          </section>

          <section className="flex items-center gap-12">
            <a href="#" className="d-block text-secondary root-docs">Docs</a>
            <Bell className="root-bell-icon" />
            <div className="flex items-center gap-5">
              <span className="root-avatar-container">
                <img src={userImage} alt="..." />
              </span>

              <div className="text-secondary root-username">
                Adedeji <PopDown />
              </div>
            </div>
          </section>

        </div>
      </nav>

      <div className="flex">
        <Sidebar />
        <div className={
          navigation.state === "loading" ? "loading px-7 root-outlet" : "px-7 root-outlet"
        }>
          <Outlet />
        </div>
      </div>
    </div >
  )
}
