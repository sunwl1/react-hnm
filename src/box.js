import React from 'react'
import axios from 'axios'
const box = () => {
const add = async() => {
    // delete 버튼 를릭 시 실행
    try{
        // axios.get 은 두번째 매개변수로 config 전달
        const res = await axios.post('/api/add')
        check();
    } catch(e) {
        console.error(e.message)
    }
}
  return (
    <div>
        <button type='button' onClick={add}>add</button>
    </div>
  )
}

export default box