import styled from "vue3-styled-components";
import { color } from "../../colors";

const Heading = styled.h1`
    max-width: ${ (props) => props.max ? props.max : "" };
    font-size: ${ (props) => props.size ? props.size : "16px" };
    line-height: ${ (props) => props.interline ? props.interline : "24px" };
    font-weight: ${ (props) => props.weight ? props.weight : "400" };
    letter-spacing: ${ (props) => props.spacing ? props.spacing : "" };
    color: ${ (props) => props.color ? props.color : color.black };
    text-align: ${ (props) => props.align ? props.align : ""}
    padding: ${ (props) => props.padding ? props.padding : "" };
    margin: ${ (props) => props.margin ? props.margin : "" };

    @media(min-width: 769px) {
        text-align: ${ (props) => props.alignMD ? props.alignMD : ""}
        padding: ${ (props) => props.paddingMD ? props.paddingMD : "" };
        margin: ${ (props) => props.marginMD ? props.marginMD : "" };
    }
`;

export default Heading;