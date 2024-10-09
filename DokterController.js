import Dokter from "../models/DokterModel.js";

// Get All Dokter
export const getAllDokter = async (req, res) => {
    try {
        const dokter = await Dokter.findAll();
        res.status(200).json(dokter);
    } catch (error) {
        res.status(500).json({
            error: error.message,
            message: "Terjadi kesalahan saat mengambil semua data Dokter"
        });
    }
};

// Get Dokter By ID
export const getDokterById = async (req, res) => {
    try {
        const { id } = req.params;
        const dokter = await Dokter.findByPk(id);
        if (!dokter) {
            return res.status(404).json({ message: "Dokter tidak ditemukan" });
        }
        res.status(200).json(dokter);
    } catch (error) {
        res.status(500).json({
            message: "Terjadi kesalahan saat mengambil dokter berdasarkan ID",
            error: error.message
        });
    }
};

// Create Dokter
export const createDokter = async (req, res) => {
    try {
        const { nama, spesialis } = req.body;
        const dokter = await Dokter.create({ nama, spesialis });
        res.status(201).json({
            message: "Dokter berhasil dibuat",
            data: dokter
        });
    } catch (error) {
        res.status(500).json({
            message: "Gagal membuat dokter",
            error: error.message
        });
    }
};

// Update Dokter
export const updateDokter = async (req, res) => {
    try {
        const { id } = req.params;
        const { nama, spesialis } = req.body;
        const [updated] = await Dokter.update({ nama, spesialis }, {
            where: { id_dokter: id }
        });
        if (updated) {
            const updatedDokter = await Dokter.findByPk(id);
            res.status(200).json({
                message: "Data Dokter berhasil diperbarui",
                data: updatedDokter
            });
        } else {
            res.status(404).json({ message: "Dokter tidak ditemukan" });
        }
    } catch (error) {
        res.status(500).json({
            error: error.message,
            message: "Gagal memperbarui data Dokter"
        });
    }
};

// Delete Dokter
export const deleteDokter = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Dokter.destroy({ where: { id_dokter: id } });
        if (deleted) {
            res.status(200).json({ message: `Dokter dengan ID ${id} berhasil dihapus` });
        } else {
            res.status(404).json({ message: "Dokter tidak ditemukan" });
        }
    } catch (error) {
        res.status(500).json({
            error: error.message,
            message: "Gagal menghapus Dokter"
        });
    }
};
