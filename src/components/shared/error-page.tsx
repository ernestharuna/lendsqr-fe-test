import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error: any = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="py-5 px-10">
            <h1 className="text-secondary">Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i> — <Link to="/">Go to dashboard</Link>
            </p>
        </div>
    )
}
