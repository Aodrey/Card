//Set.js

// コンストラクタ
Set = function() {
    // カードを作成
    this.array = [
	new Card('❤️', 1),
	new Card('❤️', 2),
	new Card('❤️', 3),
	new Card('❤️', 4),
	new Card('❤️', 5),
	new Card('❤️', 6),
	new Card('❤️', 7),
	new Card('❤️', 8),
	new Card('❤️', 9),
	new Card('❤️', 10),
	new Card('❤️', 11),
	new Card('❤️', 12),
	new Card('❤️', 13),
	new Card('♠️', 1),
	new Card('♠️', 2),
	new Card('♠️', 3),
	new Card('♠️', 4),
	new Card('♠️', 5),
	new Card('♠️', 6),
	new Card('♠️', 7),
	new Card('♠️', 8),
	new Card('♠️', 9),
	new Card('♠️', 10),
	new Card('♠️', 11),
	new Card('♠️', 12),
	new Card('♠️', 13),
	new Card('♦️', 1),
	new Card('♦️', 2),
	new Card('♦️', 3),
	new Card('♦️', 4),
	new Card('♦️', 5),
	new Card('♦️', 6),
	new Card('♦️', 7),
	new Card('♦️', 8),
	new Card('♦️', 9),
	new Card('♦️', 10),
	new Card('♦️', 11),
	new Card('♦️', 12),
	new Card('♦️', 13),
	new Card('♠️', 13),
	new Card('♣️', 1),
	new Card('♣️', 2),
	new Card('♣️', 3),
	new Card('♣️', 4),
	new Card('♣️', 5),
	new Card('♣️', 6),
	new Card('♣️', 7),
	new Card('♣️', 8),
	new Card('♣️', 9),
	new Card('♣️', 10),
	new Card('♣️', 11),
	new Card('♣️', 12),
	new Card('♣️', 13),
    ];
};
Set.prototype.shuffle = function() {
    var n = this.array.length, t, i;
    while (n) {
    	i = Math.floor(Math.random() * n--);
    	t = this.array[n];
    	this.array[n] = this.array[i];
    	this.array[i] = t;
    }
};

