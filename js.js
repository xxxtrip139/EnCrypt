var key = CryptoJS.enc.Hex.parse("000102030405060708090a0b0c0d0e0f");
var iv = CryptoJS.enc.Hex.parse("101112131415161718191a1b1c1d1e1f");

function encrypt() {
    var text = document.getElementById("text").value;
    var cipher = CryptoJS.AES.encrypt(text, key, { iv: iv });
    document.getElementById("cipher").value = cipher.toString();
}

function decrypt() {
    var cipherText = document.getElementById("cipher").value;
    var decrypted = CryptoJS.AES.decrypt(cipherText, key, { iv: iv });
    document.getElementById("decrypted").value = decrypted.toString(CryptoJS.enc.Utf8);
}