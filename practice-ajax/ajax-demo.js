let b = document.querySelector('#sendRequest');
b.addEventListener('click', sendRequest);


// 通信を開始する処理
function sendRequest() {
	// URL を設定
	let service = document.getElementById('ch').value;
	let genre = document.getElementById('gn').value;

	let url = 'https://www.nishita-lab.org/web-contents/jsons/nhk/' + service + '-' + genre + '-j.json';

	// 通信開始
	axios.get(url)
		.then(showResult)
		.catch(showError)
		.then(finish);
}

// 通信が成功した時の処理
function showResult(resp) {
	// サーバから送られてきたデータを出力
	let data = resp.data;

	// data が文字列型なら，オブジェクトに変換する
	if (typeof data === 'string') {
		data = JSON.parse(data);

	}

	// data をコンソールに出力
	console.log(data);
	let service = document.getElementById('ch').value;
	let programs = data.list[service];
	let tbody = document.querySelector('#tbody');
	tbody.innerHTML = '';
	for (let p of programs) {

		let r = document.createElement('tr');

		let start_time = document.createElement('td');
		start_time.textContent = p.start_time;
		r.appendChild(start_time);

		let end_time = document.createElement('td');
		end_time.textContent = p.end_time;
		r.appendChild(end_time);

		let title = document.createElement('td');
		title.textContent = p.title;
		r.appendChild(title);

		let subtitle = document.createElement('td');
		subtitle.textContent = p.subtitle;
		r.appendChild(subtitle);

		let content = document.createElement('td');
		content.textContent = p.content;
		r.appendChild(content);

		let act = document.createElement('td');
		act.textContent = p.act;
		r.appendChild(act);

		tbody.appendChild(r);
	}


	// data.x を出力
	console.log(data.x);
}

// 通信エラーが発生した時の処理
function showError(err) {
	console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
	console.log('Ajax 通信が終わりました');
}
