import React from 'react';
import './App.css';
import './index.css';
import './card.css';
import { useLocation } from 'react-router-dom';

function getRandomValue(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);  // สุ่มดัชนีของ array
    return arr[randomIndex];  // คืนค่าตัวแปรจากดัชนีที่สุ่มได้
  }
  
// ตัวอย่างการใช้งาน
const colors = ["red",
     "green",
     "blue",
     "yellow",
     "purple"];
//console.log(getRandomValue(colors)); 

function SecondPage() {
  const location = useLocation();  // ใช้ useLocation เพื่อดึงข้อมูล state ที่ส่งมาจาก FirstPage
  const { name } = location.state || {};  // ถ้ามี state ให้ดึงชื่อมาใช้งาน
  //const { relationship } = location.state || {};  // ถ้ามี state ให้ดึงชื่อมาใช้งาน

  return (
    <div class='App-header'>
        <div class="bgblue">
        <div class="card">
            <h1 class="text">ถึง { name } !</h1>
            <p class="text-full"> { getRandomValue(colors) }Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem molestiae
            explicabo placeat atque praesentium, dolorum corporis amet non, aliquid
            quasi voluptate delectus nulla exercitationem eius eum, ducimus architecto
            dolores suscipit!</p>
        </div>
        </div>
    </div>
  );
}

export default SecondPage;
