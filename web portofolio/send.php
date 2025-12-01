<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Ambil data dari form
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Email tujuan
    $to = "gedesapta22@gmail.com"; 
    $subject = "Pesan Baru dari Website";
    $body = "Nama: $name\nEmail: $email\n\nPesan:\n$message";

    // Header email
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Kirim email
    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Pesan berhasil dikirim!'); window.location.href='contact.html';</script>";
    } else {
        echo "<script>alert('Pesan gagal dikirim.'); window.location.href='contact.html';</script>";
    }
} else {
    // Jika diakses langsung
    header("Location: contact.html");
    exit;
}
?>
