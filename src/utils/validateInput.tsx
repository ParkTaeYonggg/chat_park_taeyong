export const checkId = (id: string): string => {
  const regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  return id.trim() === "" ? "이메일을 입력해주세요." : regex.test(id) ? "" : "올바른 이메일을 입력해주세요.";
};

export const checkPw = (pw: string, subPw: string): string => {
  const msg = "비밀번호를 확인해주세요.";
  const pwChk: boolean = pw.trim() === "";
  const subPwChk: boolean = subPw.trim() === "";
  const isSuccess: boolean = pw.trim() === subPw.trim();
  return pwChk ? msg : subPwChk ? msg : isSuccess ? "" : "비밀번호를 확인해주세요.";
};
