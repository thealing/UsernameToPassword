var _last = 1;

function srand(seed) {
	_last = seed;
}

function rand() {
	_last = (_last * 214013 + 2531011) % 4294967296;
	return _last >>> 16;
}

function randRange(min, max) {
	return min + rand() % (max - min + 1);
}
