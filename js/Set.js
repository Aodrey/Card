//Set.js

// コンストラクタ
Set = function() {
    // カードを作成
    this.array = [
	new Card('h', 1),
	new Card('h', 2),
	new Card('h', 3),
	new Card('h', 4),
	new Card('h', 5),
	new Card('h', 6),
	new Card('h', 7),
	new Card('h', 8),
	new Card('h', 9),
	new Card('h', 10),
	new Card('h', 11),
	new Card('h', 12),
	new Card('h', 13),
	new Card('s', 1),
	new Card('s', 2),
	new Card('s', 3),
	new Card('s', 4),
	new Card('s', 5),
	new Card('s', 6),
	new Card('s', 7),
	new Card('s', 8),
	new Card('s', 9),
	new Card('s', 10),
	new Card('s', 11),
	new Card('s', 12),
	new Card('s', 13),
	new Card('d', 1),
	new Card('d', 2),
	new Card('d', 3),
	new Card('d', 4),
	new Card('d', 5),
	new Card('d', 6),
	new Card('d', 7),
	new Card('d', 8),
	new Card('d', 9),
	new Card('d', 10),
	new Card('d', 11),
	new Card('d', 12),
	new Card('d', 13),
	new Card('s', 13),
	new Card('c', 1),
	new Card('c', 2),
	new Card('c', 3),
	new Card('c', 4),
	new Card('c', 5),
	new Card('c', 6),
	new Card('c', 7),
	new Card('c', 8),
	new Card('c', 9),
	new Card('c', 10),
	new Card('c', 11),
	new Card('c', 12),
	new Card('c', 13),
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

