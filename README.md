# Manajemen Puskesmas

## Deskripsi
Sistem Manajemen Puskesmas ini dirancang untuk memfasilitasi pengelolaan interaksi antara pasien, tenaga medis, dan layanan yang tersedia di puskesmas. Dengan menggunakan teknologi Express.js dan Sequelize, sistem ini mendukung operasi CRUD untuk berbagai entitas dalam sistem.

## Entitas Utama
1. **Tenaga Medis**: Dokter dan perawat di puskesmas.
2. **Pasien**: Pengguna yang menerima pelayanan kesehatan.
3. **Pelayanan**: Berbagai layanan kesehatan yang ditawarkan.
4. **Pendaftaran**: Proses pendaftaran pasien.
5. **Tagihan**: Pembayaran untuk layanan yang diterima.

##Relasi Antar Entitas
1. Pasien ke Pendaftaran
Relasi: One-to-Many
Deskripsi: Setiap pasien dapat memiliki satu atau lebih pendaftaran.
2. Tenaga Medis ke Pendaftaran
Relasi: One-to-Many
Deskripsi: Setiap tenaga medis dapat menangani satu atau lebih pendaftaran.
3. Tagihan ke Pendaftaran
Relasi: One-to-One
Deskripsi: Setiap tagihan hanya bisa menerima satu pendaftaran.
4. Pelayanan ke Pendaftaran
Relasi: Many-to-Many
Deskripsi: Setiap pelayanan dapat memiliki lebih dari satu pendaftaran, dan setiap pendaftaran dapat mencakup lebih dari satu pelayanan.

## Instalasi
1. **Clone Repository**
   ```bash
   git clone <repository-url>
   cd puskesmas-management
## Dependecies / Teknologi yang digunakan 💻
1. **npm init -y**
    Perintah ini digunakan untuk secara otomatis menginisialisasi dan membuat file `package.json`
    ```bash
    npm init -y
    ```
2. **express**
    Express JS sebagai framework Node.js untuk mengelola request dan response HTTP
    ```bash
   npm i express
    ```
3. **mysql**
    package untuk melakukan koneksi ke database
    ```bash
    npm i mysql
    ```
4. **dotenv**
    Dotenv untuk mengatur variabel lingkungan
    ```bash
    npm i dotenv
    ```
5. **cors**
    Untuk memberikan akses pada forntEnd
    ```bash
    npm i cors
    ```
6. **sequelize**
    Sebagai Orm yang dipakai
    ```bash
    npm i sequelize
    ```
7. **nodemon**
    jalankan dengan mengetikan perintah (nodemon namaFile)
    ```bash
    npm install nodemon
    ```
    Perintah ini akan menjalankan server secara terus menerus
    Aplikasi akan berjalan pada port yang ditentukan di file `.env` .
Untuk menginstal semua dependensi ini sekaligus, Anda bisa menjalankan perintah berikut di terminal di direktori proyek Anda:
```bash
npm install body-parser cors dotenv express mysql nodemon sequelize
```
<br>
    
# CLASS DIAGRAM 
<img src="./img/Class_Diagram.png">
 
# ERD (Entity Relationship Diagram) 
<img src="">
<br>
# RELASI TABLE
<img src="">
<br>
# MADE BY 
```
Nama : Iaka Azkiano ...
Kelas : XII PPLG .. 
Mapel : Produktif PPLG ...
Tugas : Sequelize ...
```
