
while(true) {
    let returnData = prompt('日本の首都は?');
    if ( returnData === null) {
        alert('キャンセルが押されました!');   
    } else if (returnData === '東京') {
        alert('正解です!');
        break;　//正解したらループを抜ける。
    } else {
        alert('不正解です!');
    }
}
