import SignInForm from "../../sign-in-forms/sign-in-form.component";
import SignUpForm from "../../sign-up-forms/sign-up-form.component";

import './authentication.styles.scss';

const Authentication = () => {

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
