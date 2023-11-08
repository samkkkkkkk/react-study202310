import React from 'react';

//로그인 상태 변수를 관리하는 컨텍스트
const AuthContext = React.createContext({
  isLoggedIn: false,
});

export default AuthContext;
