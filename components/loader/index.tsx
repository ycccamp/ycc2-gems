import "./loader.styl"
import { Fragment } from "react"

const Loader = () => (
    <Fragment>
        <section id="loader">
            <section id="loader-appear" />
            <div className="loader-1" />
            <div className="loader-2" />
            <div className="loader-3" />
        </section>
    </Fragment>
)

export default Loader