import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';
import '../../styles/login.css';  // 스타일 파일을 import

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    // 폭죽 효과를 제어하는 상태 추가
    const [showConfetti, setShowConfetti] = useState(false); 
    // useNavigate 훅을 사용하여 네비게이션 설정
    const navigate = useNavigate(); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const handleSignupClick = () => {
        navigate('/signup'); // 회원가입 페이지로 이동
    };

    const handleConfettiClick = () => {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000); // 3초 후에 폭죽 효과를 끔
    };

    return (
        <div className="login-container">
            {showConfetti && <Confetti />} {/* 폭죽 효과 컴포넌트 */}
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                
                <button type="submit" onClick={handleConfettiClick}>Login</button>
            </form>
            <button onClick={handleSignupClick} className="signup-button">Sign Up</button> {/* 회원가입 버튼 추가 */}
        </div>
    );
};

export default LoginForm;
