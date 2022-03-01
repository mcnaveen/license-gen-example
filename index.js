import generateLicenseKey from "@mcnaveen/license-gen";

const myKey = generateLicenseKey(32, 3);
console.log(myKey);