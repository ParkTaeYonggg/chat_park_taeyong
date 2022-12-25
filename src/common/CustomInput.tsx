import { customInputInfo } from "../interface/commonInfo";
import { StyledInput, StyledInputWrapper } from "../styles/common/StyledInput";

const CustomInput = ({ type, value, onChange, placeholder, onBlur = () => {} }: customInputInfo): JSX.Element => {
  return (
    <StyledInputWrapper>
      <StyledInput type={type} value={value} onChange={(e) => onChange(e)} placeholder={placeholder} onBlur={() => onBlur()} />
    </StyledInputWrapper>
  );
};
export default CustomInput;
