import Code from "~/components/Code";

export default function HillCipherCodeView() {
  return (
    <Code
      title="Hill Cipher"
      codeSnippets={{
        ts: `// Hill Cipher in TypeScript (2x2 matrix version)
function mod(n: number, m: number): number {
  return ((n % m) + m) % m;
}

// Helper to multiply 2x2 matrix with 2x1 vector
function multiplyMatrixVector(matrix: number[][], vector: number[]): number[] {
  return [
    mod(matrix[0][0] * vector[0] + matrix[0][1] * vector[1], 26),
    mod(matrix[1][0] * vector[0] + matrix[1][1] * vector[1], 26),
  ];
}

// Helper to compute modular inverse of a number mod 26
function modInverse(a: number, m: number): number {
  for (let i = 1; i < m; i++) {
    if (mod(a * i, m) === 1) return i;
  }
  throw new Error("No modular inverse exists.");
}

// Encrypts text using 2x2 Hill cipher key matrix
function hillEncrypt(text: string, key: number[][]): string {
  text = text.toUpperCase().replace(/[^A-Z]/g, "");
  if (text.length % 2 !== 0) text += "X"; // pad if length is odd

  let result = "";
  for (let i = 0; i < text.length; i += 2) {
    const vector = [text.charCodeAt(i) - 65, text.charCodeAt(i + 1) - 65];
    const encrypted = multiplyMatrixVector(key, vector);
    result += String.fromCharCode(encrypted[0] + 65) + String.fromCharCode(encrypted[1] + 65);
  }

  return result;
}

// Decrypts Hill cipher using inverse key matrix
function hillDecrypt(text: string, key: number[][]): string {
  // Calculate determinant and inverse matrix mod 26
  const det = mod(key[0][0] * key[1][1] - key[0][1] * key[1][0], 26);
  const invDet = modInverse(det, 26);

  const inverseKey = [
    [mod(invDet * key[1][1], 26), mod(-invDet * key[0][1], 26)],
    [mod(-invDet * key[1][0], 26), mod(invDet * key[0][0], 26)],
  ];

  let result = "";
  for (let i = 0; i < text.length; i += 2) {
    const vector = [text.charCodeAt(i) - 65, text.charCodeAt(i + 1) - 65];
    const decrypted = multiplyMatrixVector(inverseKey, vector);
    result += String.fromCharCode(decrypted[0] + 65) + String.fromCharCode(decrypted[1] + 65);
  }

  return result;
}

// Example usage:
const key = [
  [3, 3],
  [2, 5]
];
const encrypted = hillEncrypt("HELP", key);
const decrypted = hillDecrypt(encrypted, key);
console.log(encrypted); // Output: "HIAT"
console.log(decrypted); // Output: "HELP"
`,

        cpp: `// Hill Cipher in C++ (2x2 matrix version)
#include <iostream>
#include <vector>
#include <string>
using namespace std;

int mod(int a, int m) {
  return ((a % m) + m) % m;
}

// Multiply 2x2 matrix with 2x1 vector (mod 26)
vector<int> multiplyMatrixVector(const vector<vector<int>>& matrix, const vector<int>& vec) {
  return {
    mod(matrix[0][0] * vec[0] + matrix[0][1] * vec[1], 26),
    mod(matrix[1][0] * vec[0] + matrix[1][1] * vec[1], 26)
  };
}

// Modular inverse using brute-force
int modInverse(int a, int m) {
  for (int i = 1; i < m; i++) {
    if (mod(a * i, m) == 1) return i;
  }
  throw invalid_argument("No modular inverse exists.");
}

// Encrypt text with Hill cipher using 2x2 key matrix
string hillEncrypt(string text, const vector<vector<int>>& key) {
  string result = "";
  // Remove non-letters and make uppercase
  string filtered = "";
  for (char c : text) {
    if (isalpha(c)) filtered += toupper(c);
  }
  if (filtered.size() % 2 != 0) filtered += 'X'; // pad if odd

  for (size_t i = 0; i < filtered.size(); i += 2) {
    vector<int> vec = {filtered[i] - 'A', filtered[i + 1] - 'A'};
    vector<int> encrypted = multiplyMatrixVector(key, vec);
    result += char(encrypted[0] + 'A');
    result += char(encrypted[1] + 'A');
  }

  return result;
}

// Decrypt text using inverse of Hill cipher key
string hillDecrypt(string text, const vector<vector<int>>& key) {
  int det = mod(key[0][0] * key[1][1] - key[0][1] * key[1][0], 26);
  int invDet = modInverse(det, 26);

  vector<vector<int>> inverseKey = {
    {mod(invDet * key[1][1], 26), mod(-invDet * key[0][1], 26)},
    {mod(-invDet * key[1][0], 26), mod(invDet * key[0][0], 26)}
  };

  string result = "";
  for (size_t i = 0; i < text.size(); i += 2) {
    vector<int> vec = {text[i] - 'A', text[i + 1] - 'A'};
    vector<int> decrypted = multiplyMatrixVector(inverseKey, vec);
    result += char(decrypted[0] + 'A');
    result += char(decrypted[1] + 'A');
  }

  return result;
}

int main() {
  vector<vector<int>> key = {
    {3, 3},
    {2, 5}
  };

  string encrypted = hillEncrypt("HELP", key);
  string decrypted = hillDecrypt(encrypted, key);

  cout << encrypted << endl; // Output: HIAT
  cout << decrypted << endl; // Output: HELP

  return 0;
}`
      }}
    />
  );
}
