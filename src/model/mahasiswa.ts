export interface student {
    id: number,
    nrp: string,
    nama: string,
    kelas: string,
    alamat: string,
    noHp: string,
}

export let students: student[] = [
    {
        id: 1,
        nrp: "3120600021",
        nama: "Muh. Arga Swara Isakndar",
        kelas: "1 D4 ITA",
        alamat: "Enrekang",
        noHp: "+6281340796948"
    },
    {
        id: 2,
        nrp: "3120600091",
        nama: "Atrianto Masri",
        kelas: "1 D4 ITA",
        alamat: "Enrekang",
        noHp: "+6281345768900"
    },
    {
        id: 3,
        nrp: "3120600092",
        nama: "Hairil Fausan Lutfi Anwar",
        kelas: "1 D4 ITA",
        alamat: "Enrekang",
        noHp: "+62814567345938"
    }
]
