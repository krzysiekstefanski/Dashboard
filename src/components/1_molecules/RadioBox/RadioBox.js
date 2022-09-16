import styled from "vue3-styled-components";
import { color } from "../../colors";

const RadioBox = styled.label`
  display: flex;
  justify-content: space-between;
  width: ${(props) => props.width ? props.width : ""};
  min-width: ${(props) => props.min ? props.min : ""};
  padding: 20px;
  background-color: ${color.white};
  border: 1px solid ${color.gray200};
  border-radius: 8px;
  cursor: pointer;
  margin: ${ (props) => props.margin ? props.margin : "" };

  &.checked {
    border: 2px solid ${color.primary700};
    background-color: ${color.primary25};
    padding: calc(20px - 1px);
  };
`;

export default RadioBox;
