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
  FormulaSet,
} from "~/components/Techniques/Technique";
import CaesarCipherCodeView
  from "~/app/(routes)/techniques/symmetric/substitutional/caesar-cipher/CaesarCipherCodeView";
import {
  CaesarCipherPlayground
} from "~/app/(routes)/techniques/symmetric/substitutional/caesar-cipher/CaesarCipherPlayground";

export default function CaesarCipher() {
  return (
    <Technique>
      <TechniqueTitle>Caesar Cipher</TechniqueTitle>
      <TechniqueDescription>
        <TechniqueIntroduction>
          <Ul>
            <Li>Caesar Cipher is a symmetric and substitutional cipher.</Li>
            <Li>As for the key, here we have a simple numeric key.</Li>
          </Ul>
        </TechniqueIntroduction>

        <TechniqueSubtitle>Working</TechniqueSubtitle>
        <Ul>
          <Li>
            We are given a key <Strong>k</Strong> and a message{" "}
            <Strong>m</Strong>.
          </Li>
          <Li>Create a table with letters A to Z, mapped from 0 to 25.</Li>
          <Li>Note that we start counting from 0 for &#39;A&#39;.</Li>
          <Li>
            Split the message into letters, convert them to numbers, and add the
            key to each letter.
          </Li>
          <Li>
            If the result is greater than 25, take modulo 26 of the result.
          </Li>
          <Li>
            Finally, convert the numbers back to letters to get the encrypted
            message.
          </Li>
          <Li>
            We would simply subtract the key, add 26 and then mod 26 for
            decrypting!
          </Li>
        </Ul>

        <TechniqueSubtitle>Formula</TechniqueSubtitle>
        <FormulaSet>
          <TechniqueSubSubtitle>Encryption Formula</TechniqueSubSubtitle>
          <Formula>CT(m) = (PT + k) % 26</Formula>
          <TechniqueSubSubtitle>Decryption Formula</TechniqueSubSubtitle>
          <Formula>PT = (CT - k + 26) % 26</Formula>
        </FormulaSet>
        <TechniqueSubtitle>Encryption Example</TechniqueSubtitle>
        <Ul>
          <Li>
            Message: <Strong>HELLO</Strong>
          </Li>
          <Li>
            Key: <Strong>k = 3</Strong>
          </Li>

          <Li>Map letters to numbers:</Li>
          <Diagram center>
            <DiagramBox>H</DiagramBox>
            <DiagramBox>E</DiagramBox>
            <DiagramBox>L</DiagramBox>
            <DiagramBox>L</DiagramBox>
            <DiagramBox>O</DiagramBox>
          </Diagram>
          <Diagram center>
            <DiagramArrow size={"medium"} direction="y" />
          </Diagram>
          <Diagram center>
            <DiagramBox>7</DiagramBox>
            <DiagramBox>4</DiagramBox>
            <DiagramBox>11</DiagramBox>
            <DiagramBox>11</DiagramBox>
            <DiagramBox>14</DiagramBox>
          </Diagram>

          <Li>Add key 3 to each number:</Li>
          <Diagram center>
            <DiagramBox>10</DiagramBox>
            <DiagramBox>7</DiagramBox>
            <DiagramBox>14</DiagramBox>
            <DiagramBox>14</DiagramBox>
            <DiagramBox>17</DiagramBox>
          </Diagram>

          <Li>Modulo 26 to keep values in range:</Li>
          <Diagram center>
            <DiagramBox>10</DiagramBox>
            <DiagramBox>7</DiagramBox>
            <DiagramBox>14</DiagramBox>
            <DiagramBox>14</DiagramBox>
            <DiagramBox>17</DiagramBox>
          </Diagram>

          <Li>Convert back to letters:</Li>
          <Diagram center>
            <DiagramBox>K</DiagramBox>
            <DiagramBox>H</DiagramBox>
            <DiagramBox>O</DiagramBox>
            <DiagramBox>O</DiagramBox>
            <DiagramBox>R</DiagramBox>
          </Diagram>

          <Li>
            Encrypted message: <Strong>KHOOR</Strong>
          </Li>
        </Ul>

        <TechniqueSubtitle>Decryption Example</TechniqueSubtitle>
        <Ul>
          <Li>
            Encrypted Message: <Strong>KHOOR</Strong>
          </Li>
          <Li>
            Key: <Strong>k = 3</Strong>
          </Li>

          <Li>Map letters to numbers:</Li>
          <Diagram center>
            <DiagramBox>K</DiagramBox>
            <DiagramBox>H</DiagramBox>
            <DiagramBox>O</DiagramBox>
            <DiagramBox>O</DiagramBox>
            <DiagramBox>R</DiagramBox>
          </Diagram>
          <Diagram center>
            <DiagramArrow size={"medium"} direction="y" />
          </Diagram>
          <Diagram center>
            <DiagramBox>10</DiagramBox>
            <DiagramBox>7</DiagramBox>
            <DiagramBox>14</DiagramBox>
            <DiagramBox>14</DiagramBox>
            <DiagramBox>17</DiagramBox>
          </Diagram>

          <Li>Subtract key 3 from each number:</Li>
          <Diagram center>
            <DiagramBox>7</DiagramBox>
            <DiagramBox>4</DiagramBox>
            <DiagramBox>11</DiagramBox>
            <DiagramBox>11</DiagramBox>
            <DiagramBox>14</DiagramBox>
          </Diagram>

          <Li>
            Modulo 26 (to handle negative values, add 26 before mod if needed):
          </Li>
          <Diagram center>
            <DiagramBox>7</DiagramBox>
            <DiagramBox>4</DiagramBox>
            <DiagramBox>11</DiagramBox>
            <DiagramBox>11</DiagramBox>
            <DiagramBox>14</DiagramBox>
          </Diagram>

          <Li>Convert back to letters:</Li>
          <Diagram center>
            <DiagramBox>H</DiagramBox>
            <DiagramBox>E</DiagramBox>
            <DiagramBox>L</DiagramBox>
            <DiagramBox>L</DiagramBox>
            <DiagramBox>O</DiagramBox>
          </Diagram>

          <Li>
            Decrypted message: <Strong>HELLO</Strong>
          </Li>
        </Ul>
        <TechniqueSubtitle>Code</TechniqueSubtitle>
        <CaesarCipherCodeView/>
        <TechniqueSubtitle>Try it yourself!</TechniqueSubtitle>
        <CaesarCipherPlayground/>
      </TechniqueDescription>
    </Technique>
  );
}
