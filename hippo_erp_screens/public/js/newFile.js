const { maincontainer, loginFormContainer } = require("./login");

if (maincontainer) {
    maincontainer.style.alignContent = 'center';
    maincontainer.style.height = '80vh';


    if (loginFormContainer) {
        loginFormContainer.style.maxWidth = '900px';
        loginFormContainer.style.margin = 'auto';
        const loginCard = loginFormContainer.querySelector('.for-login');
        if (loginCard) {
            loginCard.style.display = 'flex';
            loginCard.style.width = '100%';
            loginCard.style.borderRadius = '10px';
            loginCard.style.boxShadow = '0px 0px 10px rgba(0,0,0,.12)';
            const pagecardHead = loginCard.querySelector('.page-card-head');
            if (pagecardHead) {

                pagecardHead.style.width = '50%';
                pagecardHead.style.flex = '1';
                pagecardHead.style.display = 'flex';
                pagecardHead.style.justifyContent = 'center';
                pagecardHead.style.flexDirection = 'column';
                pagecardHead.style.textAlign = 'center';
                pagecardHead.style.color = '#017bcf';
                pagecardHead.style.backgroundColor = '#f0f9ff';
                pagecardHead.style.borderRadius = '10px 0px 0px 10px';

                const applogo = pagecardHead.querySelector('.app-logo');
                if (applogo) {
                    applogo.style.display = 'none';
                }
                const welcomeText = pagecardHead.querySelector('h4');
                if (welcomeText) {
                    welcomeText.innerHTML = 'Welcome Back!';
                    welcomeText.style.fontSize = '28px';
                    welcomeText.style.fontWeight = '800';
                    welcomeText.style.margin = '0px 0px 0px';
                    welcomeText.style.fontFamily = 'times';

                    const paraText = document.createElement('p');
                    paraText.innerHTML = 'Sign in for easy management.';
                    paraText.style.fontSize = '12px';
                    paraText.style.margin = '0px';
                    paraText.style.lineHeight = '2';
                    paraText.style.color = 'grey';

                    pagecardHead.append(paraText);

                    const manImage = document.createElement('img');
                    manImage.src = '/assets/hippo_erp_screens/images/man.png';
                    manImage.style.height = '165px';
                    manImage.style.marginBottom = '15px';
                    manImage.style.marginTop = '30px';
                    manImage.style.filter = 'drop-shadow(0px 0px 4px grey)';
                    manImage.style.display = 'block';
                    manImage.style.margin = '30px auto 15px';
                    manImage.style.flexShrink = '0';
                    manImage.style.minHeight = '165px';
                    pagecardHead.append(manImage);



                }
            }
            const formContent = loginCard.querySelector('.login-content.page-card');
            const loginBox = formContent.querySelector('.form-signin.form-login');
            if (formContent) {
                formContent.style.flex = '1';
                formContent.style.width = '50%';
                formContent.style.display = 'flex';
                formContent.style.justifyContent = 'center';
                formContent.style.flexDirection = 'column';
                formContent.style.textAlign = 'center';
                formContent.style.backgroundColor = '#fff';
                formContent.style.borderRadius = '0px 10px 10px 0px';

                const hippologo = document.createElement('img');
                hippologo.src = '/assets/hippo_erp_screens/images/hippologo.png';
                hippologo.style.width = '170px';
                hippologo.style.display = 'block';
                hippologo.style.margin = 'auto';
                if (loginBox) {
                    formContent.insertBefore(hippologo, loginBox);
                    loginBox.style.marginTop = '30px';
                    loginBox.style.width = '300px';
                    const pagecardbody = loginBox.querySelector('.page-card-body');
                    const pagecardbodysecondary = pagecardbody.querySelector('.page-card-body');
                    const loginbutton = pagecardbody.querySelector('.page-card-actions button');
                    const poweredby = pagecardbody.querySelector('.social-logins.text-center');
                    if (poweredby) {
                        poweredby.innerHTML = `<footer>Powered by < a href = "https://hippoclouds.com/" target = "_blank" > HippoCloud</a ></footer > `;
                    }
                    if (pagecardbody) {
                        pagecardbody.style.gap = '20px';
                        // pagecardbodysecondary.style.display = 'none'
                        if (pagecardbodysecondary) {
                            const emailfield = pagecardbodysecondary.querySelector('.form-group .email-field');
                            const passwordfield = pagecardbodysecondary.querySelector('.form-group .password-field');
                            const forgot = pagecardbodysecondary.querySelector('.forgot-password-message a');

                            if (emailfield) {
                                const emailinputfiled = emailfield.querySelector('input');
                                const emailinputfiledsvg = emailfield.querySelector('svg');
                                if (emailfield) {
                                    emailfield.style.backgroundColor = '#ffff';
                                    emailfield.style.border = 'none';
                                    emailfield.style.height = '30px';
                                    emailfield.style.borderRadius = '5px';
                                    emailfield.style.boxShadow = '0px 0px 5px grey';
                                    emailfield.style.marginBottom = '20px';
                                    if (emailinputfiledsvg) {
                                        emailinputfiledsvg.style.marginTop = '2px';
                                        emailinputfiled.placeholder = 'Add your email here';

                                    }
                                }
                            }
                            if (passwordfield) {
                                const passowordinputfiled = passwordfield.querySelector('input');
                                const passowordinputfiledsvg = passwordfield.querySelector('svg');
                                if (passwordfield) {
                                    passwordfield.style.backgroundColor = '#ffff';
                                    passwordfield.style.border = 'none';
                                    passwordfield.style.height = '30px';
                                    passwordfield.style.borderRadius = '5px';
                                    passwordfield.style.boxShadow = '0px 0px 5px grey';
                                    if (passowordinputfiledsvg) {
                                        passowordinputfiled.placeholder = 'Add your password here';
                                        passowordinputfiledsvg.style.marginTop = '2px';

                                    }
                                }
                            }
                            if (forgot) {
                                forgot.style.transition = '200ms';
                                forgot.style.color = '#525252';

                                forgot.addEventListener('mouseover', () => {
                                    forgot.style.color = '#017bcf';
                                });
                                forgot.addEventListener('mouseout', () => {
                                    forgot.style.color = '#525252';
                                });
                            }


                        }
                    }
                    if (loginbutton) {
                        loginbutton.style.backgroundColor = '#017bcf';
                        loginbutton.style.borderRadius = '5px';
                        loginbutton.style.boxShadow = '0px 0px 5px grey';

                        loginbutton.addEventListener('mouseover', () => {
                            loginbutton.style.backgroundColor = '#fc3f19d8';
                        });
                        loginbutton.addEventListener('mouseout', () => {
                            loginbutton.style.backgroundColor = '#017bcf';
                        });
                    }

                }



            }
        }
    }
}
