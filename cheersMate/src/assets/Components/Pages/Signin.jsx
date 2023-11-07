import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignInPage() {
  const [errorMessage, setErrorMessage] = useState("");
  const auth = getAuth();

  function signIn(event) {
    event.preventDefault();
    const mail = event.target.email.value; // mail value from inout field in sign in form
    const password = event.target.password.value; // password value from inout field in sign in form

    // read the docs: https://firebase.google.com/docs/auth/web/password-auth#sign_in_a_user_with_an_email_address_and_password
    signInWithEmailAndPassword(auth, mail, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user); // for test purposes: logging the authenticated user
      })
      .catch((error) => {
        let code = error.code; // saving error code in variable
        console.log(code);
        code = code.replaceAll("-", " "); // some JS string magic to display error message. See the log above in the console
        code = code.replaceAll("auth/", "");
        setErrorMessage(code);
      });
  }
  return (
    <section>
      <h1>Sign In</h1>
      <form onSubmit={signIn}>
        <input type="email" name="mail" placeholder="Type your mail" />
        <input
          type="password"
          name="password"
          placeholder="Type your password"
        />
        <p>{errorMessage}</p>
        <button>Sign in</button>
      </form>
      <p>
        Do not have an account? <Link to="/sign-up">Sign Up</Link>
      </p>
    </section>
  );
}
