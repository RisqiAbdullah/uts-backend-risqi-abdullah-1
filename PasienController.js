import Pasien from "../models/PasienModel.js";

// Get All Pasien
export const getAllPasien = async (req, res) => {
    try {
        const pasien = await Pasien.findAll();
        res.status(200).json(pasien);
    } catch (error) {
        res.status(500).json({
            error: error.message,
            message: "Terjadi kesalahan saat mengambil semua data Pasien"
        });
    }
};

// Get Pasien By ID
export const getPasienById = async (req, res) => {
    try {
        const { id } = req.params;
        const pasien = await Pasien.findByPk(id);
        if (!pasien) {
            return res.status(404).json({ message: "Pasien tidak ditemukan" });
        }
        res.status(200).json(pasien);
    } catch (error) {
        res.status(500).json({
            message: "Terjadi kesalahan saat mengambil pasien berdasarkan ID",
            error: error.message
        });
    }
};

// Create Pasien
export const createPasien = async (req, res) => {
    try {
        const { nama, alamat, umur, jenis_kelamin } = req.body;
        const pasien = await Pasien.create({ nama, alamat, umur, jenis_kelamin });
        res.status(201).json({
            message: "Pasien berhasil dibuat",
            data: pasien
        });
    } catch (error) {
        res.status(400).json({
            message: "Gagal membuat pasien",
            error: error.message
        });
    }
};

// Update Pasien
export const updatePasien = async (req, res) => {
    try {
        const { id } = req.params;
        const { nama, alamat, umur, jenis_kelamin } = req.body;
        const [updated] = await Pasien.update({ nama, alamat, umur, jenis_kelamin }, {
            where: { id }
        });
        if (updated) {
            const updatedPasien = await Pasien.findByPk(id);
            res.status(200).json({
                message: "Data Pasien berhasil diperbarui",
                data: updatedPasien
            });
        } else {
            res.status(404).json({ message: "Pasien tidak ditemukan" });
        }
    } catch (error) {
        res.status(400).json({
            message: "Gagal memperbarui data Pasien",
            error: error.message
        });
    }
};

// Delete Pasien
export const deletePasien = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Pasien.destroy({ where: { id } });
        if (deleted) {
            res.status(200).json({ message: `Pasien dengan ID ${id} berhasil dihapus` });
        } else {
            res.status(404).json({ message: "Pasien tidak ditemukan" });
        }
    } catch (error) {
        res.status(400).json({
            message: "Gagal menghapus Pasien",
            error: error.message
        });
    }
};
