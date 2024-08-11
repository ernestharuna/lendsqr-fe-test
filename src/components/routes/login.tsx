import { useState } from "react";
import { AppLogo, AppName, PabloSign } from "../../assets/icons/logos";

export default function Login() {

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className="avenir" id="login-page">
      <header className="">
        <div className="icons">
          <AppLogo /> <AppName />
        </div>
      </header>

      {/* <main className=""> */}
      <div className="login-wrapper">
        <section className="login-image-container">
          <PabloSign className="login-image" />
        </section>

        <section className="form-container">
          <form action="/" method="get">
            <h1 className="font-bold mb-0 mt-0">Welcome!</h1>
            <p className="mb-13 mt-4 fs-5 text-gray">Enter details to login.</p>
            <div>
              <input type="email" className="input-field w-100" placeholder="Email" />
            </div>

            <div className="login-password-field-wrapper">
              <input className="login-password-field"
                type={passwordVisible ? 'text' : 'password'}
                placeholder="Password"
              />
              <button className="login-password-visibility"
                type="button" onClick={togglePasswordVisibility}
              >
                {passwordVisible ? 'HIDE' : 'SHOW'}
              </button>
            </div>
            <p className="text-primary uppercase text-small mb-10 mt-7 font-semibold">
              forgot password?
            </p>

            <button className="w-100 login-submit">
              LOG IN
            </button>
          </form>
        </section>
      </div>
      {/* </main> */}
    </div>
  )
}
