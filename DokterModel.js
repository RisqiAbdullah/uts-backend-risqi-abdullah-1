import { DataTypes } from "sequelize";
import db from "../connection.js";

const Dokter = db.define(
    "Dokter",
    {
        id_dokter: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nama: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        spesialis: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        no_telepon: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isEmail: true,
            },
        },
    },
    {
        tableName: "dokter",
        timestamps: true,
    }
);

export default Dokter;
