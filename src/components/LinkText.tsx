import React from 'react';
import {Link} from "react-router-dom";

interface LinkTextProps {
    text: string,
    to: string,
    color: "cyan" | "blue" | "green" | "red",
}

const LinkText = ({text, to, color}: LinkTextProps) => (
    <Link to={to}><p style={{color}}>{text}</p></Link>
);

LinkText.defaultProps = {
    text: "Link",
    to: "",
    color: "blue",
};

export default LinkText;