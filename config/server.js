"use strict"

import express from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import { databaseConnection } from "./database.js"
import authRoutes from "../src/auth/auth.routes.js"
import userRoutes from "../src/user/user.routes.js"
// import postRoutes from "../src/post/post.routes.js"
// import commentRoutes from "../src/comment/comment.routes.js"
import apiLimiter from "../src/middleware/rate-limit.js"

const middlewares = (app) => {
  app.use(express.urlencoded({ extended: false }))
  app.use(express.json())
  app.use(cors())
  app.use(helmet())
  app.use(morgan("dev"))
  app.use(apiLimiter)
}

const routes = (app) => {
  app.use("/postwire/v1/auth", authRoutes)
  app.use("/postwire/v1/user/", userRoutes)
  //app.use("/postwire/v1/post/", postRoutes)
  //app.use("/postwire/v1/comment/", commentRoutes)
}

const conectarDB = async () => {
  try {
    await databaseConnection()
  } catch (err) {
    console.log(`Server  | Database connection failed: ${err}`)
    process.exit(1)
  }
}

export const initServer = () => {
  const app = express()
  try {
    middlewares(app)
    conectarDB()
    routes(app)
    app.listen(process.env.PORT)
    console.log(`Server  | Running on port ${process.env.PORT}`)
  } catch (err) {
    console.log(`Server  | Init failed: ${err}`)
  }
}
