import { DataTypes } from "sequelize";
import db from "../connection.js";

const Pendaftaran = db.define(
    "Pendaftaran",
    {
        id_pendaftaran: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        id_pasien: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'pasien',
                key: 'id_pasien'
            }
        },
        id_dokter: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'dokter',
                key: 'id_dokter'
            }
        },
        tanggal_daftar: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        keluhan: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM('menunggu', 'diperiksa', 'selesai'),
            allowNull: false,
            defaultValue: 'menunggu',
        },
    },
    {
        tableName: "pendaftaran",
        timestamps: true,
    }
);

export default Pendaftaran;
