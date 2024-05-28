// 유효성 검사
const idRegex = /^[a-zA-Z](?=.*[a-zA-Z])(?=.*[0-9]).{6,12}$/g;
const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/;
const nicknameRegex = /^[a-z0-9]{2,5}$/;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

export { idRegex, passwordRegex, nicknameRegex, emailRegex };
