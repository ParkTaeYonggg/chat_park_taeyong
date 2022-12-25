import Link from "next/link";
import CustomButton from "../common/CustomButton";
import CustomInput from "../common/CustomInput";
import useInput from "../hooks/useInput";
import { StyledLoginContainer, StyledLoginSignUpBox, StyledLoginSignUpLink, StyledLoginTitle, StyledLoginWrapper } from "../styles/StyledLogin";
import { auth } from "../firebase/firebase";
import { ErrorAlert } from "../utils/alerts";
import { setCookie } from "cookies-next";
import { useRouter } from "next/router";
import signInUser from "../firebase/signInUser";

const Login = (): JSX.Element => {
  const [id, setId] = useInput("");
  const [pw, setPw] = useInput("");
  const router = useRouter();

  const handleLogin = async (id: string, pw: string) => {
    const user = await signInUser(id, pw);

    if (user?.email) {
      setCookie("userData", JSON.stringify({ id: user.email, uid: user.uid, token: user.refreshToken }), { maxAge: 60 * 6 * 24 });
      router.push("/chat");
    } else {
      ErrorAlert("로그인 실패", "아이디 혹은 비밀번호를 다시 확인해주세요.");
    }
  };

  return (
    <StyledLoginWrapper>
      <StyledLoginContainer>
        <StyledLoginTitle>Only 채팅</StyledLoginTitle>
        <CustomInput type={"email"} value={id} onChange={setId} placeholder={"아이디를 입력해주세요."} />
        <CustomInput type={"password"} value={pw} onChange={setPw} placeholder={"패스워드를 입력해주세요."} />
        <CustomButton onClick={() => handleLogin(id, pw)}>로그인</CustomButton>
        <StyledLoginSignUpBox>
          <StyledLoginSignUpLink href={"/signup"}>회원가입</StyledLoginSignUpLink>
        </StyledLoginSignUpBox>
      </StyledLoginContainer>
    </StyledLoginWrapper>
  );
};

export default Login;
