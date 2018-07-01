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
	return "＊＊＊";
    }
  
};



Card.prototype.sayHello = function() {
  console.log('<p>' + this.getDisplayName() + '</p>');
};
