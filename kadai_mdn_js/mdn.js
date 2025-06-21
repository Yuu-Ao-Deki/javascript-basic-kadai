//今日の日付
const today = new Date();

//年月日を取得
const year = today.getFullYear();
const month = today.getMonth() + 1; // 月は0から始まるため1を足す
const day = today.getDate();

//日本語形式で日付をコンソールに出力
console.log(`${year}年${month}月${day}日`);