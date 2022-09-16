import styled from "vue3-styled-components"
import { color } from "../../colors"

const BannerAlert = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-weight: 400;
  line-height: 22px;
  font-size: 14px;
  letter-spacing: -0.2px;
  color: ${color.black};
  background-color: ${color.primary25};
  padding: 16px;
  border-radius: 4px;
  margin: ${ (props) => props.margin ? props.margin : "" };
`;

export default BannerAlert;
