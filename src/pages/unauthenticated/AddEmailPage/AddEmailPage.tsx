import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Button';
import Container from '../../../components/Container';
import { useAuth } from '../../../contexts/Auth/useAuth';
import { useAddEmailMutation, useSkipEmailMutation } from '../../../graphql/generated/hooks';
import { User } from '../../../graphql/generated/types';

// source: https://www.w3resource.com/javascript/form/email-validation.php
export const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const AddEmailPage = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState('');
  const [inputError, setInputError] = useState('');
  const { setMyUser } = useAuth();
  const navigate = useNavigate();

  const navigateHome = () => navigate('/');

  const [addEmail, { loading: addEmailLoading, error: addEmailError }] = useAddEmailMutation({
    onCompleted: ({ addEmail }) => {
      setMyUser(addEmail as User);
      navigateHome();
    }
  });

  const [skipEmail, { loading: skipEmailLoading, error: skipEmailError }] = useSkipEmailMutation({
    onCompleted: navigateHome
  });

  const handleAddEmail = () => {
    if (EMAIL_REGEX.test(email)) return addEmail({ variables: { email } });
    setInputError('Invalid email');
  };

  const error = skipEmailError || addEmailError;

  return (
    <div className="bg-dark-100 h-full w-full flex flex-col">
      <div className="flex h-full justify-center items-center">
        <div className="pb-20">
          <Container title="Email" description="Add your email address to receive updates about price movements">
            <>
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="email" className="font-medium text-sm">
                    Enter Email
                  </label>
                  <span className="font-medium text-sm">Optional</span>
                </div>
                <input
                  className="rounded-2xl bg-dark-100 placeholder:text-dark-60 py-3 px-5 border border-dark-40 text-white w-full"
                  placeholder="Email"
                  id="email"
                  type="email"
                  value={email}
                  disabled={addEmailLoading}
                  ref={inputRef}
                  onChange={({ target: { value } }) => setEmail(value)}
                />
                {!!inputError && <span className="font-medium text-sm text-alert-100">{inputError}</span>}
              </div>
              {!skipEmailLoading && (
                <Button onClick={handleAddEmail} variant="small" isActionLoading={addEmailLoading}>
                  Add Email
                </Button>
              )}
              {!addEmailLoading && (
                <Button onClick={skipEmail} variant="dark" isActionLoading={skipEmailLoading}>
                  Skip
                </Button>
              )}
              {!!error && <span className="font-medium text-sm text-alert-100">{error.message}</span>}
            </>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default AddEmailPage;
