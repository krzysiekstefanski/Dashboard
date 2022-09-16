import styled from "vue3-styled-components";

const Image = styled.img`
    height: ${ (props) => props.height ? props.height : "" };
    width: ${ (props) => props.width ? props.width : "" };
`;

export default Image;