const db = require('../models/product').getDBProduct();


/**
 * Class Articles Controller
 */
class Product {
  ShowList(req, res,logout) {
    var login=req.session; 
    if(logout) 
    {
      login.username=null;
      if(req.user != null) req.user=null;
    }
    var fullproduct = db;
    if (req.user != undefined && req.user != null) {
      login.username= req.user._doc.name;
    }
    res.render('viewlistproducts', { data: fullproduct, user: login.username });
  }
  async ShowIf(req, res) {
    var dbif = [];
    var selectedOpt = req.body.Category;
    var cateId = await parseToInt(selectedOpt);
    var dbsession=req.session; 
    if (cateId == 0) res.render('viewlistproducts', { data: db, user:dbsession.username });
    else {
      db.forEach(function (doc) {
        if (doc.id_category == cateId) dbif.push(doc);
      });
      res.render('viewlistproducts', { data: dbif, user:dbsession.username });
    }

  }
  async ShowDetail(req, res) {
    var dbdetail = [];
    let dbrecommand=[];
    var idproduct = Number(req.params.id);
    let cateId;
    var dbsession=req.session;
    db.forEach(function (doc) {
      if (doc._id == idproduct) {
        dbdetail.push(doc);
        cateId=doc.id_category;
       }
    });
    
    db.forEach(function(doc){
      if(doc.id_category==cateId&&doc._id!=idproduct)
      {
        dbrecommand.push(doc);
      }
    })
    res.render('product', { data: dbdetail,recommand:dbrecommand,user:dbsession.username });
  }
}
function parseToInt(x) {
  const parsed = parseInt(x, 32);
  if (isNaN(parsed)) {
    return 0;
  }
  return parsed;
}

module.exports = Product;