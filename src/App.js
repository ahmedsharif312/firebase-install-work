import './App.css';
import app from './firebase.init';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { useState } from 'react';

const auth = getAuth(app)

function App() {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  // google button handle
  const handleGoogleBtn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch(error => {
        console.log(error);
      })
  }

  // git hub login button handle
  const handleGitHub = () => {
    signInWithPopup(auth, gitHubProvider)
      .then(result => {
        const user = result.user;
        setUser(user)
        console.log(user);
      })
      .catch(error => {
        console.log(error);
      })
  }

  // sign out button handle
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setUser({})
      })
  }
  return (
    <div className="App">

      {
        user.uid ? <button onClick={handleSignOut}>SignOut</button>
          :
          <div>
            <button onClick={handleGoogleBtn} >Google</button>
            <button onClick={handleGitHub}>GitHub Login</button>
          </div>
      }


      <h2>User Name: {user.displayName}</h2>
      <p>email: {user.email}</p>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
