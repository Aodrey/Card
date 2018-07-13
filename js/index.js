// index.js

// 表示時に実行
var newGame = function() {
    // カードを1セット作成
    deck = new Deck();
    
    // シャッフル
    deck.shuffle();
    
    // 山を分ける
    pile = [
        [],[],[],[],[],[],[]
    ]
    stock_upturned = []; 
    stock_downturned = [];
    foundation1 = [];
    foundation2 = [];
    foundation3 = [];
    foundation4 = [];
    
    // 山にdeckの添字を割り振る
    for (var i = 0; i < deck.array.length; i++){
        if(i == 0) {
            pile[0][i] = i;
        } else if(i < 3){ // 1, 2
            pile[1][i-1] = i;
        } else if (i < 6) { // 3, 4, 5
            pile[2][i-3] = i;
        } else if (i < 10) { // 6, 7, 8, 9
            pile[3][i-6] = i;
        } else if (i < 15) { // 10, 11, 12, 13, 14
            pile[4][i-10] = i;
        } else if (i < 21) { // 15, 16, 17, 18, 19, 20
            pile[5][i-15] = i;
        } else if (i < 28) { // 21, 22, 23, 24, 25, 26, 27
            pile[6][i-21] = i;
        } else {
            stock_downturned[i-28] = i;
        }
    }
    
}

// 初期表示後の操作
$(document).ready(function(){
    // 初期表示
    $("#stock_downturned img").attr("src",deck.getDisplayImage(stock_downturned[0]));
    
    // 先頭だけ表に返す
    deck.array[pile[0][0]].isFaceUp = true;
    deck.array[pile[1][0]].isFaceUp = true;
    deck.array[pile[2][0]].isFaceUp = true;
    deck.array[pile[3][0]].isFaceUp = true;
    deck.array[pile[4][0]].isFaceUp = true;
    deck.array[pile[5][0]].isFaceUp = true;
    deck.array[pile[6][0]].isFaceUp = true;
    
    for (var i = 0; i < 7; i++){
        var pilei = pile[i];
        var pileilength = Object.keys(pilei).length;
        for (var j = pileilength-1; j >= 0; j--){
            if (pilei[j] != undefined) {
                $('#pile'+i+' a.'+j+' img').attr('src',deck.getDisplayImage(pilei[j]));  
            }

        }
    }
    

    // クリック
    $("#stock_downturned").click(function(){
        // 山がもうない場合は最初から
        if (stock_downturned[0] == undefined) {
            Array.prototype.push.apply(stock_downturned, stock_upturned);
            stock_upturned = [];
            deck.turn(stock_downturned);
        } else {
            stock_upturned.unshift(stock_downturned[0]);
            stock_downturned.shift();
            deck.array[stock_upturned[0]].isFaceUp = true;
        }

        // 表示
        $('#stock_downturned img').attr('src',deck.getDisplayImage(stock_downturned[0]));
        $('#stock_upturned img').attr('src',deck.getDisplayImage(stock_upturned[0]));
    });
});
