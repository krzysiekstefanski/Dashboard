import styled from "vue3-styled-components"
import { color } from "../../colors";

const InputAlert = styled.div`
  display: none;
  align-items: center;
  width: calc(100% - 16px);
  font-weight: 400;
  line-height: 20px;
  font-size: 12px;
  letter-spacing: -0.2px;
  color: ${color.error800};
  background-color: ${color.error50};
  padding: 4px 8px;
  border-radius: 0 0 8px 8px;
`;

export default InputAlert;
