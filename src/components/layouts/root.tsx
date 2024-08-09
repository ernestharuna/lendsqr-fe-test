import { Outlet } from "react-router-dom";
import { AppLogo, AppName } from "../../assets/icons/logos";
import { Bell, Search } from "../../assets/icons/icons";
import userImage from "../../assets/images/user-image.png"
import Sidebar from "./sidebar";

export default function Root() {
  return (
    <div id="root">
      <nav className="root-nav">
        <div className="flex items-center justify-between px-7 py-5">

          <section className="flex items-center gap-19">
            <div className="root-app-logo">
              <AppLogo width={20} /> <AppName width={100} />
            </div>
            <form className="root-search-form">
              <input type="search" id="" className="search-box" placeholder="Search for anything" />
              <button type="submit"><Search /></button>
            </form>
          </section>

          <section className="flex items-center gap-12">
            <a href="#" className="d-block text-secondary">Docs</a>
            <Bell />
            <div className="flex items-center gap-5">
              <span className="root-avatar-container">
                <img src={userImage} alt="..." />
              </span>

              <div className="text-secondary">
                Adedeji
              </div>
            </div>
          </section>

        </div>
      </nav>

      <div className="flex">
        <Sidebar />
        <div className="px-7">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
