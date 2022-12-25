import { customButtonInfo } from "../interface/commonInfo";
import { StyledButton, StyledButtonWrapper } from "../styles/common/StyledButton";

const CustomButton = ({ children, size = "large", onClick }: customButtonInfo): JSX.Element => {
  return (
    <StyledButtonWrapper size={size}>
      <StyledButton onClick={() => onClick()}>{children}</StyledButton>
    </StyledButtonWrapper>
  );
};

export default CustomButton;
