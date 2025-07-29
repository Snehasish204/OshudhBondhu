const Order = require('../models/Order');

exports.dashboard = async (req, res) => {
  const orders = await Order.find().populate('user').populate('medicines.medicine');
  res.render('admin/dashboard', { orders });
};

exports.viewOrders = async (req, res) => {
  const orders = await Order.find().populate('user').populate('medicines.medicine');
  res.render('admin/orderDetails', { orders });
};


exports.updateOrder = async (req, res) => {
  const { status, expectedDelivery } = req.body;

  await Order.findByIdAndUpdate(req.params.id, {
    status,
    expectedDelivery
  });

  res.redirect('/admin/orders');
};
