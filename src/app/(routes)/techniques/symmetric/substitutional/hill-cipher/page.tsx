import React from "react";
import Technique, {
  Formula,
  Li,
  Strong,
  TechniqueDescription,
  TechniqueIntroduction,
  TechniqueSubtitle,
  TechniqueTitle,
  Ul,
  Diagram,
  DiagramBox,
  DiagramArrow,
  TechniqueSubSubtitle,
  FormulaSet, Matrix
} from "~/components/Techniques/Technique";
import HillCipherCodeView from "./HillCipherCodeView";

export default function HillCipher() {
  return (
    <Technique>
      <TechniqueTitle>Hill Cipher</TechniqueTitle>
      <TechniqueDescription>
        <TechniqueIntroduction>
          <Ul>
            <Li>
              Hill Cipher is a symmetric and polygraphic substitution cipher.
            </Li>
            <Li>
              It uses some spicy linear algebra! The key is a square matrix, and
              we do matrix multiplication to encrypt.
            </Li>
            <Li>You better brush up on your matrix math 💪</Li>
          </Ul>
        </TechniqueIntroduction>

        <TechniqueSubtitle>Working</TechniqueSubtitle>
        <Ul>
          <Li>
            Pick a square matrix as your <Strong>key matrix</Strong> (e.g., 2×2
            or 3×3).
          </Li>
          <Li>
            Your message is split into blocks (vectors) that match the size of
            the key matrix.
          </Li>
          <Li>
            Convert letters to numbers (A=0, B=1, ..., Z=25) and form column
            vectors.
          </Li>
          <Li>
            Multiply each vector by the key matrix, and take modulo 26 of each
            result.
          </Li>
          <Li>
            Convert the resulting numbers back into letters. Boom, encrypted!
          </Li>
          <Li>
            To decrypt, you need the <Strong>inverse</Strong> of the key matrix
            modulo 26.
          </Li>
        </Ul>

        <TechniqueSubtitle>Formula</TechniqueSubtitle>
        <FormulaSet>
          <TechniqueSubSubtitle>Encryption Formula</TechniqueSubSubtitle>
          <Formula>CT = (K × PT) % 26</Formula>
          <TechniqueSubSubtitle>Decryption Formula</TechniqueSubSubtitle>
          <Formula>PT = (K⁻¹ × CT) % 26</Formula>
        </FormulaSet>

        <TechniqueSubtitle>Encryption Example</TechniqueSubtitle>
        <Ul>
          <Li>
            Message: <Strong>HI</Strong>
          </Li>
          <Li>
            Key Matrix (2×2):
            <br />
            <Strong>[[3, 3], [2, 5]]</Strong>
          </Li>

          <Li>Convert letters to numbers:</Li>
          <Diagram center>
            <DiagramBox>H</DiagramBox>
            <DiagramBox>I</DiagramBox>
          </Diagram>
          <Diagram center>
            <DiagramArrow size={"medium"} direction="y" />
          </Diagram>
          <Diagram center>
            <DiagramBox>7</DiagramBox>
            <DiagramBox>8</DiagramBox>
          </Diagram>

          <Li>Multiply with key matrix:</Li>
          <div className="flex flex-col gap-3 items-center justify-center md:flex-row">
            <Diagram center>
              <Matrix
                matrix={[
                  [3, 3],
                  [2, 5],
                ]}
              />
            </Diagram>
            <Diagram center>
              <DiagramBox>×</DiagramBox>
            </Diagram>
            <Diagram center>
              <Matrix matrix={[[7], [8]]} />
            </Diagram>
          </div>

          <Li>Do the math (mod 26):</Li>
          <Diagram center className={"flex flex-col gap-3"}>
            <DiagramBox>(3×7 + 3×8) % 26 = 45 % 26 = 19</DiagramBox>
            <DiagramBox>(2×7 + 5×8) % 26 = 54 % 26 = 2</DiagramBox>
          </Diagram>

          <Li>Convert numbers back to letters:</Li>
          <Diagram center>
            <DiagramBox>T</DiagramBox>
            <DiagramBox>C</DiagramBox>
          </Diagram>

          <Li>
            Encrypted Message: <Strong>TC</Strong>
          </Li>
        </Ul>

        <TechniqueSubtitle>Decryption Example</TechniqueSubtitle>
        <Ul>
          <Li>
            Encrypted Message: <Strong>TC</Strong>
          </Li>
          <Li>
            Use inverse of key matrix mod 26:{" "}
            <Strong>[[15, 17], [20, 9]]</Strong>
          </Li>

          <Li>Convert letters to numbers:</Li>
          <Diagram center>
            <DiagramBox>T</DiagramBox>
            <DiagramBox>C</DiagramBox>
          </Diagram>
          <Diagram center>
            <DiagramArrow size={"medium"} direction="y" />
          </Diagram>
          <Diagram center>
            <DiagramBox>19</DiagramBox>
            <DiagramBox>2</DiagramBox>
          </Diagram>

          <Li>Multiply with inverse key matrix:</Li>
          <Diagram center>
            <DiagramBox>15</DiagramBox>
            <DiagramBox>17</DiagramBox>
            <DiagramBox>20</DiagramBox>
            <DiagramBox>9</DiagramBox>
          </Diagram>
          <Diagram center>
            <DiagramArrow size={"medium"} direction="x" />
            <DiagramBox>×</DiagramBox>
            <DiagramArrow size={"medium"} direction="x" />
          </Diagram>
          <Diagram center>
            <DiagramBox>19</DiagramBox>
            <DiagramBox>2</DiagramBox>
          </Diagram>

          <Li>Crunch the numbers (mod 26):</Li>
          <Diagram center>
            <DiagramBox>(15×19 + 17×2) % 26 = 321 % 26 = 7</DiagramBox>
            <DiagramBox>(20×19 + 9×2) % 26 = 408 % 26 = 8</DiagramBox>
          </Diagram>

          <Li>Convert numbers back to letters:</Li>
          <Diagram center>
            <DiagramBox>H</DiagramBox>
            <DiagramBox>I</DiagramBox>
          </Diagram>

          <Li>
            Decrypted Message: <Strong>HI</Strong>
          </Li>
        </Ul>

        <TechniqueSubtitle>Code</TechniqueSubtitle>
        <HillCipherCodeView />
      </TechniqueDescription>
    </Technique>
  );
}
