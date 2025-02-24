import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import './index.css';

function FirstPage() {
  const [name, setName] = useState('');
  const [relationship, setRelationship] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (relationship === 'เพื่อน') {
      navigate('/second', { state: { name } } ); 
    } else if (relationship === 'น้อง') {
      navigate('/third', { state: { name } });
    } else {
      alert('กรุณากรอกเพื่อน/น้อง');
    }
  };
  return (
    <div className="App-header">
        <div class="login-box">
        <p>Login</p>
        <form>
            <div class="user-box">
                <input placeholder="ชื่อ" type="text"  value={name} onChange={(e) => setName(e.target.value)}></input>
                <label>Name</label>
            </div>
            <div class="user-box">
                <input placeholder="เพื่อน/น้อง" type="text" value={relationship} onChange={(e) => setRelationship(e.target.value)}></input>
                <label>Answer</label>
            </div>
            <form>
                <button class="button" onClick={handleSubmit}>
                    <span class="button_lg">
                        <span class="button_sl"></span>
                        <span class="button_text">Submit</span>
                    </span>
                </button>
            </form>
                
        </form>
        </div>

    </div>
  );
}

export default FirstPage;
