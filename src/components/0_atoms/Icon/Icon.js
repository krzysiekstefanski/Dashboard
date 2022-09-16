import styled from "vue3-styled-components";
import { color } from "../../colors";

const Icon = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${ (props) => props.size ? props.size : props.height ? props.height : "" };
    max-height: ${ (props) => props.size ? props.size : props.maxh ? props.maxh : ""}
    min-height: ${ (props) => props.size ? props.size : props.minh ? props.minh : ""}
    width: ${ (props) => props.size ? props.size : props.width ? props.width : "" };
    max-width: ${ (props) => props.size ? props.size : props.max ? props.max : ""}
    min-width: ${ (props) => props.size ? props.size :props.min ? props.min : ""}
    margin: ${ (props) => props.margin ? props.margin : ""};
    position: ${ (props) => props.position ? props.position : ""};
    top: ${ (props) => props.top ? props.top : ""};
    right: ${ (props) => props.right ? props.right : ""};
    bottom: ${ (props) => props.bottom ? props.bottom : ""};
    left: ${ (props) => props.left ? props.left : ""};
    opacity: ${ (props) => props.opacity ? props.opacity : ""};
    z-index: ${ (props) => props.deep ? props.deep : ""};

    @media(max-width: 374px) {
        margin: ${ (props) => props.marginXS ? props.marginXS : "" };
    }

    @media(min-width: 768px) {
        margin: ${ (props) => props.marginMD ? props.marginMD : "" };
    }
    
    @media(min-width: 992px) {
        margin: ${ (props) => props.marginLG ? props.marginLG : "" };
    }
    
    @media(min-width: 1440px) {
        margin: ${ (props) => props.marginXL ? props.marginXL : "" };
    }
    
    @media(min-height: 576px) {
        margin: ${ (props) => props.marginSMH ? props.marginSMH : "" };
    }

    @media(min-height: 768px) {
        margin: ${ (props) => props.marginMDH ? props.marginMDH : "" };
    }

    @media(min-height: 847px) {
        margin: ${ (props) => props.marginLGH ? props.marginLGH : "" };
    }

    svg {
        height: 100%;
        width: 100%;
        transform: ${ (props) => props.transform ? props.transform : ""};

        path {
            fill: ${ (props) => props.color ? props.color : ""};
            transition: fill 0.3s ease, stroke 0.3s ease;
        }
    }
`;

export default Icon;