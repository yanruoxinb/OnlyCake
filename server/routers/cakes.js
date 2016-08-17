import express from 'express';
import Cake from '../models/Cake';

let router = express.Router();
//查所有数据
router.get('/', (req, res)=> {
  Cake.find((err, data)=> {
    res.send(data);
  });
});
// 查一条数据,把id加到后面
router.get('/:id', (req, res)=> {
  Cake.findOne({id: req.params.id}, (err, data)=> {
    res.send(data);
  });
});

module.exports = router;
// export default router;