import React from "react";
import { Link, Navigate } from 'react-router-dom';
import { supabase } from "../../supabaseClient";

import Splashscreen from "../splashscreen/Splashscreen";
import { User } from "@supabase/supabase-js";


interface SigninProps {
    user: User | null
}
export default function SignIn({user} : SigninProps) {
    
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [verificationCode, setVerificationCode] = React.useState('');
    const [success, setSuccess] = React.useState(false);
    const [errorExist, setErrorExist] = React.useState(false);
    const [errorForm, setErrorForm] = React.useState('');
    const [verificationId, setVerificationId] = React.useState<boolean>(false);

    const connectAccount = async (e : React.FormEvent) => {
        e.preventDefault();
        if(!phoneNumber) return
        
        const { error } = await supabase.auth.signInWithOtp({ phone: phoneNumber });
        if (error) {
            console.error(error);
            setErrorExist(true);
            setErrorForm('Erreur lors de l\'envoi du code');
        } else {
            setVerificationId(true); // Le code a été envoyé, afficher le champ de vérification
            console.log("SMS envoyé");
        }
    }

    const verifyCode = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!verificationId || !verificationCode) return;

        // Vérifier le code OTP
        const { error, data } = await supabase.auth.verifyOtp({
            phone: phoneNumber,
            token: verificationCode,
            type: 'sms'
        });

        if (error) {
            console.error(error);
            setErrorExist(true);
            setErrorForm('Code de vérification incorrect');
        } else {
            // Authentification réussie
            localStorage.setItem('userTalkify', JSON.stringify(data.user));
            localStorage.setItem('isLoggedIn', 'true');
            setSuccess(true);
            console.log(data.user);
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
        return <Navigate to="/chats" />
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