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

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signIn' element={<SignIn />}/>
        <Route path='/signUp' element={<SignUp />}/>
        <Route path='/profil' element={<Profil />}/>
        <Route path='/calls' element={<Calls/>} />
        <Route path='/chats' element={<ChatList/>} />
        <Route path='/groups' element={<GroupList/>} />
        <Route path='/chat' element={<Chat/>} />
        <Route path='/group' element={<Group/>} />
        <Route path='/logout' element={<Logout/>} />
        <Route path='/notifications' element={<Notification/>} />
        <Route path='/settings' element={<Settings/>} />
        <Route path='/splashscreen' element={<Splashscreen/>} />
        <Route path='/status' element={<Status/>} />
        <Route path='*' element={<Error404/>}/>
      </Routes>
    </Router>
  )
}

export default App
