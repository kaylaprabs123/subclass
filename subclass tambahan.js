class Kapal {
    constructor(nama, jenis, panjang, lebar) {
        this.nama = nama;
        this.jenis = jenis;
        this.panjang = panjang;
        this.lebar = lebar;
    }

    infokapal() {
        return Kapal ${this.nama} merupakan jenis ${this.jenis} yang berukuran ${this.panjang} m x ${this.lebar} m.;
    }
}

class KapalPenumpang extends Kapal {
    constructor(nama, panjang, lebar, kapasitasPenumpang) {
        super(nama, "Penumpang", panjang, lebar);
        this.kapasitasPenumpang = kapasitasPenumpang;
    }

    infokapal() {
        return ${super.infokapal()} Kapal ini memiliki kapasitas ${this.kapasitasPenumpang} orang.;
    }

    getKapasitas() {
        return this.kapasitasPenumpang;
    }
}

class KapalEvergreen extends Kapal {
    constructor(nama, panjang, lebar, kapasitasKontainer) {
        super(nama, "Evergreen", panjang, lebar);
        this.kapasitasKontainer = kapasitasKontainer;
    }

    infokapal() {
        return ${super.infokapal()} Kapasitas kontainer: ${this.kapasitasKontainer} Kontainer.;
    }

    getKapasitas() {
        return this.kapasitasKontainer;
    }

    getJenis() {
        return Jenis kapal: ${this.jenis};
    }
}

class KapalPinisi extends Kapal {
    constructor(nama, panjang, lebar, kapasitasPenumpang) {
        super(nama, "Pinisi", panjang, lebar);
        this.kapasitasPenumpang = kapasitasPenumpang;
    }

    infokapal() {
        return ${super.infokapal()} Kapasitas penumpang: ${this.kapasitasPenumpang} orang.;
    }

    getKapasitas() {
        return this.kapasitasPenumpang;
    }

    getJenis() {
        return Jenis kapal: ${this.jenis};
    }
}

class KapalTanker extends Kapal {
    constructor(nama, panjang, lebar, kapasitasMinyak) {
        super(nama, "Tanker", panjang, lebar);
        this.kapasitasMinyak = kapasitasMinyak;
    }

    infokapal() {
        return `${super.infokapal()} Kapasitas minyak: ${this.kapasitasMinyak} liter.`;
    }

    getKapasitas() {
        return this.kapasitasMinyak;
    }

    getJenis() {
        return `Jenis kapal: ${this.jenis}`;
    }
}

class KapalKargo extends Kapal {
    constructor(nama, panjang, lebar, kapasitasMuatan) {
        super(nama, "Kargo", panjang, lebar);
        this.kapasitasMuatan = kapasitasMuatan;
    }

    infokapal() {
        return `${super.infokapal()} Kapasitas muatan: ${this.kapasitasMuatan} ton.`;
    }

    getKapasitas() {
        return this.kapasitasMuatan;
    }

    getJenis() {
        return `Jenis kapal: ${this.jenis}`;
    }
}

class KapalLautDalam extends Kapal {
    constructor(nama, panjang, lebar, kedalamanSelam) {
        super(nama, "Laut Dalam", panjang, lebar);
        this.kedalamanSelam = kedalamanSelam;
    }

    infokapal() {
        return `${super.infokapal()} Kedalaman selam: ${this.kedalamanSelam} meter.`;
    }

    getKapasitas() {
        return this.kedalamanSelam;
    }

    getJenis() {
        return `Jenis kapal: ${this.jenis}`;
    }
}

class KapalFeri extends Kapal {
    constructor(nama, panjang, lebar, kapasitasKendaraan) {
        super(nama, "Feri", panjang, lebar);
        this.kapasitasKendaraan = kapasitasKendaraan;
    }

    infokapal() {
        return `${super.infokapal()} Kapasitas kendaraan: ${this.kapasitasKendaraan} kendaraan.`;
    }

    getKapasitas() {
        return this.kapasitasKendaraan;
    }

    getJenis() {
        return `Jenis kapal: ${this.jenis}`;
    }
}
