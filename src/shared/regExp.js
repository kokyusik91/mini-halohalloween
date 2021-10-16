export const emailCheck = (value) => {
  const regExp =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return regExp.test(value);
};

export const passwordCheck = (value) => {
  // 영문 숫자 조합 6자리 이상
  const regEXP = /^.*(?=.{6,20})(?=.*[0-8])(?=.*[a-zA-Z]).*$/;
  return regEXP.test(value);
};
