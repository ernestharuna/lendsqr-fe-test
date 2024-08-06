import { Outlet } from "react-router-dom";
import { AppLogo, AppName } from "../../assets/icons/logos";

export default function Root() {
  return (
    <div>
      <nav>
        <div>
          <div className="icons">
            <AppLogo /> <AppName />
          </div>
        </div>

        <div>
          <a href="#" className="d-block">Docs</a>
        </div>
      </nav>
      <Outlet />
    </div>
  )
}
