const { findIndex, dropWhile } = require('lodash')
let lastKey = 3;
let currentList = [
    {
      _id: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      _id: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      _id: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
];
export default {
  // POST POST 可省略
  'POST /api/test/getList': (req, res) =>{
      res.send({
          status: 'ok',
          data: currentList,
        });
  },
  'POST /api/test/updateItem': (req, res) => {
      const { _id, values } = req.body;
      const currentIndex = findIndex(currentList, {_id:_id});
      if(currentIndex !== -1){
        currentList[currentIndex] = {
          _id:_id,
          name:values.name,
          age:values.age,
          address:values.address
        };
        res.send({
          status: 'ok',
          // data: {currentList:currentList},
        });
        return;
      }
      res.send({
        status: 'error',
        message: '数据库无该条数据'
      });
      return;
  },
  'POST /api/test/createItem': (req, res) => {
    const { name, age, address } = req.body;
    lastKey +=1;
    const newObj = {
      _id: lastKey.toString(),
      name: name,
      age: age,
      address: address
    }
    currentList.push(newObj);
    console.log('====<<<< createItem:', req.body, ' - currentList:', currentList)
    res.send({
      status: 'ok',
      // data: {currentList:currentList},
    });
    return;
  },
  'POST /api/test/deleteItem': (req, res) => {
    
    const { _id } = req.body;
    const currentIndex = findIndex(currentList, {_id:_id});
    console.log('====<<<< deleteItem:', req.body, ' - currentIndex:',currentIndex, ' - currentList:', currentList)
    if(currentIndex !== -1){
      // currentList = dropWhile(currentList, ['_id',_id]);
      currentList.splice(currentIndex,1);
      console.log('====<<<< deleteItem 后:', 'currentList:', currentList)
      res.send({
        status: 'ok'
      });
      return;
    }
    
    res.send({
      status: 'error',
      message: '数据库无该条数据'
    });
    return;
  },
};
  