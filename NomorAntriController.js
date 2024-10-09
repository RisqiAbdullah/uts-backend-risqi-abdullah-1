import NomorAntri from "../models/NomorAntriModel.js";


// Get All Nomor Antri
export const getAllNomorAntri = async (req, res) => {
    try {
        const nomorAntri = await NomorAntri.findAll();
        res.status(200).json(nomorAntri);
    } catch (error) {
        res.status(500).json({
            error: error.message,
            message: "Terjadi kesalahan saat mengambil semua nomor antri"
        });
    }
};

// Get Nomor Antri By ID
export const getNomorAntriById = async (req, res) => {
    try {
        const { id } = req.params;
        const nomorAntri = await NomorAntri.findByPk(id);
        if (!nomorAntri) {
            return res.status(404).json({ message: "Nomor antri tidak ditemukan" });
        }
        res.status(200).json(nomorAntri);
    } catch (error) {
        res.status(500).json({
            message: "Terjadi kesalahan saat mengambil nomor antri berdasarkan ID",
            error: error.message
        });
    }
};

// Create Nomor Antri
export const createNomorAntri = async (req, res) => {
    try {
        const { tanggal, status, nomor } = req.body;
        const nomorAntri = await NomorAntri.create({ tanggal, status, nomor });
        res.status(201).json({
            message: "Nomor antri berhasil dibuat",
            data: nomorAntri
        });
    } catch (error) {
        res.status(400).json({
            message: "Gagal membuat nomor antri",
            error: error.message
        });
    }
};

// Update Nomor Antri
export const updateNomorAntri = async (req, res) => {
    try {
        const { id } = req.params;
        const { tanggal, status, nomor } = req.body;
        const [updated] = await NomorAntri.update({ tanggal, status, nomor }, {
            where: { id }
        });
        if (updated) {
            const updatedNomorAntri = await NomorAntri.findByPk(id);
            res.status(200).json({
                message: "Nomor antri berhasil diperbarui",
                data: updatedNomorAntri
            });
        } else {
            res.status(404).json({ message: "Nomor antri tidak ditemukan" });
        }
    } catch (error) {
        res.status(400).json({
            error: error.message,
            message: "Gagal memperbarui nomor antri"
        });
    }
};

// Delete Nomor Antri
export const deleteNomorAntri = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await NomorAntri.destroy({ where: { id } });
        if (deleted) {
            res.status(200).json({ message: `Nomor antri dengan ID ${id} berhasil dihapus` });
        } else {
            res.status(404).json({ message: "Nomor antri tidak ditemukan" });
        }
    } catch (error) {
        res.status(400).json({
            error: error.message,
            message: "Gagal menghapus nomor antri"
        });
    }
};

