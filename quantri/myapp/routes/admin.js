var express = require('express');
var router = express.Router();
const Admin = require("../controllers/admin");
const controller = new Admin();
router.use(express.static("public"));
const passport = require('passport');
const { ensureAuthenticated } = require('../config/auth');
//get
router.get('/user-account', (req, res) => controller.ShowListUser(req, res));
router.get('/lock-:username', (req, res) => controller.LockOrUnlock(req, res));
router.get('/lockdetail-info-:username', (req, res) => controller.LockOrUnlockDetail(req, res));
router.get('/detail-info-:username', (req, res) => controller.ViewDetailUser(req, res));
router.get('/system-stall', (req, res) => controller.ShowStalls(req, res));
router.get('/products-:id', async (req, res) => controller.ShowListProduct(req, res));
router.post('/add-stall', (req, res) => controller.AddStall(req, res));
router.get('/delete-stall-:id', (req, res) => controller.DeleteStall(req, res));
router.get('/detail-product-:id', (req, res) => controller.DetailProduct(req, res));
router.post('/deleteproduct', (req, res) => controller.DeleteProduct(req, res));
router.post('/addproduct', (req, res) => controller.AddProduct(req, res));
router.get('/addproduct-:idcategory', (req, res) => controller.ShowAddProduct(req, res));
router.post('/editproduct', (req, res) => controller.EditProduct(req, res));
router.get('/delete-product-:id', (req, res) => controller.DeleteProduct(req, res));
router.get('/qldonhang', async (req, res) => controller.QLDonHang(req, res));
router.get('/detail-order-:id', (req, res) => controller.ChiTietDonHang(req, res));
router.get('/delete-order-:id', (req, res) => controller.DeleteOrder(req, res));
router.get('/top10', async (req, res) => controller.ShowTop10(req, res));
router.get('/home', async (req, res) => controller.ShowHome(req, res));
router.get('/deliver-order-:id', async (req, res) => controller.GiaoHang(req, res));
router.get('/chitietdoanhthu', async (req, res) => controller.ChitietDoanhThu(req, res));
router.post('/chitietdoanhthu', async (req, res) => controller.ChitietDoanhThuByIf(req, res));
router.post('/loaddatachart', async (req, res) => controller.LoadChart(req, res));

module.exports = router;