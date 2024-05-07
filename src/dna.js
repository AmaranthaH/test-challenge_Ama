const validateDNA = (dnaString) => {
    // Verifica si la cadena de ADN es una cadena vacía o nula
    if (!dnaString || dnaString === "") {
        return '';
    }
  
    // Expresión regular para verificar si la cadena de ADN contiene solo bases válidas
    const validDNARegex = /^[CTAG]+$/;
  
    // Verifica si la cadena de ADN cumple con la expresión regular
    if (validDNARegex.test(dnaString)) {
        return true; // La cadena de ADN es válida
    } else {
        return false; // La cadena de ADN es inválida
    }
};

module.exports = validateDNA;
