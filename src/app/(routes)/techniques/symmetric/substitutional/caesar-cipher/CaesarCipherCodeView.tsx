import Code from "~/components/Code";

export default function CaesarCipherCodeView() {
  return (
    <Code
      title="Caesar Cipher"
      codeSnippets={{
        ts: `// Caesar Cipher in TypeScript
// Encrypts the text by shifting letters forward by 'key'
function caesarEncrypt(text: string, key: number): string {
  const input = text.toUpperCase();
  let result = "";

  for (let char of input) {
    const code = char.charCodeAt(0);
    if (code >= 65 && code <= 90) {
      const shifted = ((code - 65 + key) % 26) + 65;
      result += String.fromCharCode(shifted);
    } else {
      result += char;
    }
  }

  return result;
}

// Decrypts the text by shifting letters backward by 'key'
function caesarDecrypt(text: string, key: number): string {
  const input = text.toUpperCase();
  let result = "";

  for (let char of input) {
    const code = char.charCodeAt(0);
    if (code >= 65 && code <= 90) {
      const shifted = ((code - 65 - key + 26) % 26) + 65;
      result += String.fromCharCode(shifted);
    } else {
      result += char;
    }
  }

  return result;
}

// Example usage:
console.log(caesarEncrypt("HELLO", 3)); // Output: KHOOR
console.log(caesarDecrypt("KHOOR", 3)); // Output: HELLO`,

        cpp: `// Caesar Cipher in C++
// Encrypts the text by shifting letters forward by 'key'
#include <iostream>
#include <string>
using namespace std;

string caesarEncrypt(const string& text, int key) {
  string result = "";

  for (char c : text) {
    char upper = toupper(c);
    if (upper >= 'A' && upper <= 'Z') {
      char shifted = ((upper - 'A' + key) % 26) + 'A';
      result += shifted;
    } else {
      result += c;
    }
  }

  return result;
}

// Decrypts the text by shifting letters backward by 'key'
string caesarDecrypt(const string& text, int key) {
  string result = "";

  for (char c : text) {
    char upper = toupper(c);
    if (upper >= 'A' && upper <= 'Z') {
      char shifted = ((upper - 'A' - key + 26) % 26) + 'A';
      result += shifted;
    } else {
      result += c;
    }
  }

  return result;
}

int main() {
  string encrypted = caesarEncrypt("HELLO", 3);
  string decrypted = caesarDecrypt(encrypted, 3);

  cout << encrypted << endl; // Output: KHOOR
  cout << decrypted << endl; // Output: HELLO

  return 0;
}`
      }}
    />
  );
}
