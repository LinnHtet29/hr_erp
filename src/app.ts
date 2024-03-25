import express from "express";
import cors from "cors";
import { testDbConnection } from "../config/db";
import Company from "./Models/Company";
import PublicHoliday from "./Models/PublicHoliday";
import User from "./Models/User";
import Employee from "./Models/Employee";
import Department from "./Models/Department";
import Permission from "./Models/Permission";
import indexRoutes from "./routes/index.routes";
import { errorHandler } from "./middleware/error.handler";

const app = express();
require("dotenv").config();

testDbConnection()
    .then(() => {

        Company.sync().then(() => console.log("Company table created."));
        PublicHoliday.sync().then(() => console.log("PublicHoliday table created."));
        Department.sync().then(() => console.log("Department table created."));
        Employee.sync().then(() => console.log("Employee table created."));
        User.sync().then(() => console.log("User table created."));
        Permission.sync().then(() => console.log("Permission table created."));
    })
    .catch((error: Error) => {
        console.error("Unable to connect to the database:", error);
    });

app.use(express.json());
app.use(
    cors({
        origin: process.env.CLIENT_PORT,
        credentials: true,
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    })
);

app.use("/api/v1", indexRoutes);
app.use(errorHandler);

export default app;