// index.js
$(document).ready(function(){
    set.shuffle();
    // 全部のカード
    for (var i = 0; i < set.array.length; i++){
	// 表示
	$("#card"+i).html(set.array[i].getDisplayName());
    }
          
    // クリックでひっくりかえす
    $(".nav-link").click(function(){
    	var id =  $(this).attr("id");
	var i = id.slice(4); // "card52" から "52" を取り出す
    	set.array[i].isFaceUp = ! set.array[i].isFaceUp;
        $("#"+id).html(set.array[i].getDisplayName());
    });
});
