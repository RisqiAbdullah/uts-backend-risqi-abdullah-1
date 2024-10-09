import Pendaftaran from "../models/PendaftaranModel.js";
import Pasien from "../models/PasienModel.js";
import Dokter from "../models/DokterModel.js";
import NomorAntri from "../models/NomorAntriModel.js";

// Get All Pendaftaran
export const getAllPendaftaran = async (req, res) => {
    try {
        const pendaftaran = await Pendaftaran.findAll({
            include: [
                { model: Pasien },
                { model: Dokter },
                { model: NomorAntri }
            ]
        });
        res.status(200).json(pendaftaran);
    } catch (error) {
        res.status(500).json({
            error: error.message,
            message: "Terjadi kesalahan saat mengambil semua data Pendaftaran"
        });
    }
};

// Get Pendaftaran By ID
export const getPendaftaranById = async (req, res) => {
    try {
        const { id } = req.params;
        const pendaftaran = await Pendaftaran.findByPk(id, {
            include: [
                { model: Pasien },
                { model: Dokter },
                { model: NomorAntri }
            ]
        });
        if (!pendaftaran) {
            return res.status(404).json({ message: "Pendaftaran tidak ditemukan" });
        }
        res.status(200).json(pendaftaran);
    } catch (error) {
        res.status(500).json({
            message: "Terjadi kesalahan saat mengambil pendaftaran berdasarkan ID",
            error: error.message
        });
    }
};

// Create Pendaftaran
export const createPendaftaran = async (req, res) => {
    try {
        const { id_pasien, id_dokter, tanggal_daftar } = req.body;
        const pendaftaran = await Pendaftaran.create({ id_pasien, id_dokter, tanggal_daftar });
        
        // Membuat nomor antrian
        const nomorAntri = await NomorAntri.create({
            id_pendaftaran: pendaftaran.id,
            tanggal: tanggal_daftar,
            status: 'menunggu',
            nomor: await getNomorAntrian(tanggal_daftar)
        });

        res.status(201).json({
            message: "Pendaftaran berhasil dibuat",
            data: { ...pendaftaran.toJSON(), nomorAntri }
        });
    } catch (error) {
        res.status(500).json({
            message: "Gagal membuat pendaftaran",
            error: error.message
        });
    }
};

// Update Pendaftaran
export const updatePendaftaran = async (req, res) => {
    try {
        const { id } = req.params;
        const { id_pasien, id_dokter, tanggal_daftar } = req.body;
        const [updated] = await Pendaftaran.update(
            { id_pasien, id_dokter, tanggal_daftar },
            { where: { id } }
        );
        if (updated) {
            const updatedPendaftaran = await Pendaftaran.findByPk(id, {
                include: [
                    { model: Pasien },
                    { model: Dokter },
                    { model: NomorAntri }
                ]
            });
            res.status(200).json({
                message: "Data pendaftaran berhasil diperbarui",
                data: updatedPendaftaran
            });
        } else {
            res.status(404).json({ message: "Pendaftaran tidak ditemukan" });
        }
    } catch (error) {
        res.status(500).json({
            error: error.message,
            message: "Gagal memperbarui data Pendaftaran"
        });
    }
};

// Delete Pendaftaran
export const deletePendaftaran = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Pendaftaran.destroy({ where: { id } });
        if (deleted) {
            res.status(200).json({ message: `Pendaftaran dengan ID ${id} berhasil dihapus` });
        } else {
            res.status(404).json({ message: "Pendaftaran tidak ditemukan" });
        }
    } catch (error) {
        res.status(500).json({
            error: error.message,
            message: "Gagal menghapus Pendaftaran"
        });
    }
};

// Fungsi helper untuk mendapatkan nomor antrian
async function getNomorAntrian(tanggal) {
    const lastAntrian = await NomorAntri.findOne({
        where: { tanggal },
        order: [['nomor', 'DESC']]
    });
    return lastAntrian ? lastAntrian.nomor + 1 : 1;
}
