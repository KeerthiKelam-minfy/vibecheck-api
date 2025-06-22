const auth = (req, res, next) => {
  // Simple check for simulated session userId
  if (!req.headers['userid']) {
    return res.status(401).json({ success: false, message: 'Unauthorized. Please login.' })
  }

  // Attach userId to request for later use
  req.userId = req.headers['userid']
  next()
}

export default auth;
