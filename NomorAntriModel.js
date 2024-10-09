import { DataTypes } from "sequelize";
import db from "../connection.js";

const NomorAntri = db.define(
    "NomorAntri",
    {
        id_nomor_antri: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nomor_antri: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        tanggal_antri: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM('menunggu', 'selesai', 'batal'),
            allowNull: false,
            defaultValue: 'menunggu',
        },
        id_pendaftaran: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: "nomor_antri",
        timestamps: true,
    }
);

export default NomorAntri;
