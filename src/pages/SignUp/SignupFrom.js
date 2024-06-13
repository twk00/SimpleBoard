import React, {useState} from "react";

const SignupForm = () => {
    const [formData, setFromData] = useState({
        username: "",
        id: "",
        password: ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFromData({
            /* 기존에 있는 데이터를 복사 
            => 리액트는 상태관리를 좀 더 효율적으로 하기 위해서 변경된 부분만 감지해서 해당 부분만 변경을 함
            */ 
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        // 폼 제출시 자동으로 리로드 되는 행위를 방지
        e.preventDefault();
        console.log("Form submitted:", formData);
    };
        // required는 해당 인풋박스가 필수임을 나타냄 
    return (
        <div className="singup-container">
            <h2>Sign up</h2>
            <form onSubmit = {handleSubmit}>
                <lable htmlFor="username">Username:</lable>
                <input type="text" name="username" id="username" value = {formData.username} onChange={handleChange} required />

                <label htmlFor="id">Id:</label>
                <input type="id" id="id" name="id" value={formData.id} onChange={handleChange} required />
                
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />

                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignupForm;