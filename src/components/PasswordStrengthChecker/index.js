import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const PasswordStrengthChecker = ({ password, onPasswordChange }) => {
  const [strength, setStrength] = useState({ message: '', color: '', width: '0%' });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const checkStrength = (pwd) => {
    let strengthMsg = '';
    let color = '';
    let width = '0%';

    const hasUpperCase = /[A-Z]/.test(pwd);
    const hasNumber = /\d/.test(pwd);
    const hasSpecialChar = /[!@#$%^&*]/.test(pwd);

    if (pwd.length < 6) {
      strengthMsg = 'Too Short';
      color = 'red';
      width = '20%';
    } else if (hasUpperCase && hasNumber && hasSpecialChar) {
      strengthMsg = 'Strong';
      color = 'green';
      width = '100%';
    } else if ((hasUpperCase && hasNumber) || (hasUpperCase && hasSpecialChar) || (hasNumber && hasSpecialChar)) {
      strengthMsg = 'Medium';
      color = 'orange';
      width = '60%';
    } else {
      strengthMsg = 'Weak';
      color = 'red';
      width = '40%';
    }

    setStrength({ message: strengthMsg, color, width });
  };

  const handlePasswordChange = (e) => {
    const pwd = e.target.value;
    onPasswordChange(e);
    checkStrength(pwd);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <input
        type={isPasswordVisible ? 'text' : 'password'}
        placeholder="••••••••"
        onChange={handlePasswordChange}
        value={password}
        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
        required
      />
      <FontAwesomeIcon
        icon={isPasswordVisible ? faEyeSlash : faEye}
        className='-my-2.5'
        onClick={togglePasswordVisibility}
        style={{
          position: 'absolute',
          right: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          cursor: 'pointer'
        }}
      />
      <div style={{ marginTop: '4px' }}>
        <div
          style={{
            height: '5px',
            width: strength.width,
            backgroundColor: strength.color,
            transition: 'width 0.3s ease-in-out',
            borderRadius: '3px',
          }}
        />
        <div style={{ color: strength.color, marginTop: '4px' }}>
          {strength.message}
        </div>
      </div>
    </div>
  );
};

export default PasswordStrengthChecker;
