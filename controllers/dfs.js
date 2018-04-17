
function dfs(graf, mulai, tujuan) {
    var isi, jalur, jalur_baru, panjang_tumpukan, stack, state, visited;
    stack = [[mulai]];
    visited = [];
    var path=[];
    while (stack) {
        panjang_tumpukan = (stack.length - 1);
        jalur = stack.pop(panjang_tumpukan);
        if (!jalur || !jalur.length) { return; }
        state = jalur.slice((- 1))[0];
        path=jalur[1];
        if ((state === tujuan)) {
            return jalur;
        } else {
            if (!(visited.includes(state))) {
                for (var cabang of graf[state]) {
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

async function reqDFS(req,res) {
    var petas = req.body.peta;
    var start = (req.body.start);
    var destination = (req.body.destination);
    let payload = {
        success: true,
        message: 'Berhasil menghapus data Anggota.',
    };
    petas=JSON.parse(petas);

    var nes = (dfs(petas,start, destination));
    res.json(flatten(nes));
}

module.exports= {
    reqDFS
}
