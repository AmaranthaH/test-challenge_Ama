const validateDNA = require('../dna');

test("should return true for valid DNA sequence", () => {
    const validDNASequence = "CTAGGGTA";
    expect(validateDNA(validDNASequence)).toEqual(true);
});

test("should return false for invalid DNA sequence", () => {
    const invalidDNASequence = "CTAGGXTA";
    expect(validateDNA(invalidDNASequence)).toEqual(false);
});

test("should return empty string for empty input", () => {
    expect(validateDNA("")).toEqual('');
});

test("should return empty string for null input", () => {
    expect(validateDNA(null)).toEqual('');
});

test("should return empty string for undefined input", () => {
    expect(validateDNA(undefined)).toEqual('');
});

test("should return false for non-string input", () => {
    expect(validateDNA(134)).toEqual(false);
});

