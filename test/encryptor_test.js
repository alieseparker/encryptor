var encode = require("../lib/encode.js");
var decode = require("../lib/decode.js");
var assert = require("assert");
var should = require("should");
var test_url;
var decodedMessage;

describe("Encoder", function () {
  it("should encode a message", function () {
    encode.message = "message";
    encode.password = "asdf";
    test_url = encode.url;
  })

  it("should decrypt a message", function () {
    decode.encryptedMessage = test_url;
    decode.password = encode.password;

  })
})