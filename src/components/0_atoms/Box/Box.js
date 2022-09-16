import styled from "vue3-styled-components";

const Box = styled.div`
    display: ${ (props) => props.display ? props.display : "flex" };
    flex-direction: ${props => (props.column ? "column" : props.direction ? props.direction : "row")};
    flex-wrap: ${(props) => props.wrap ? props.wrap : ""};
    grid-template-columns: ${props => (props.columns ? props.columns : "")};
    gap: ${props => (props.gap ? props.gap : "")};
    justify-content: ${props => (props.center && (props.direction !== "column") ? "center" : props.justify ? props.justify : "")};
    align-items: ${props => (props.center && (props.direction === "column") ? "center" : props.align ? props.align : "")};
    flex-wrap: ${ (props) => props.display !== "flex" ? "" : props.wrap ? props.wrap : "" };
    flex-grow: ${ (props) => props.grow ? props.grow : "" };
    height: ${ (props) => props.height ? props.height : "" };
    max-height: ${ (props) => props.maxHeight ? props.maxHeight : "" };
    width: ${ (props) => props.width ? props.width : "" };
    max-width: ${ (props) => props.max ? props.max : "" };
    min-width: ${ (props) => props.min ? props.min : "" };
    background-color: ${ (props) => props.backgroundColor ? props.backgroundColor : "" };
    border: ${ (props) => props.border ? props.border : "" };
    border-width: ${ (props) => props.borderWidth ? props.borderWidth : "" };
    border-style: ${ (props) => props.borderStyle ? props.borderStyle : props.borderWidth ? "solid" : "" };
    border-color: ${ (props) => props.borderColor ? props.borderColor : "" };
    border-radius: ${ (props) => props.radius ? props.radius : "" };
    padding: ${ (props) => props.padding ? props.padding : "" };
    margin: ${ (props) => props.margin ? props.margin : "" };
    position: ${ (props) => props.position ? props.position : ""};
    top: ${ (props) => props.top ? props.top : ""};
    right: ${ (props) => props.right ? props.right : ""};
    bottom: ${ (props) => props.bottom ? props.bottom : ""};
    left: ${ (props) => props.left ? props.left : ""};
    overflow: ${ (props) => props.overflow ? props.overflow : "" };

    @media(max-width: 374px) {
        padding: ${ (props) => props.paddingXS ? props.paddingXS : "" };
    }

    @media(min-width: 768px) {
        padding: ${ (props) => props.paddingMD ? props.paddingMD : "" };
    }
    
    @media(min-width: 992px) {
        padding: ${ (props) => props.paddingLG ? props.paddingLG : "" };
    }
    
    @media(min-width: 1440px) {
        padding: ${ (props) => props.paddingXL ? props.paddingXL : "" };
    }
    
    @media(min-height: 576px) {
        padding: ${ (props) => props.paddingSMH ? props.paddingSMH : "" };
    }

    @media(min-height: 768px) {
        padding: ${ (props) => props.paddingMDH ? props.paddingMDH : "" };
    }

    @media(min-height: 847px) {
        padding: ${ (props) => props.paddingLGH ? props.paddingLGH : "" };
    }
`;

export default Box;