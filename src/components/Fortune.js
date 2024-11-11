import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logout from './Logout'
import { Dashboard } from './Header';
import Form from './Form';

function Fortune () {
    return (
        <div>
            <h1 id="fortune_header">
                易經卜卦
            </h1>
            <div id="notification">
                <h2>
                    卜卦注意事項
                </h2>
                <ol>
                    <li>環境盡量安靜，避免受到外在環境干擾</li>
                    <li>心誠則靈，勿以試探的心來卜卦</li>
                    <li>卜卦時要專心</li>
                    <li id="eleven">卜卦時間勿超過晚上11點</li>
                </ol>
            </div>
            <div id="process">
                <h2>
                    卜卦步驟說明
                </h2>
                <ol>
                    <li>準備三個相同的硬幣</li>
                    <li>在下面的問題格中填入要問的問題，需以正面的方式提問</li>
                    <ul>
                        <li>不要出現"能不能"這一類的敘述</li>
                        <li>可以的問法: 3個月內會升官嗎?</li>
                        <li id="dont_do_that">不可以的問法: 3個月內會不會升官?</li>
                        <li id="can_do_that">可以的問法: 3個月內會升官嗎?</li>
                    </ul>
                    <li>靜心且專心的念卜卦文</li>
                    <p id="doc"><strong>天何言哉，叩之即應，神之靈矣，感而遂(歲)通，今我OOO 叩問 某事，不知休咎(就)，罔(網)釋厥疑，唯神唯靈，若可若否，望垂昭報 某年某月某日</strong></p>
                    <ul>
                        <li>OOO: 姓名</li>
                        <li>某事: 步驟2所寫的問題</li>
                        <li>日期: 今天的日期，例如: 113年2月24日</li>
                    </ul>
                    <li>把錢幣放到左手手掌，右手掌弓起來蓋上左手掌</li>
                    <ul>
                        <li>讓錢幣在手掌之間有移動的空間</li>
                    </ul>
                    <li>心裡想著要問的問題，然後手上下搖動後把錢幣往桌子上丟</li>
                    <ul>
                        <li>總共要丟6次</li>
                        <li>紀錄每次硬幣幾正幾反並寫在下面的表單中</li>
                        <li>人頭為正，數字為反</li>
                    </ul>
                </ol>
                <Form />
            </div>
            <Dashboard />
            <Logout />
        </div>
    );
}

// function Form() {
//     // 狀態儲存問題文字和選單值
//     const [question, setQuestion] = useState('');
//     const [selections, setSelections] = useState(Array(6).fill(''));
  
//     // 選項清單
//     const options = [
//       '三個正面',
//       '兩個正面一個反面',
//       '一個正面兩個反面',
//       '三個反面',
//     ];
  
//     // 處理問題變更
//     const handleQuestionChange = (e) => {
//       setQuestion(e.target.value);
//     };
  
//     // 處理選單變更
//     const handleSelectionChange = (index, value) => {
//       const newSelections = [...selections];
//       newSelections[index] = value;
//       setSelections(newSelections);
//     };
  
//     // 提交表單
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       console.log("問題:", question);
//       console.log("選擇:", selections);
//     };
  
//     return (
//       <form onSubmit={handleSubmit} id="question_form">
//         <label>
//           問題:
//           <input
//             type="text"
//             value={question}
//             onChange={handleQuestionChange}
//             required
//             id="question"
//           />
//         </label>
//         <br /><br />
//         {selections.map((selection, index) => (
//           <div key={index}>
//             <label>硬幣結果 {index + 1}: </label>
//             <select
//               value={selection}
//               onChange={(e) => handleSelectionChange(index, e.target.value)}
//               required
//             >
//               <option value="" disabled>選擇結果</option>
//               {options.map((option, i) => (
//                 <option key={i} value={option}>{option}</option>
//               ))}
//             </select>
//             <br /><br />
//           </div>
//         ))}
//         <button type="submit">提交</button>
//       </form>
//     );
//   }

export default Fortune;
