import React, { useState } from 'react';

function Form() {
    const [formData, setFormData] = useState({
        question: '',
        choices: Array(6).fill('選擇結果')
    });
    const [showModal, setShowModal] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(''); // 新增提交結果狀態

    // 處理表單填寫變更
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSelectChange = (index, value) => {
        const newChoices = [...formData.choices];
        newChoices[index] = value;
        setFormData({ ...formData, choices: newChoices });
    };

    // 提交表單顯示彈窗
    const handleSubmit = (event) => {
        event.preventDefault();
        setShowModal(true);
    };

    // 確認提交表單
    const handleConfirm = () => {
        // fetch('/question_form', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(formData)
        // })
        // .then(response => {
        //     if (response.ok) {
        //         setSubmitStatus("提交成功！"); // 成功訊息
        //         setFormData({ question: '', choices: Array(6).fill('選擇結果') }); // 清空表單
        //     } else {
        //         throw new Error("提交失敗，請再試一次！");
        //     }
        // })
        // .catch(error => setSubmitStatus(error.message)) // 顯示錯誤訊息
        // .finally(() => setShowModal(false)); // 隱藏彈窗
        setSubmitStatus("提交成功！"); // 成功訊息
        setFormData({ question: '', choices: Array(6).fill('選擇結果') }); // 清空表單
        setShowModal(false)
    };

    // 取消提交表單
    const handleCancel = () => {
        setShowModal(false);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} id="question_form">
                {/*顯示結果*/}
                {submitStatus && (
                    <div className="submit-status">
                        {submitStatus}
                    </div>
                )}
                <label>
                    問題:
                    <input
                        type="text"
                        name="question"
                        value={formData.question}
                        onChange={handleInputChange}
                        id="question"
                    />
                </label>
                {formData.choices.map((choice, index) => (
                    <div key={index}>
                        <label>硬幣結果 {index + 1}:</label>
                        <select
                            value={choice}
                            onChange={(e) => handleSelectChange(index, e.target.value)}
                        >
                            <option value="選擇結果">選擇結果</option>
                            <option value="三個正面">三個正面</option>
                            <option value="兩個正面一個反面">兩個正面一個反面</option>
                            <option value="一個正面兩個反面">一個正面兩個反面</option>
                            <option value="三個反面">三個反面</option>
                        </select>
                    </div>
                ))}
                <button type="submit">提交</button>
            </form>

            {showModal && (
                <div className="modal">
                    <h2>確認表單結果</h2>
                    <p>問題: {formData.question}</p>
                    {formData.choices.map((choice, index) => (
                        <p key={index}>選擇 {index + 1}: {choice}</p>
                    ))}
                    <button onClick={handleConfirm}>確認</button>
                    <button onClick={handleCancel}>取消</button>
                </div>
            )}
        </div>
    );
}

export default Form;
