// const models = require('../models');
// const Map = models.map;
async  function index(req,res){
    let node = [
        {id: 1, label: 'Node 1'},
        {id: 2, label: 'Node 2'},
        {id: 3, label: 'Node 3'},
        {id: 4, label: 'Node 4'},
        {id: 5, label: 'Node 5'}
    ];
    let edge = [
        {from: 1, to: 3},
        {from: 1, to: 2},
        {from: 2, to: 4},
        {from: 2, to: 5},
        {from: 3, to: 3},
        {from:3, to: 4}
    ];
    res.render('index',{nodes: node,edges:edge});
}

async function dfs(req,res){

}
module.exports= {
    index,
    dfs,
}