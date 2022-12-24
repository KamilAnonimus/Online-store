<template>
    <div class="container">
        <div class="header-window">
            <RouterLink to="/"><img src="../components&img/img/Logo.png" class="header-window__ logo"></RouterLink>
            <div class="header-window__moders">
                <div class="moders__ login"
                    :class="{'login-selected':selectedLogin}"
                    v-on:click="changesSelectedLogin"
                >Login</div>
                <div class="moders__ separator">|</div>
                <div class="moders__ registration"
                     :class="{'registration-selected':selectedRegistration}"
                     v-on:click="changesSelectedRegistration"
                >Registration</div>
            </div>
        </div>
        <div class="main-part-window-input-data">
            <input type="search" placeholder="YourName" class="main-part-window-input-data__ inputLogin" id="YourNameOrEmail"
                                                                 :class="{'inputLogin-selected':selectedRegistration}">
            <input type="search"  placeholder="YourName"  class="main-part-window-input-data__ inputLoginForRegistration" id="YourName"
                                                          :class="{'inputLoginForRegistration-selected':selectedLogin}">
            <input type="password" placeholder="YourPassword" class="main-part-window-input-data__ inputPassword" id="YourPassword">
            <input type="search" placeholder="YourEmail" class="main-part-window-input-data__ inputEmail" id="YourEmail"
                                                         :class="{'inputEmail-selected':selectedRegistration}">
        </div>
        <div class="footer-window">
            <div class="footer-window__mistakes"></div>
            <div class="footer-window__buttom" 
                v-on:click="auth"
                >Log in / To come in
            </div>
            <div class="footer-window__question">
                <div class="question__startQuestion">Are you</div>
                <div class="question__EndQuestion"><a v-on:click="changesSelectedRegistration">registered</a>?</div>
            </div>
        </div>
    </div>
</template>

<script>
import {login, registration} from "../http/userAPI"

export default {
    data() {
        return {
            selectedLogin: true,
            selectedRegistration: false
        }
    },
    methods: {
        changesSelectedLogin() {
            if(this.selectedLogin === false) {
                this.selectedRegistration = false
                this.selectedLogin = true
            }
            this.cleansingInputs()
        },
        changesSelectedRegistration() {
            if(this.selectedRegistration === false) {
                this.selectedLogin = false
                this.selectedRegistration = true
            }
            this.cleansingInputs()
        },
        cleansingInputs() {
            document.getElementById("YourNameOrEmail").value = "";
            document.getElementById("YourName").value = "";
            document.getElementById("YourPassword").value = "";
            document.getElementById("YourEmail").value = "";
        },
        auth() {

                if (this.selectedRegistration) {
                    let loginForAuth = document.getElementById("YourName").value
                    let passwordForAuth = document.getElementById("YourPassword").value
                    let emailForAuth = document.getElementById("YourEmail").value

                    let email = loginForAuth
                    let password = passwordForAuth

                    const response = registration(email, password)
                    console.log(response)
                } else {
                    let loginOrEmailForEntrance = document.getElementById("YourNameOrEmail").value
                    let passwordForEntrance = document.getElementById("YourPassword").value
                }
            this.cleansingInputs()
            
        }
    }
}
</script>

<style scoped>
    .container {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        padding: 20px;
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }

    .header-window, .header-window__moders {
        display: flex;
    }

    .moders__ {
        padding: 10px;
    }
    .login {
        padding-left: 30px;
    }
    .login-selected, .registration-selected {
        font-weight: 600;
    }
    .main-part-window-input-data {
        display: flex;
        flex-direction: column;
    }

    .main-part-window-input-data__{
        margin-top: 20px;
        border: 1px solid black;
        width: 350px;
    }

    .footer-window__buttom{
        background-color: #08B1D6;
        width: 160px;
        margin-top: 30px;
        border-radius: 10px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .footer-window__buttom:hover{
        opacity: 60%;
    }

    .footer-window__mistakes {
        padding-top: 20px;
        color: red;
        font-size: 16px;
    }

    .footer-window {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .footer-window__question {
        padding-top: 20px;
        color: #999595;
    }

    .inputEmail, .inputLogin-selected, .footer-window__question, .inputLoginForRegistration-selected  {
        display: none;
    }
    .inputEmail-selected{
        display: block;
    }

    .footer-window__question {
        display: flex;
    }

    .question__EndQuestion {
        padding-left: 10px;
    }
</style>