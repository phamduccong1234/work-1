class loginPage {
    username: string;
    password: string;
    rememberMe: string;
    btnLogin: string;

    constructor(username: string, password: string, rememberMe: string, btnLogin: string){
        this.username = username;
        this.password = password;
        this.rememberMe = rememberMe;
        this.btnLogin = btnLogin;
    }

    fillUsername(username: string){
        console.log("Filling username: " + username);
    }

    fillPassword(password: string){
        console.log("Filling password: " + password);
    }

    clickRememberMe(rememberMe: string){
        console.log("Clicking remember me: " + rememberMe);
    }

    clickBtnLogin(btnLogin: string){
        console.log("Clicking button Login: " + btnLogin);
    }
}