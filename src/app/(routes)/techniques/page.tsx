import Technique, {
  Diagram,
  DiagramArrow,
  DiagramBox,
  Li,
  Strong,
  TechniqueDescription,
  TechniqueIntroduction,
  TechniqueSubtitle,
  TechniqueTitle,
  Ul
} from "~/components/Techniques/Technique";
import { PreviousAndNext } from "~/components/Techniques/PreviousAndNext";

export default function Techniques() {
  return (
    <>
      <Technique>
        <TechniqueTitle>What is encipherment?</TechniqueTitle>
        <TechniqueDescription>
          <TechniqueIntroduction>
            Encipherment is the process of converting readable data, also known
            as plaintext, into an unreadable format called ciphertext. This
            transformation ensures that sensitive information is hidden from
            unauthorized eyes.
          </TechniqueIntroduction>
          <TechniqueSubtitle>Basic Elements</TechniqueSubtitle>
          <Ul>
            <Li>
              <Strong>Plaintext:</Strong> The original, readable message.
              <Diagram center>
                <DiagramBox>Hello!</DiagramBox>
              </Diagram>
            </Li>
            <Li>
              <Strong>Ciphertext:</Strong> The scrambled version of the
              plaintext, unreadable without decryption.
              <Diagram center>
                <DiagramBox>aXqcv!</DiagramBox>
              </Diagram>
            </Li>
            <Li>
              <Strong>Encryption:</Strong> The process of converting plaintext
              into ciphertext using an algorithm and a key.
              <Diagram center>
                <DiagramBox>Plain Text</DiagramBox>
                <DiagramArrow direction={"x"} size={"medium"} />
                <DiagramBox>Cipher Text</DiagramBox>
              </Diagram>
            </Li>
            <Li>
              <Strong>Decryption:</Strong> The reverse process, converting
              ciphertext back into the original plaintext using the appropriate
              key.
              <Diagram center>
                <DiagramBox>Cipher Text</DiagramBox>
                <DiagramArrow direction={"x"} size={"medium"} />
                <DiagramBox>Plain Text</DiagramBox>
              </Diagram>
            </Li>
          </Ul>

          <TechniqueSubtitle>
            Symmetric vs Asymmetric Encryption
          </TechniqueSubtitle>
          <Ul>
            <Li>
              <Strong>Symmetric Encryption:</Strong>
              The same key is used for both encryption and decryption.
              <Ul>
                <Li>Fast and efficient.</Li>
                <Li>
                  Risky if the key is compromised, as both parties use the same
                  key.
                </Li>
              </Ul>
            </Li>
            <Li>
              <Strong>Asymmetric Encryption:</Strong>
              Uses two keys — a <Strong>public key</Strong> for encryption and a{" "}
              <Strong>private key</Strong> for decryption.
              <Ul>
                <Li>More secure, since the private key is never shared.</Li>
                <Li>
                  Slower than symmetric encryption due to complex calculations.
                </Li>
              </Ul>
            </Li>
          </Ul>
        </TechniqueDescription>
        <PreviousAndNext next={{title: "Symmetric Techniques"  , path: "/techniques/symmetric"}} />
      </Technique>
    </>
  );
}
