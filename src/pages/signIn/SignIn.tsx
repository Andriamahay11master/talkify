import React, { useEffect } from "react";
import { Link, Navigate } from 'react-router-dom';
import { PhoneAuthProvider, RecaptchaVerifier ,signInWithCredential,signInWithPhoneNumber, User } from "firebase/auth";
import { auth } from "../../firebase";

import Splashscreen from "../splashscreen/Splashscreen";


interface SigninProps {
    user: User | null
}
export default function SignIn({user} : SigninProps) {
    
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [verificationCode, setVerificationCode] = React.useState('');
    const [success, setSuccess] = React.useState(false);
    const [errorExist, setErrorExist] = React.useState(false);
    const [errorForm, setErrorForm] = React.useState('');
    const [codeError, setCodeError] = React.useState('');
    const [verificationId, setVerificationId] = React.useState<string | null>(null);
    const [recaptchaVerifier, setRecaptchaVerifier] = React.useState<RecaptchaVerifier | null>(null);

    useEffect(() => {
        // Setup Recaptcha after the component mounts
        setupRecaptcha();
    }, []);

    const setupRecaptcha = () => {
        const recaptchaElement = document.getElementById('recaptcha-container');
        if (!recaptchaElement) {
            console.error('Recaptcha container not found');
            return;
        }

        const verifier = new RecaptchaVerifier(auth, recaptchaElement, {
            size: 'invisible',
            callback: (response: string) => {
                console.log("Recaptcha verified", response);
            },
            'expired-callback': () => {
                console.log("Recaptcha expired, please solve again.");
            }
        });

        verifier.render().then(() => {
            setRecaptchaVerifier(verifier);
        }).catch((error) => {
            console.error("Recaptcha render error:", error);
        });
    };
    

    const connectAccount = (e : React.FormEvent) => {
        e.preventDefault();
        if(!phoneNumber) return;

        if (!recaptchaVerifier) {
            setupRecaptcha();  // Initialise recaptcha si ce n'est pas fait
        }
        
        signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier as RecaptchaVerifier)
        .then((confirmationResult) => {
            setVerificationId(confirmationResult.verificationId);
            // SMS sent, show the user a UI to enter the code
            console.log("SMS sent");
        })
        .catch((error) => {
            console.error(error);
            setErrorExist(true);
            setCodeError(error.code);
            manageMessageError();
        });
    }

    const verifyCode = (e: React.FormEvent) => {
        e.preventDefault();
        if (!verificationId || !verificationCode) return;

        const credential = PhoneAuthProvider.credential(verificationId, verificationCode);

        signInWithCredential(auth, credential)
            .then((userCredential) => {
                const user = userCredential.user;
                localStorage.setItem('userBabyTrack', JSON.stringify(user));
                localStorage.setItem('isLoggedIn', 'true');
                setSuccess(true);
                console.log(user);
            })
            .catch((error) => {
                console.error(error);
                setErrorExist(true);
                setCodeError(error.code);
                manageMessageError();
            });
    };

    const manageMessageError = () => {
        switch (codeError) {
            case 'auth/invalid-phone-number':
                setErrorForm('Invalid phone number');
                break;
            case 'auth/missing-verification-code':
                setErrorForm('Missing verification code');
                break;
            default:
                setErrorForm('Invalid phone number or code');
                break;
        }
    };

    const onChangePhoneNumber = (e : React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(e.target.value);
        if(errorExist) setErrorExist(false);
    }

    const onChangeVerificationCode = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVerificationCode(e.target.value);
        if (errorExist) setErrorExist(false);
    };

    if(user && localStorage.getItem('isLoggedIn') === 'true') {
        console.log("********sign in",localStorage.getItem('isLoggedIn'));
        return <Navigate to="/" />
    }

    

    return (
        <div className="form-block-gabarit">
            <div className="form-block-content">
                <div className="form-content">
                    <h2 className="title-h2">Sign in to your Account</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="phone"><i className="icon-mail"></i>Phone Number</label>
                            <input type="text" id="phone" placeholder="Phone Number" onChange={onChangePhoneNumber}/>
                        </div>
                        {(errorExist && errorForm) && <p className="error-form">{errorForm}</p>}

                        {verificationId && (
                            <div className="form-group">
                                <label htmlFor="code"><i className="icon-key"></i>Verification Code</label>
                                <input type="text" id="code" placeholder="Enter Code" onChange={onChangeVerificationCode} />
                            </div>
                        )}
                        <div className="form-group form-submit">
                            {verificationId ? (
                                <button className="btn btn-primary" onClick={verifyCode}>Verify Code</button>
                            ) : (
                                <button className="btn btn-primary" onClick={connectAccount}>Send Code</button>
                            )}
                        </div>
                    </form>
                    <p>Did you have an Account ?<Link className="btn btn-link" to="/signUp">SIgn up</Link></p>
                </div>
            </div>
            <div id="recaptcha-container"></div>
            {success && <Splashscreen />}
        </div>
    );
}