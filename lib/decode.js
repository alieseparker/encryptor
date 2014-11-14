var decoder = {
  getEncryptedMessage: function() {
    this.encryptedMessage = document.URL.split('?')[1];
    console.log(this.encryptedMessage);
  },

  getPassword: function() {
    this.password = prompt("Enter the password.");
  },

  revealMessage: function () {
    alert(CryptoJS.AES.decrypt(this.encryptedMessage, this.password).toString(CryptoJS.enc.Utf8));
  },

  reveal: function () {
    decoder.getPassword();
    decoder.getEncryptedMessage();
    decoder.revealMessage();
  }
}

module.exports = {
  decoder: decoder
};