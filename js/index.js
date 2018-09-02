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
    var isDropped = false;  // ドロップが成功したことを示すフラグ
    
    // 初期表示
    $("#stock_downturned").attr("src",deck.getDisplayImage(stock_downturned[0]));
    
    // 先頭だけ表に返す
    deck.array[pile[0][0]].isFaceUp = true;
    deck.array[pile[1][1]].isFaceUp = true;
    deck.array[pile[2][2]].isFaceUp = true;
    deck.array[pile[3][3]].isFaceUp = true;
    deck.array[pile[4][4]].isFaceUp = true;
    deck.array[pile[5][5]].isFaceUp = true;
    deck.array[pile[6][6]].isFaceUp = true;
    
    for (var i = 0; i < 7; i++){
        var pilei = pile[i];
        var pileilength = Object.keys(pilei).length;
        for (var j = 0; j < pileilength; j++){
            if (pilei[j] != undefined) {
                $('#pile'+i+' img.'+j).attr('src',deck.getDisplayImage(pilei[j]));  
            }

        }
    }
    
    // 位置調整
    var resetStockPosition = function() {
        // stockの位置調整
        var fw = $('div.base img#stock_upturned_fw');
        fw.css({'position':'relative'});
        $('div.base img#stock_upturned_nx')          
            .css({'position':'absolute','top':fw.position().top,'left':fw.position().left,'width':fw.width(),'height':fw.height()});
        
    }
    var resetPilePosition = function() {
        // pileの位置調整
        for (var i = 0; i<7; i++) {
            var pile1 = $('div.pile #pile'+i+'>img:nth-child(1)');
            pile1.css({'position':'relative'});
            var width = pile1.width();
            var height = pile1.height();
            var position = pile1.position();
            $('div.pile #pile'+i+'>img:nth-child(2)')
                .css({'position':'absolute','top':height*0.3,'left':position.left,'width':width,'height':height});
            $('div.pile #pile'+i+'>img:nth-child(3)')
                .css({'position':'absolute','top':height*0.6,'left':position.left,'width':width,'height':height});
            $('div.pile #pile'+i+'>img:nth-child(4)')
                .css({'position':'absolute','top':height*0.9,'left':position.left,'width':width,'height':height});
            $('div.pile #pile'+i+'>img:nth-child(5)')
                .css({'position':'absolute','top':height*1.2,'left':position.left,'width':width,'height':height});
            $('div.pile #pile'+i+'>img:nth-child(6)')
                .css({'position':'absolute','top':height*1.5,'left':position.left,'width':width,'height':height});
            $('div.pile #pile'+i+'>img:nth-child(7)')
                .css({'position':'absolute','top':height*1.8,'left':position.left,'width':width,'height':height});
        }
    };
    resetStockPosition();
    resetPilePosition();


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
        $('#stock_downturned').attr('src',deck.getDisplayImage(stock_downturned[0]));
        $('#stock_upturned_fw').attr('src',deck.getDisplayImage(stock_upturned[0]));
        $('#stock_upturned_nx').attr('src',deck.getDisplayImage(stock_upturned[1]));
    });
    
    // ドラッグ・ドロップ
    $( ".draggable" ).draggable( {
        stack:'.draggable', // ドラッグ中は最前面に表示
        zIndex:10,// ドラッグ中は最前面に表示
        revert:true,// 基本元の位置に戻る
        revert: function(event, ui){
            if (isDropped) {
                // ドロップが成功している場合はアニメーションしない
                $( ".draggable" ).draggable( "option", "revertDuration", 0 );
                isDropped = false;
            } else {
                $( ".draggable" ).draggable( "option", "revertDuration", 500 );
            }
            return true;
        }
    } );
    $( ".base .droppable" ).droppable({
        drop: function( event, ui ) {
            
            isDropped = true;  // ドロップが成功したことを示すフラグ
            // ドラッグした画像にする
            $(this).find("img").attr('src', deck.getDisplayImage(stock_upturned[0]));
            // 山から1枚減らす
            stock_upturned.shift();
            // 再表示
            $('#stock_upturned_fw').attr('src',deck.getDisplayImage(stock_upturned[0]));
            $('#stock_upturned_nx').attr('src',deck.getDisplayImage(stock_upturned[1]));
            
            // 位置調整
            resetStockPosition();
        }
    });
    $( ".pile .droppable" ).droppable({
        drop: function( event, ui ) {
            isDropped = true;  // ドロップが成功したことを示すフラグ
            
            // 追加する要素のクラス名の1つ目を数値として取得
            var cls = Number($(this).find("img:last").attr("class").split(" ")[0]);
            
            // 次のクラス名
            cls++;
            
            // ドラッグしている画像
            var drgImg = deck.getDisplayImage(stock_upturned[0]);

            // 追加
            $(this).append('<img src="' + drgImg + '" class="' + cls + ' img-fluid shadow-sm bg-white rounded" />');

            // 山から1枚減らす
            stock_upturned.shift();
            // 再表示
            $('#stock_upturned_fw').attr('src',deck.getDisplayImage(stock_upturned[0]));
            $('#stock_upturned_nx').attr('src',deck.getDisplayImage(stock_upturned[1]));
            
            // 位置調整
            resetStockPosition();
            resetPilePosition();
        }
    });

});
