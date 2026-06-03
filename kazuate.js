// 課題4-1: 数当てゲーム

// 乱数を使って正解を作る
let kotae = Math.floor(Math.random() * 10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// そのほか，必要に応じて変数を宣言してもよい
let btn = document.querySelector('button#btn');
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // ここから: 予想回数を1増やして，span#kaisu 要素のテキストを更新

  // if (kaisu >= 3) {
  //   document.querySelector('#result').textContent =
  //     '答えは' + kotae + 'でした。ゲームはすでに終わっています。';
  // }
  kaisu++
  document.querySelector('span#kaisu').textContent = kaisu;

  // ここまで: 予想回数を1増やして，span#kaisu 要素のテキストを更新

  // ここから: テキストボックスに指定された数値を yoso に代入する
  let yoso;
  // ここまで: テキストボックスに指定された数値を yoso に代入する
  yoso = Number(document.querySelector('input[name="number"]').value);
  let number = document.querySelector('span#number');
  number.textContent = yoso;
  let show = document.querySelector('p#result');
  if (yoso === kotae) {
    show.textContent = "正解です。"
  } else if (kaisu === 3) {
    result.textContent = 'まちがいです。答えは ' + kotae + ' でした。';
  } else if (kaisu >= 3) {
    show.textContent = '答えは' + kotae + 'でした。ゲームはすでに終わっています。';
  } else if (yoso > kotae) {
    show.textContent = "答えはもっと小さいですよ。"
  }
  else {
    show.textContent = "答えはもっと大きいですよ。"
  }

}

// ここから: ボタンを押した時のイベントハンドラとして hantei を登録

// ここまで: ボタンを押した時のイベントハンドラとして hantei を登録
btn.addEventListener('click', hantei);