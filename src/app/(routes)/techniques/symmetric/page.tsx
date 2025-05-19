import Technique, {
  TechniqueTitle,
  TechniqueSubtitle,
  TechniqueIntroduction,
  TechniqueDescription,
  Ul,
  Li,
  Strong,
  Diagram,
  DiagramBox,
  DiagramArrow,
} from "~/components/Techniques/Technique";

export default function SymmetricTechniques() {
  return (
    <Technique>
      <TechniqueTitle>Symmetric Techniques of Encryption!</TechniqueTitle>
      <TechniqueDescription>
        <TechniqueIntroduction>
          Symmetric encryption is a method of encoding data where the same key
          is used for both encryption and decryption. It&#39;s like having one
          secret key that both the sender and receiver must know and keep safe.
          This method is fast and widely used for securing data in bulk.
        </TechniqueIntroduction>

        <TechniqueSubtitle>Key Features</TechniqueSubtitle>
        <Ul>
          <Li>
            <Strong>Single key:</Strong> Used for both encryption and
            decryption.
          </Li>
          <Li>
            <Strong>Speed:</Strong> Faster compared to asymmetric encryption.
          </Li>
          <Li>
            <Strong>Security risk:</Strong> If the key is leaked, the entire
            system is compromised.
          </Li>
        </Ul>

        <TechniqueSubtitle>Types of Symmetric Encryption</TechniqueSubtitle>
        <Ul>
          <Li>
            <Strong>Substitution Cipher:</Strong> Each letter or group of
            letters is replaced by another letter or group.
          </Li>
          <Li>
            <Strong>Transposition Cipher:</Strong> The positions of the
            characters are shuffled according to a defined system.
          </Li>
        </Ul>

        <TechniqueSubtitle>Substitution Cipher</TechniqueSubtitle>
        <TechniqueIntroduction>
          In substitution ciphers, each character in the plaintext is
          substituted with another character according to a rule or mapping.
        </TechniqueIntroduction>
        <Ul>
          <Li>
            A simple example is the <Strong>Caesar Cipher</Strong>, where each
            letter is shifted by a fixed number of positions.
          </Li>
          <Li>
            For example, shifting by 3:
            <Diagram center>
              <DiagramBox>HELLO</DiagramBox>
              <DiagramArrow direction="x" size="small" />
              <DiagramBox>KHOOR</DiagramBox>
            </Diagram>
          </Li>
        </Ul>

        <TechniqueSubtitle>Transposition Cipher</TechniqueSubtitle>
        <TechniqueIntroduction>
          In transposition ciphers, the letters of the plaintext are rearranged
          in a different order, without changing the actual characters.
        </TechniqueIntroduction>
        <Ul>
          <Li>
            For example, if we rearrange &#34;HELLO&#34; by swapping the
            positions:
            <Diagram center>
              <DiagramBox>HELLO</DiagramBox>
              <DiagramArrow direction="x" size="small" />
              <DiagramBox>LEHLO</DiagramBox>
            </Diagram>
          </Li>
          <Li>
            Transposition does not change the characters, only their order.
          </Li>
        </Ul>
      </TechniqueDescription>
    </Technique>
  );
}
