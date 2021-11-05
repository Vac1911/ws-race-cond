import {Router} from "express";
import * as storage from "../data/storage";
const router = Router();

/* GET home page. */
router.get('/', (req, res) => {
    res.render('index', { title: 'Express'});
});

router.get('/item', (req, res) => {
    res.render('list', { title: 'Express', items: storage.all()});
});

router.post('/item', (req, res) => {
    storage.push(req.body);
    res.send('{"status": "Success"}');
});

router.get('/item/:id', (req, res) => {
    const item = storage.find(parseInt(req.params.id));
    res.render('show', { title: 'Express', item: item});
});
router.get('/item/:id/edit', (req, res) => {
    const item = storage.find(parseInt(req.params.id));
    res.render('edit', { title: 'Express', item: item});
});

router.get('/item/:id/delete', (req, res) => {
    storage.remove(parseInt(req.params.id));
    res.send()
});

export {router as routes};
