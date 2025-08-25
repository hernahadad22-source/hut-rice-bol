document.getElementById("orderForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Mencegah reload halaman

    const nama = document.getElementById("nama").value;
    const alamat = document.getElementById("alamat").value;
    const jumlah = document.getElementById("jumlah").value;
    const metode = document.getElementById("metode").value;

    const konfirmasi = `
        <strong>Pesanan Berhasil!</strong><br>
        Terima kasih, <strong>${nama}</strong>.<br>
        Sepatu sebanyak <strong>${jumlah} pasang</strong> akan dikirim ke:<br>
        <em>${alamat}</em><br>
        Metode Pembayaran: <strong>${metode.toUpperCase()}</strong>
    `;

    const konfirmasiDiv = document.getElementById("konfirmasi");
    konfirmasiDiv.innerHTML = konfirmasi;
    konfirmasiDiv.classList.remove("hidden");

    // Reset form
    document.getElementById("orderForm").reset();
});
