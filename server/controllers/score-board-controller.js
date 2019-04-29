
const userRepositoy = require('../repositories/user-repository');

exports.get = async(req, res, next) => {
  try {
    const data = await userRepositoy.get();
    const dataSorted = data.sort((a, b)=>{
      if(a.games.length > b.games.length){
        return -1
      } else if(a.games.length < b.games.length){
        return 1
      } else {
        return 0
      }
    })
    res.status(200).send(dataSorted);
  } catch(e) {
    res.status(500).send({message: 'Error trying to process your request'})
  }
}