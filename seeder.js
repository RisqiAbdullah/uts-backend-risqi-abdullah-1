import Dokter from "../models/DokterModel.js";
import Pasien from "../models/PasienModel.js";
import Pendaftaran from "../models/PendaftaranModel.js";
import NomorAntri from "../models/NomorAntriModel.js";

const createSeeder = async () => {
    // await clean(); // Uncomment this line if you want to clean the database before seeding

    // Membuat Dokter
    const dokter = await Dokter.create({
        nama: "Dr. Alice Smith",
        spesialis: "Pediatri",
    });

    // Membuat Pasien
    const pasien = await Pasien.create({
        nama: "Budi Santoso",
        tanggal_lahir: new Date("1990-01-01"),
        alamat: "Jl. Contoh No. 123",
        no_telepon: "081234567890",
        jenis_kelamin: "Laki-laki",
        email: "budi.santoso@example.com"
    });

    // Membuat Pendaftaran
    const pendaftaran = await Pendaftaran.create({
        id_pasien: pasien.id_pasien,
        id_dokter: dokter.id_dokter,
        tanggal_daftar: new Date(),
        keluhan: "Demam dan batuk",
        status: "menunggu"
    });

    // Membuat Nomor Antri
    const nomorAntri = await NomorAntri.create({
        nomor_antri: 1,
        tanggal_antri: new Date(),
        status: "menunggu",
        id_pendaftaran: pendaftaran.id_pendaftaran
    });

    return { dokter, pasien, pendaftaran, nomorAntri };
};

const seedData = await createSeeder();
console.log(seedData);
