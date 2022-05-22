import TextSign from './TextSign.js';

const textSign = new TextSign();

const condition = true;
// const condition = false;
const add = async() => {
    // delete 버튼 를릭 시 실행
    try{
        // axios.get 은 두번째 매개변수로 config 전달
        const res = await axios.post('/api/add')
    } catch(e) {
        console.error(e.message)
    }
}
const promise = new Promise((resolve, reject) => {
	if (condition) {
		resolve('성공!');
	} else {
		reject('실패!');
	}
});
promise
	.then(message => {
		console.log(message);
		let button = document.createElement('div');
		button.addEventListener('Click',add)
		textSign.elem.innerHTML = message + button;
		textSign.elem.appendChild(button);
		textSign.elem.dataset.state = 'success';
	})
	.catch(error => {
		console.log(error);
		textSign.elem.innerHTML = error;
		textSign.elem.dataset.state = 'failure';
	})
	.finally(() => {
		console.log('끝에 실행');
	});
