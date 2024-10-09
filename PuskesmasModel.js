import { DataTypes } from "sequelize";
import db from "../connection.js";

const Puskesmas = db.define(
    "Puskesmas",
    {
        id_puskesmas: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nama: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        alamat: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        no_telepon: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        tableName: "puskesmas",
        timestamps: true,
    }
);

export default Puskesmas;