function submit_btn(){

  var emailsum = localStorage.getItem("emailsum");
  var pwd = localStorage.getItem("pwd");

  var login_emailsum = document.getElementById("login_emailsum").value;
  var login_pwd = document.getElementById("login_pwd").value;

    if(!login_emailsum){
      alert('이메일주소를 입력해주세요');
      login_emailsum.select();
      return false;
    }
  
    else if(!login_pwd){
        alert('비밀번호를 입력해주세요.');
        login_pwd.select();
        return false;
      }

    else if (emailsum === login_emailsum && pwd === login_pwd) {
      window.open('h.html',"_self");
      localStorage.setItem("loggedin","true");
      } 
    else {
      alert('로그인 실패. 이메일 또는 비밀번호를 확인하세요.');
  
      }

  }
