// middleware/authMiddleware.js

exports.isUser = (req, res, next) => {
  if (req.session && req.session.user && req.session.user.id) {
    return next();
  } else {
    return res.redirect('/login');
  }
};


exports.isAdmin = (req, res, next) => {
  if(
    req.session && req.session.user && req.session.user.role === 'admin'){
    return next();
  }else {
    // return res.status(403).send('Access Denied: Admins only');
    return res.redirect('/login');
  }
};
