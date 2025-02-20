import jwt from "jsonwebtoken"

export const validateJWT = async (req, res, next) => {
  try {
    let token = req.body.token || req.query.token || req.headers["authorization"]

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token wasn't provided.",
        error: err.message,
      })
    }

    token = token.replace(/^Bearer\s+/, "")

    const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY)
    const user = await User.findById(uid)

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User does not exist.",
      })
    }

    if (!user.status) {
      return res.status(400).json({
        success: false,
        message: "User disabled.",
      })
    }

    req.user = user
    next()
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Couldn't validate token.",
      error: err.message,
    })
  }
}
