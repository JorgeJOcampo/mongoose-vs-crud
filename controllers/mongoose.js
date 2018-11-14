function get(req, res){
  res.status(200).send({'type':'get'});
}

function post(req, res){
  res.status(200).send({'type':'post'});
}

module.exports = {
  get, post
};  
