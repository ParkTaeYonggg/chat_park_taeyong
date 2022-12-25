import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import CustomButton from "../common/CustomButton";
import CustomInput from "../common/CustomInput";
import useInput from "../hooks/useInput";
import { msgInfo } from "../interface/signUpInfo";
import { StyledSignUpBox, StyledSignUpContainer, StyledSignUpErrorMSG, StyledSignUpLink, StyledSignUpTitle, StyledSignUpWrapper } from "../styles/StyledSignUp";
import { checkId, checkPw } from "../utils/validateInput";
import { ErrorAlert } from "../utils/alerts";

const SignUp = (): JSX.Element => {
  const router = useRouter();
  const [id, setId] = useInput("");
  const [pw, setPw] = useInput("");
  const [subPw, setSubPw] = useInput("");
  const [msg, setMsg] = useState<msgInfo>({
    id: "",
    pw: "",
  });

  const handleSetMsg = useCallback(
    (key: string, e: string) => {
      setMsg({ ...msg, [key]: e });
    },
    [msg]
  );

  const handleSignUp = () => {
    if (!!msg.id || !!msg.pw) return;
    createUserWithEmailAndPassword(auth, id, pw)
      .then((userCredential) => {
        router.push("/");
      })
      .catch((error) => {
        ErrorAlert("회원가입 실패", "관리자에게 문의하세요. 00-0000-0000");
      });
  };

  const goBack = (): void => {
    router.back();
  };
  return (
    <StyledSignUpWrapper>
      <StyledSignUpContainer>
        <StyledSignUpTitle>Only 채팅</StyledSignUpTitle>
        <CustomInput
          value={id}
          type="email"
          onChange={setId}
          placeholder={"아이디를 입력해주세요 (ex : park@taey.ong)"}
          onBlur={() => handleSetMsg("id", checkId(id))}
        />
        <CustomInput
          value={pw}
          type="password"
          onChange={setPw}
          placeholder={"패스워드를 입력해주세요 (최소 6자 이상)"}
          onBlur={() => handleSetMsg("pw", checkPw(pw, subPw))}
        />
        <CustomInput
          value={subPw}
          type="password"
          onChange={setSubPw}
          placeholder={"다시 한 번 패스워드를 입력해주세요."}
          onBlur={() => handleSetMsg("pw", checkPw(pw, subPw))}
        />
        <StyledSignUpErrorMSG>{msg.id ? msg.id : msg.pw ? msg.pw : ""}</StyledSignUpErrorMSG>
        <CustomButton onClick={handleSignUp}>회원가입</CustomButton>
        <StyledSignUpBox>
          <span onClick={() => goBack()}>
            <StyledSignUpLink>뒤로가기</StyledSignUpLink>
          </span>
        </StyledSignUpBox>
      </StyledSignUpContainer>
    </StyledSignUpWrapper>
  );
};

export default SignUp;
