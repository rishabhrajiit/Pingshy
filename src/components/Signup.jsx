import React, { useState, useEffect } from 'react';
import './Login.css';

const Signup = () => {
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otpTarget, setOtpTarget] = useState(''); // 'mobile' or 'email'
  const [timer, setTimer] = useState(60);
  const [otp, setOtp] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');

  const handleGmailSignup = () => {
    alert('🚀 Gmail signup logic goes here');
  };

  const openOtpModal = (target) => {
    if (target === 'mobile' && (!mobile || mobile.length < 10)) {
      alert('Enter a valid mobile number');
      return;
    }
    if (target === 'email' && (!email || !email.includes('@'))) {
      alert('Enter a valid email address');
      return;
    }
    setOtpTarget(target);
    setShowOtpModal(true);
    setTimer(60);
    setOtp('');
  };

  useEffect(() => {
    let interval;
    if (showOtpModal && timer > 0) {
      interval = setInterval(() => setTimer(prev => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [showOtpModal, timer]);

  const handleResend = () => {
    setTimer(60);
    alert(`📩 OTP resent to ${otpTarget}`);
  };

  const handleCloseModal = () => {
    setShowOtpModal(false);
    setOtp('');
  };

  const handleVerifyOtp = () => {
    if (otp.length !== 6) {
      alert('Please enter a valid 6-digit OTP.');
    } else {
      alert(`✅ OTP verified for ${otpTarget}`);
      setShowOtpModal(false);
    }
  };

  return (
    <div className="login-container">
      <div className="auth-card">
        <h2>Sign Up</h2>
        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Full Name" required />
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />

          {/* Mobile Input with Get OTP inside */}
          <div className="get-otp-wrapper">
            <input
              type="number"
              placeholder="Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
            <span
              className="get-otp-text"
              onClick={() => openOtpModal('mobile')}
              title="Get OTP"
            >
              Get OTP
            </span>
          </div>

          {/* Email Input with Get OTP inside */}
          <div className="get-otp-wrapper">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span
              className="get-otp-text"
              onClick={() => openOtpModal('email')}
              title="Get OTP"
            >
              Get OTP
            </span>
          </div>

          <button type="submit" className="login-button">Sign Up</button>
        </form>
      </div>

      {/* OTP Modal */}
      {showOtpModal && (
        <div className="otp-modal-backdrop">
          <div className="otp-modal">
            <h3>
              Enter OTP sent to your {otpTarget === 'mobile' ? 'Mobile Number' : 'Email'}
            </h3>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter 6-digit OTP"
              maxLength="6"
              className="otp-input"
            />
            <div className="otp-timer">
              {timer > 0
                ? `Resend in ${timer}s`
                : <button onClick={handleResend} className="resend-link">Resend OTP</button>}
            </div>
            <div className="otp-actions">
              <button onClick={handleVerifyOtp} className="login-button">Verify</button>
              <button onClick={handleCloseModal} className="otp-close-btn">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
