import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg'];

  // --- NEW CODE START ---
  // State to manage the password input
  const [password, setPassword] = useState('');
  // State to track if the user has entered the correct password
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // =========================================================
  // !!! IMPORTANT: THIS PASSWORD IS VISIBLE IN YOUR CODE !!!
  // =========================================================
  // Replace 'YourSecretPasswordHere' with the password you want to set.
  const CORRECT_PASSWORD = 'medicollective'; // CHANGE THIS PASSWORD!

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault(); // Prevents the form from causing a page reload
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      setPassword(''); // Clear the password input after successful entry
      alert('UPLOAD UNLOCKED!'); // Provide feedback to the user
    } else {
      alert('INCORRECT PASSWORD, PLEASE TRY AGAIN.'); // Alert the user if the password is wrong
      setError('INCORRECT PASSWORD.'); // Set an error state for display if you like
      setPassword(''); // Clear the password input after failed attempt
    }
  };
  // --- NEW CODE END ---

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpg)');
    }
  };

  return (
    // --- NEW CODE START: Conditional Rendering ---
    <form>
      {!isAuthenticated ? (
        // IF NOT AUTHENTICATED: Show the password input form
        <div className="password-lock-container">
          {/*<p>ENTER PASSWORD TO ENABLE UPLOADS:</p>*/}
          <input
            type="password"
            placeholder="PASSWORD"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <button type="submit" onClick={handlePasswordSubmit}>&#10140;</button>
          {error && <div className="error">{error}</div>} {/* Display error if password is wrong */}
        </div>
      ) : (
        // IF AUTHENTICATED: Show your original upload controls
        <>
          <label>
            <input type="file" onChange={handleChange} />
            <span>+</span>
          </label>
          <div className="output">
            { error && <div className="error">{ error }</div>}
            { file && <div>{ file.name }</div> }
            { file && <ProgressBar file={file} setFile={setFile} /> }
          </div>
          {/* Optional: Add a button to re-lock the upload if needed */}
          <button onClick={() => setIsAuthenticated(false)} style={{marginTop: '10px'}}>LOCK UPLOAD</button>
        </>
      )}
    </form>
    // --- NEW CODE END: Conditional Rendering ---
  );
}

export default UploadForm;