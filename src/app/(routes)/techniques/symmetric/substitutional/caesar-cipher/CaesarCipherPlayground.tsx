"use client";
import {
  Playground,
  PlaygroundInput,
} from "~/components/Techniques/PlaygroundUtils";
import { useState } from "react";
import { charToIndex, indexToChar } from "~/lib/utils";
import {
  Diagram,
  DiagramBox,
  TechniqueSubSubtitle,
  TechniqueSubtitle,
} from "~/components/Techniques/Technique";
import Button from "~/components/Button";
import { Hr } from "~/components/Hr";

export function CaesarCipherPlayground() {
  const [formValues, setFormValues] = useState<Record<string, string>>({});
  const [validInputs, setValidInputs] = useState<Record<string, boolean>>({});
  const [plainTextInNumbers, setPlainTextInNumbers] = useState<number[]>([]);
  const [addedKeyNumbers, setAddedKeyNumbers] = useState<number[]>([]);
  const [cipherNumbers, setCipherNumbers] = useState<number[]>([]);
  const [cipherText, setCipherText] = useState<string>("");

  const [subtractedKeyNumbers, setSubtractedKeyNumbers] = useState<number[]>(
    [],
  );
  const [decryptedNumbers, setDecryptedNumbers] = useState<number[]>([]);
  const [decryptedText, setDecryptedText] = useState<string>("");

  const handleChange = (name: string, value: string, isValid: boolean) => {
    setFormValues((prev) => ({ ...prev, [name]: value }));
    setValidInputs((prev) => ({ ...prev, [name]: isValid }));
  };

  const handleSubmit = () => {
    if (!Object.values(validInputs).every((v) => v)) return;

    const text = formValues.text ?? "";
    const key = parseInt(formValues.key ?? "0", 10) % 26;

    const plainNumbers = text.split("").map((char) => charToIndex(char));
    setPlainTextInNumbers(plainNumbers);

    const added = plainNumbers.map((num) => num + key);
    setAddedKeyNumbers(added);

    const encrypted = added.map((val) => (val + 26) % 26);
    setCipherNumbers(encrypted);

    const encryptedText = encrypted.map(indexToChar).join("");
    setCipherText(encryptedText);

    const subtracted = encrypted.map((val) => val - key);
    setSubtractedKeyNumbers(subtracted);

    const decryptedNums = subtracted.map((val) => (val + 26) % 26);
    setDecryptedNumbers(decryptedNums);

    const decrypted = decryptedNums.map(indexToChar).join("");
    setDecryptedText(decrypted);
  };

  return (
    <Playground>
      <PlaygroundInput
        name="text"
        label="Plain Text"
        placeholder="Enter message"
        onChange={handleChange}
        minLength={1}
        maxLength={20}
      />
      <PlaygroundInput
        name="key"
        type="number"
        label="Shift Key"
        placeholder="Enter key"
        onChange={handleChange}
      />
      <Button
        onClick={handleSubmit}
        disabled={!Object.values(validInputs).every((v) => v)}
      >
        Submit
      </Button>

      {plainTextInNumbers.length > 0 && (
        <>
          <Hr />
          <TechniqueSubtitle>Encryption</TechniqueSubtitle>
          <TechniqueSubSubtitle>1. Plain Text in Numbers</TechniqueSubSubtitle>
          <Diagram center>
            {plainTextInNumbers.map((num, i) => (
              <DiagramBox key={i}>{num}</DiagramBox>
            ))}
          </Diagram>

          <TechniqueSubSubtitle>
            2. Add Key (before mod 26)
          </TechniqueSubSubtitle>
          <Diagram center>
            {addedKeyNumbers.map((num, i) => (
              <DiagramBox key={i}>{num}</DiagramBox>
            ))}
          </Diagram>

          <TechniqueSubSubtitle>3. Apply mod 26</TechniqueSubSubtitle>
          <Diagram center>
            {cipherNumbers.map((num, i) => (
              <DiagramBox key={i}>{num}</DiagramBox>
            ))}
          </Diagram>

          <TechniqueSubSubtitle>
            4. Final Cipher Text{" "}
            <span className="text-accent">{cipherText}</span>
          </TechniqueSubSubtitle>
          <Hr />

          <TechniqueSubtitle>Decryption</TechniqueSubtitle>
          <TechniqueSubSubtitle>
            1. Subtract Key (before mod 26)
          </TechniqueSubSubtitle>
          <Diagram center>
            {subtractedKeyNumbers.map((num, i) => (
              <DiagramBox key={i}>{num}</DiagramBox>
            ))}
          </Diagram>

          <TechniqueSubSubtitle>2. Apply mod 26</TechniqueSubSubtitle>
          <Diagram center>
            {decryptedNumbers.map((num, i) => (
              <DiagramBox key={i}>{num}</DiagramBox>
            ))}
          </Diagram>

          <TechniqueSubSubtitle>
            3. Final Decrypted Text{" "}
            <span className="text-accent">{decryptedText}</span>
          </TechniqueSubSubtitle>
        </>
      )}
    </Playground>
  );
}
