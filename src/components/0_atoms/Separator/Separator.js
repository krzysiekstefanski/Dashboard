import styled from "vue3-styled-components";
import { color } from "../../colors";

const Separator = styled.span`
    display: block;
    height: ${ (props) => props.height ? props.height : "1px" };
    max-height: ${ (props) => props.maxh ? props.maxh : "" };
    min-height: ${ (props) => props.minh ? props.minh : "" };
    width: ${ (props) => props.width ? props.width : "100%" };
    max-width: ${ (props) => props.max ? props.max : "" };
    min-width: ${ (props) => props.min ? props.min : "" };
    background-color: ${ (props) => props.color ? props.color : color.gray200 };
    padding: ${ (props) => props.padding ? props.padding : "" };
    margin: ${ (props) => props.margin ? props.margin : "12px 0" };
`;

export default Separator;