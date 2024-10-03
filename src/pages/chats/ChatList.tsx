import { useEffect, useState } from 'react';
import './chatlist.scss'
import { supabase } from "../../supabaseClient";
import { Navigate } from 'react-router-dom';
import Splashscreen from '../splashscreen/Splashscreen';
import Menu from '../../components/menu/Menu';
import { menu } from '../../data/header';
import { listChat } from '../../data/chat';
import ItemChat from '../../components/itemChat/ItemChat';

export default function ChatList() {
    const [email, setEmail] = useState<string>("");
    const [uid, setUid] = useState<string>("");

    useEffect(() => {
        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
            console.log("Auth Event: ", event);
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
        <>
            {(uid !== "") ? (
              <>
                <Menu linkMenu={menu}/>
                <div className="main-page main-page-chat">
                    <div className="container">
                        <div className="content">
                            {listChat.map((chat, index) => {
                                return <ItemChat key={index} imgSrc={chat.imgSrc} name={chat.name} date={chat.date} text={chat.text} />
                            })}
                        </div>
                    </div>
                </div>
                <div>ChatList{email} {uid}</div>
              </>  
            ) : (
                <Splashscreen/>
            )}
        </>
    )
}

ChatList.requireAuth = true