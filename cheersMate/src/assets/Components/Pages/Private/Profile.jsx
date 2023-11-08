import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../../../../firebase";
import { useNavigate } from "react-router";

export default function Profile() {
  const [authUser, setAuthUser] = useState(null);

  const navigate = useNavigate();
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <section className="profile">
      <div className="user">
        <div className="userImgage"></div>
      </div>

      <div>
        {authUser ? (
          <>
            <p>{`Signed In as ${authUser.email}`}</p>
            <button onClick={userSignOut}>Sign Out</button>
          </>
        ) : (
          <p>Signed Out</p>
        )}
      </div>
    </section>
  );
}
