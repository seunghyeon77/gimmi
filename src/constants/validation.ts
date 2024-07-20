// 유효성 검사
const idRegex = /^[a-zA-Z0-9]+$/;
const passwordRegex =
  /(?=.*[0-9])(?=.*[~!@#$%^&*()_+<>?:])[a-zA-Z0-9~!@#$%^&*()_+<>?:]{8,20}/;
const nicknameRegex = /^[ㄱ-ㅎ가-힣a-zA-Z0-9]+$/;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

const workspaceName = /^[a-zA-Z가-힣0-9]+$/;

export { idRegex, passwordRegex, nicknameRegex, emailRegex, workspaceName };
