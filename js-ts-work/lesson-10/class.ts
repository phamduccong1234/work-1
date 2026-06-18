class LoginPage {
  username: string;
  password: string;
  rememberMe: string;
  btnLogin: string;

  constructor(
    username: string,
    password: string,
    rememberMe: string,
    btnLogin: string,
  ) {
    this.username = username;
    this.password = password;
    this.rememberMe = rememberMe;
    this.btnLogin = btnLogin;
  }

  fillUsername(username: string) {
    console.log("Filling username: " + username);
  }

  fillPassword(password: string) {
    console.log("Filling password: " + password);
  }

  clickRememberMe(rememberMe: string) {
    console.log("Clicking remember me: " + rememberMe);
  }

  clickBtnLogin(btnLogin: string) {
    console.log("Clicking button Login: " + btnLogin);
  }
}

class DashboardPage extends LoginPage {
  heading: string;

  constructor(
    heading: string,
    username: string,
    password: string,
    rememberMe: string,
    btnLogin: string,
  ) {
    super(username, password, rememberMe, btnLogin);
    this.heading = heading;
  }
}

const loginPageObj = new LoginPage(
  "testUser",
  "testPassword",
  "true",
  "loginButton",
);

const dashboardPageObj = new DashboardPage(
  "Dashboard Heading",
  "testUser",
  "testPassword",
  "true",
  "loginButton",
);
dashboardPageObj.fillUsername("Cong");
dashboardPageObj.fillPassword("1234");
dashboardPageObj.clickRememberMe("checked");
dashboardPageObj.clickBtnLogin("Login");
