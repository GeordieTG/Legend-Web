import {Link} from "react-router-dom";

const Button = (props: any) => {
    return (
        <Link className="arrowbutton w-100" to={props.path}>
            {props.text}
            <div className="arrow-wrapper">
                <div className="arrow"></div>
            </div>
        </Link>
    )
}

export default Button