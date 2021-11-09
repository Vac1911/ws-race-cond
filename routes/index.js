"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const storage = require("../data/storage");
const router = express_1.Router();
exports.routes = router;
/* GET home page. */
router.get('/', (req, res) => {
    res.render('index', { title: 'Express' });
});
router.get('/item', (req, res) => {
    res.render('list', { title: 'Express', items: storage.all() });
});
router.post('/item', (req, res) => {
    storage.push(req.body);
    res.send('{"status": "Success"}');
});
router.get('/item/new', (req, res) => {
    res.render('create', { title: 'Express' });
});
router.get('/item/:id', (req, res) => {
    const item = storage.find(parseInt(req.params.id));
    res.render('show', { title: 'Express', item: item });
});
router.get('/item/:id/edit', (req, res) => {
    const item = storage.find(parseInt(req.params.id));
    res.render('edit', { title: 'Express', item: item });
});
router.get('/item/:id/delete', (req, res) => {
    res.send(storage.remove(parseInt(req.params.id)) ? 'yes' : 'no');
});
//# sourceMappingURL=index.js.map