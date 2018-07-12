// Card.js
// カード1枚についてのクラスとコンストラクタ
Card = function(mark, number, isFaceUp) {
    this.mark = mark;
    this.number = number;
    this.isFaceUp = isFaceUp;
};

// メソッドはコンストラクタの prototype プロパティに定義
Card.prototype.getDisplayName = function() {
    if (this.isFaceUp) {
	return this.mark + this.number;
    } else {
	return "downturned";
    }
  
};
Card.prototype.getDisplayImage = function() {
    if (this.isFaceUp) {
        // ゼロパディング
        var n = ( '00' + this.number ).slice( -2 );
        return "img/cards/" + this.mark + n + ".png";
    } else {
        return "img/cards/downturned.png";
    }
}
Card.prototype.turn = function() {
    this.isFaceUp = !this.isFaceUp;
};


