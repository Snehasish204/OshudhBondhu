const Medicine = require('../models/Medicine');
const Order = require('../models/Order');

exports.dashboard = async (req, res) => {
  res.render('user/dashboard');
};

exports.searchMedicines = async (req, res) => {
  const search = req.query.name || '';
  const medicines = await Medicine.find({ name: { $regex: search, $options: 'i' } });
  res.render('user/medicine', { medicines });
};

exports.viewMedicine = async (req, res) => {
  const medicine = await Medicine.findById(req.params.id);
  res.render('user/order', { medicine });
};

exports.placeOrder = async (req, res) => {
  const { quantity } = req.body;

  const order = new Order({
    user: req.session.user.id,
    medicines: [
      {
        medicine: req.params.id,
        quantity
      }
    ],
    status: 'Pending',
    // expectedDelivery: 'To be updated by admin'
  });

  await order.save();
  // res.send('Order placed successfully!');
  res.redirect('/user/orders');

};

exports.viewUserOrders = async (req, res) => {
  const orders = await Order.find({ user: req.session.user.id }).populate('medicines.medicine');
  res.render('user/orders', { orders });
};
