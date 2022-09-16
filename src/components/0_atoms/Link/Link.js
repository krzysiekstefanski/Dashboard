import styled from "vue3-styled-components";
import { color } from "../../colors";

const Link = styled.a`
    font-size: ${ (props) => props.size ? props.size : "" };
    line-height: ${ (props) => props.interline ? props.interline : "" };
    font-weight: ${ (props) => props.weight ? props.weight : "" };
    letter-spacing: ${ (props) => props.spacing ? props.spacing : "" };
    color: ${ (props) => props.color ? props.color : color.black };
    margin: ${ (props) => props.margin ? props.margin : "" };
    text-decoration: none;
    transition: color .3s ease;
    cursor: pointer;

    @media(min-width: 769px) {
        margin: ${ (props) => props.marginMD ? props.marginMD : "" };
    }

    &:hover {
        color: ${ (props) => props.hover ? props.hover : "" };
        text-decoration: ${ (props) => props.underline ? "underline" : "" };
    }
`;

export default Link;