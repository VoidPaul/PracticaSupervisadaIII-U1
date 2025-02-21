export const checkUID = (uid) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(500).json({
        success: false,
        message: "Tried to verify UID before Token.",
      })
    }

    if (!uid.includes(req.user.uid)) {
      return res.status(401).json({
        success: false,
        message: "Logged user has to match target user.",
      })
    }
    next()
  }
}
