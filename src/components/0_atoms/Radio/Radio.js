import styled from "vue3-styled-components";
import { color } from "../../colors";

const Radio = styled.input`
    appearance: none;
    -webkit-appearance: none;
    background-color: ${color.white};
    border: 1px solid ${color.gray200};
    padding: 9px;
    cursor: pointer;
    font: inherit;
    color: #c9cdd7;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    transform: translateY(-1px);
    display: grid;
    place-content: center;
    margin: 0;
    pointer-events: ${ (props) => props.pointerEvents };

    &::before {
        content: "";
        width: 10px;
        height: 10px;
        border-radius: 50%;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        background-color: ${color.primary700};
    }

    &:checked {
        border-color: ${color.primary700};
    }
    
    &:checked::before {
        transform: scale(1);
    }
`;

export default Radio;
