import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import Styles from "./Button.module.scss";

const cx = classNames.bind(Styles);

function Button({
    to,
    href,
    primary = false, 
    outline = false,
    text = false,
    size = "medium",
    children, 
    onClick,
    disabled,
    rounded,
    className,
    ...passProps

}){
    let Comp = 'button';

    const props = {
        onClick,
        passProps,
        size,
        text,
    }

    if(disabled){
        Object.keys(props).forEach((key) => {
            if(key.startsWith('on') && typeof props[key] === 'function'){
                delete props[key];
            }
        });
        //delete props.onClick;
    }

    if(to){
        props.to = to;
        Comp = Link;
    } else if (href){
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        primary: primary, // es6 primary
        outline,
        [size]: size,
        [className]: className,
        text,
        disabled,
        rounded
    })

    return (
        <Comp className={classes} {...props} >
            <span>{children}</span>    
        </Comp>
    )
}

export default Button;