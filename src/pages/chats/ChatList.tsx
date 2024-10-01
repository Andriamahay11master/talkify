import { useEffect, useState } from 'react';
import './chatlist.scss'
import { supabase } from "../../supabaseClient";
import { Navigate } from 'react-router-dom';

export default function ChatList() {
    const [email, setEmail] = useState<string>("");
    const [uid, setUid] = useState<string>("");

    useEffect(() => {
        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
            if (session && session.user) {
                const email = session.user.email;
                const uid = session.user.id; // Supabase utilise `id` au lieu de `uid`
                setEmail(email ?? "");
                setUid(uid);
            } else {
                <Navigate to="/signIn"/>
            }
        });

        return () => authListener.subscription.unsubscribe();
    })

    return (
        <div>ChatList{email} {uid}</div>
    );
}