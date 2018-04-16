var _pj;
var peta;
var peta2 ={"1":["2"],"2":["1","3"],"3":["2","4","8","9"],"4":["3","5","6",""],"5":["4"],"6":["4","7"],"7":["6","8"],"8":["4","3","7","12"],"9":["3","10","11"],"10":["9"],"11":["12","9"],"12":["11","8"]};
function _pj_snippets(container) {
    function in_es6(left, right) {
        if (((right instanceof Array) || ((typeof right) === "string"))) {
            return (right.indexOf(left) > (- 1));
        } else {
            if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                return right.has(left);
            } else {
                return (left in right);
            }
        }
    }
    container["in_es6"] = in_es6;
    return container;
}
_pj = {};
_pj_snippets(_pj);
peta = {"A": ["B"], "B": ["A", "C"], "C": ["B", "D", "H", "I"], "D": ["C", "E", "F", "H"], "E":["D"], "F":["D", "G"], "G": ["F", "H"], "H":["D", "C", "G", "L"], "I": ["C", "J", "K"], "J": ["I"], "K": ["L", "I"], "L": ["K", "H"]};
function dfs(graf, mulai, tujuan) {
    var isi, jalur, jalur_baru, panjang_tumpukan, stack, state, visited;
    stack = [[mulai]];
    visited = [];
    var path=[];
    while (stack) {
        panjang_tumpukan = (stack.length - 1);
        jalur = stack.pop(panjang_tumpukan);
        //console.log(stack);
        if (!jalur || !jalur.length) { return; }
        state = jalur.slice((- 1))[0];
        path=jalur[1]; console.log(path);
        if ((state == tujuan)) {
            return jalur;
        } else {
            if ((! _pj.in_es6(state, visited))) {
                for (var cabang, _pj_c = 0, _pj_a = graf[state], _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                    cabang = _pj_a[_pj_c];
                    jalur_baru = [jalur];
                    jalur_baru.push(cabang);
                    stack.push(jalur_baru);
                }
                visited.push(state);
            }
        }
        isi = stack.length;
        if ((isi === 0)) {
            console.log("Tidak ditemukan");
        }
    }
}

function flatten (arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            newArr = newArr.concat(flatten(arr[i]));
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

// var nes = (dfs(peta, "D", "G"));
// var s;
// console.log(nes);
// console.log(flatten(nes))

async function reqDFS(req,res) {
    var petas = req.body.peta;
    var start = (req.body.start);
    var destination = (req.body.destination);
    // console.log(JSON.stringify(start));
    let payload = {
        success: true,
        message: 'Berhasil menghapus data Anggota.',
    };
    petas=JSON.parse(petas);
    console.log(req.body);

    var nes = (dfs(petas,start, destination));
    // console.log(JSON.parse(petas))
    res.json(flatten(nes));
    // console.log(  )
    // res.json("wokokok");
}

module.exports= {
    reqDFS
}
