import styled from "vue3-styled-components";
import { color } from "../../colors";

const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${ (props) => props.selected
    ? `${color.primary25}`
    : `${color.white}`
  }; 
  border: ${ (props) => props.selected
    ? `2px solid ${color.primary700}`
    : `1px solid ${color.gray200}`
  };
  box-shadow: 0px 1px 2px rgba(17, 25, 39, 0.04), 0px 1px 3px rgba(17, 25, 39, 0.08);
  border-radius: 8px;
  color: ${color.black};
  padding: ${ (props) => props.selected ? `11px` : `12px`};
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.1px;

  :hover {
    box-shadow: ${ (props) => props.selected
      ? `0 0 0 6px ${color.primary25}`
      : `0 0 0 6px ${color.gray100}`
    };
  };

  :focus-visible {
    outline: none;
  };
`;

export default Tag;
