import VTelInput from "./VTelInput.vue";
import styled from "vue3-styled-components";
import { color } from "../../colors";

const TelInput = styled(VTelInput)`
  margin: ${ (props) => props.margin };
  
  &.vue-tel-input {
    border: 1px solid ${color.gray200};
    border-radius: 8px;

    :focus-within {
      border: 1px solid ${color.gray400};
      outline: none;
      box-shadow: none;
    };

    .vti__input {
      font-family: Inter, sans-serif;
      border-radius: 8px;
      padding: 8px;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;

      ::placeholder {
        color: ${color.gray500};
      };
    };

    .vti__dropdown {
      border-radius: 8px;
      :hover {
        background-color: ${color.white};
      };
    };
  };
`;

export default TelInput;
