import Puskesmas from "../models/PuskesmasModel.js";

// Get All Puskesmas
export const getAllPuskesmas = async (req, res) => {
    try {
        const puskesmas = await Puskesmas.findAll();
        res.status(200).json(puskesmas);
    } catch (error) {
        res.status(500).json({
            error: error.message,
            message: "Terjadi kesalahan saat mengambil semua data Puskesmas"
        });
    }
};

// Get Puskesmas By ID
export const getPuskesmasById = async (req, res) => {
    try {
        const { id } = req.params;
        const puskesmas = await Puskesmas.findByPk(id);
        if (!puskesmas) {
            return res.status(404).json({ message: "Puskesmas tidak ditemukan" });
        }
        res.status(200).json(puskesmas);
    } catch (error) {
        res.status(500).json({
            message: "Terjadi kesalahan saat mengambil Puskesmas berdasarkan ID",
            error: error.message
        });
    }
};

// Create Puskesmas
export const createPuskesmas = async (req, res) => {
    try {
        const { name, address, phone } = req.body;
        const puskesmas = await Puskesmas.create({ name, address, phone });
        res.status(201).json({
            message: "Puskesmas berhasil dibuat",
            data: puskesmas
        });
    } catch (error) {
        res.status(400).json({
            message: "Gagal membuat Puskesmas",
            error: error.message
        });
    }
};

// Update Puskesmas
export const updatePuskesmas = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, address, phone } = req.body;
        const [updated] = await Puskesmas.update({ name, address, phone }, {
            where: { id }
        });
        if (updated) {
            const updatedPuskesmas = await Puskesmas.findByPk(id);
            res.status(200).json({
                message: "Data Puskesmas berhasil diperbarui",
                data: updatedPuskesmas
            });
        } else {
            res.status(404).json({ message: "Puskesmas tidak ditemukan" });
        }
    } catch (error) {
        res.status(400).json({
            message: "Gagal memperbarui data Puskesmas",
            error: error.message
        });
    }
};

// Delete Puskesmas
export const deletePuskesmas = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Puskesmas.destroy({ where: { id } });
        if (deleted) {
            res.status(200).json({ message: `Puskesmas dengan ID ${id} berhasil dihapus` });
        } else {
            res.status(404).json({ message: "Puskesmas tidak ditemukan" });
        }
    } catch (error) {
        res.status(400).json({
            message: "Gagal menghapus Puskesmas",
            error: error.message
        });
    }
};
