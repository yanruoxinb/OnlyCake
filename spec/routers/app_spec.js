import app from '../../app';
import request from 'supertest';

describe('get /demo', ()=> {
  it('should return obj', (done)=> {
    request(app)
        .get('/cakes')
        .expect([
          {
            "_id": "57b27e74a1ce2cf11eb7e430",
            "id": 1,
            "name": "奶油慕斯蛋糕",
            "image": "image/1.png",
            "__v": 0
          },
          {
            "_id": "57b27e74a1ce2cf11eb7e431",
            "id": 2,
            "name": "奶油水果蛋糕",
            "image": "image/2.png",
            "__v": 0
          },
          {
            "_id": "57b27e74a1ce2cf11eb7e432",
            "id": 3,
            "name": "巧克力水果蛋糕",
            "image": "image/3.png",
            "__v": 0
          },
          {
            "_id": "57b27e74a1ce2cf11eb7e433",
            "id": 4,
            "name": "慕斯蛋糕",
            "image": "image/4.png",
            "__v": 0
          }, {
                "_id": "57b27e74a1ce2cf11eb7e434",
                "id": 5,
                "name": "奶油双层蛋糕",
                "image": "image/5.png",
                "__v": 0
              },
              {
                "_id": "57b27e74a1ce2cf11eb7e435",
                "id": 6,
                "name": "水果蛋糕",
                "image": "image/6.png",
                "__v": 0
              },
              {
                "_id": "57b27e74a1ce2cf11eb7e436",
                "id": 7,
                "name": "水果蛋糕",
                "image": "image/7.png",
                "__v": 0
              },
              {
                "_id": "57b27e74a1ce2cf11eb7e437",
                "id": 8,
                "name": "黑森林蛋糕",
                "image": "image/8.png",
                "__v": 0
              }
            ]
        )
        .end((err)=> {
          if (err) {
            done.fail(err);
          } else {
            done();
          }
        });

  });
});

describe('get/', ()=> {
  it('should return a cake info', (done)=> {
    request(app)
        .get('/cakes/1')
        .expect({
          "_id": "57b27e74a1ce2cf11eb7e430",
          "id": 1,
          "name": "奶油慕斯蛋糕",
          "image": "image/1.png",
          "__v": 0
        })
        .end((err)=> {
          if (err) {
            done.fail(err);
          } else {
            done();
          }
        });
  });
});
describe('get/', ()=> {
  it('should return a cake info', (done)=> {
    request(app)
        .get('/logos')
        .expect(
            [{
              "_id": "57b27e74a1ce2cf11eb7e42f",
              "image": "image/logo.jpg",
              "__v": 0
            }])
        .end((err)=> {
          if (err) {
            done.fail(err);
          } else {
            done();
          }
        });
  });
});
