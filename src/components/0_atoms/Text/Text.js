import styled from "vue3-styled-components";
import { color } from "../../colors";

const Text = styled.p`
    width: ${ (props) => props.width ? props.width : "" };
    max-width: ${ (props) => props.max ? props.max : "" };
    font-size: ${ (props) => props.size ? props.size : "16px" };
    line-height: ${ (props) => props.interline ? props.interline : "24px" };
    font-weight: ${ (props) => props.weight ? props.weight : "400" };
    letter-spacing: ${ (props) => props.spacing ? props.spacing : "" };
    color: ${ (props) => props.color ? props.color : color.black };
    text-align: ${ (props) => props.align ? props.align : "left"};
    padding: ${ (props) => props.padding ? props.padding : "" };
    margin: ${ (props) => props.margin ? props.margin : "" };
    cursor: ${ (props) => props.pointer ? "pointer" : "" };
    pointer-events: ${ (props) => props.events ? props.events : "" };

    &:hover {
        background-color: ${ (props) => props.hoverBackgroundColor ? props.hoverBackgroundColor : "" };
    }
    text-transform: ${ (props) => props.transform };


    @media(min-width: 769px) {
        text-align: ${ (props) => props.alignMD ? props.alignMD : ""};
        padding: ${ (props) => props.paddingMD ? props.paddingMD : "" };
        margin: ${ (props) => props.marginMD ? props.marginMD : "" };
    }
`;

export default Text;