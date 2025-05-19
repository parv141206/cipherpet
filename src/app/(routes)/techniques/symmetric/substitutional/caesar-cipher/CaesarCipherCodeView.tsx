import Code from "~/components/Code";

export default function CaesarCipherCodeView() {
  return (
    <Code
      title="Caesar Cipher"
      codeSnippets={{
        ts: `// Caesar Cipher in TypeScript
// This function encrypts text using a Caesar Cipher with a given key
function caesarEncrypt(text: string, key: number): string {
  // Convert text to uppercase to simplify letter mapping
  const input = text.toUpperCase();
  let result = "";

  for (let char of input) {
    const code = char.charCodeAt(0);
    
    // Check if character is an uppercase English letter
    if (code >= 65 && code <= 90) {
      // Shift the character by key positions in the alphabet
      const shifted = ((code - 65 + key) % 26) + 65;
      result += String.fromCharCode(shifted);
    } else {
      // If not a letter (e.g. space, punctuation), keep it unchanged
      result += char;
    }
  }

  return result;
}

// Example usage:
console.log(caesarEncrypt("HELLO", 3)); // Output: KHOOR`,

        cpp: `// Caesar Cipher in C++
// This function takes a string and a key, and returns the encrypted version using Caesar Cipher
#include <iostream>
#include <string>
using namespace std;

string caesarEncrypt(const string& text, int key) {
  string result = "";

  for (char c : text) {
    // Convert each character to uppercase for consistent mapping
    char upper = toupper(c);

    // Check if it's an uppercase alphabet letter
    if (upper >= 'A' && upper <= 'Z') {
      // Shift it by the key (modulo 26 to wrap around A-Z)
      char shifted = ((upper - 'A' + key) % 26) + 'A';
      result += shifted;
    } else {
      // Leave non-letter characters unchanged
      result += c;
    }
  }

  return result;
}

int main() {
  // Example usage:
  cout << caesarEncrypt("HELLO", 3) << endl; // Output: KHOOR
  return 0;
}`,
      }}
    />
  );
}
