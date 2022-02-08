
    while(1) {
        let returnData = prompt("日本の首都は?", "");
        if ( returnData === null) {
            alert("キャンセルが押されました!");   
        } else if (returnData === "東京") {
            alert("正解です!");
        } else {
            alert("不正解です!");
        }
    }
