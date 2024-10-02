import './App.scss'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import SignIn from './pages/signIn/SignIn'
import SignUp from './pages/signUp/SignUp'
import Profil from './pages/profil/Profil'
import Calls from './pages/calls/Calls'
import ChatList from './pages/chats/ChatList'
import Group from './pages/newGroup/Group'
import GroupList from './pages/group/GroupList'
import Chat from './pages/newChat/Chat'
import Logout from './pages/logout/Logout'
import Notification from './pages/notifications/Notification'
import Settings from './pages/settings/Settings'
import Splashscreen from './pages/splashscreen/Splashscreen'
import Status from './pages/status/Status'
import Error404 from './pages/404/Error404'
import { useEffect, useState } from 'react'
import { ProtectedRoute } from './ProtectedRoute'
import { User } from '@supabase/supabase-js'
import { supabase } from "./supabaseClient";

function App() {
  
  const [user, setUser] = useState<User | null>(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2500)); 
      setIsFetching(false);
    };
    fetchData();
      const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
        if (session) {
            setUser(session.user); // L'utilisateur est connecté
        } else {
            setUser(null); // Pas d'utilisateur
        }
        setIsFetching(false); // L'authentification est vérifiée
    });

    return () => authListener.subscription.unsubscribe();
  }, []);

  if (isFetching) {
    return <Splashscreen />
  }

  return (
    <Router>
      <Routes>
        <Route path='/' element={<ProtectedRoute user={user}><Home/></ProtectedRoute>} />
        <Route path='/signIn' element={<SignIn user={user}/>}/>
        <Route path='/signUp' element={<SignUp />}/>
        <Route path='/profil' element={<Profil />}/>
        <Route path='/calls' element={<ProtectedRoute user={user}><Calls/></ProtectedRoute>} />
        <Route path='/chats' element={<ProtectedRoute user={user}><ChatList/></ProtectedRoute>} />
        <Route path='/groups' element={<ProtectedRoute user={user}><GroupList/></ProtectedRoute>} />
        <Route path='/chat' element={<Chat/>} />
        <Route path='/group' element={<Group/>} />
        <Route path='/logout' element={<Logout/>} />
        <Route path='/notifications' element={<Notification/>} />
        <Route path='/settings' element={<Settings/>} />
        <Route path='/splashscreen' element={<Splashscreen/>} />
        <Route path='/status' element={<ProtectedRoute user={user}><Status/></ProtectedRoute>} />
        <Route path='*' element={<Error404/>}/>
      </Routes>
    </Router>
  )
}

export default App
