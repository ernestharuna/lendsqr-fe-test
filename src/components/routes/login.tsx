import { AppLogo, AppName, PabloSign } from "../../assets/icons/logos";

export default function Login() {
  return (
    <div className="font-regular" id="login-page">
      <header className="container">
        <div className="icons">
          <AppLogo /> <AppName />
        </div>
      </header>

      <main className="container">
        <div className="flex items-center justify-between">
          <section id="left-side">
            <PabloSign width={"600px"} />
          </section>

          <section className="form-container" id="right-side">
            <form action="#" className="container">
              <h1 className="font-bold mb-0 mt-0">Welcome!</h1>
              <p className="mb-13 mt-4 fs-5 text-secondary">Enter details to login.</p>
              <div>
                <input type="email" className="input-field w-100" placeholder="Email" />
              </div>
              <div>
                <input type="password" className="input-field w-100" placeholder="Password" />
              </div>
              <p className="text-primary uppercase mb-2 text-small mb-10 font-semibold">
                forgot password?
              </p>

              <button className="w-100">
                LOG IN
              </button>
            </form>
          </section>
        </div>
      </main>
    </div>
  )
}
