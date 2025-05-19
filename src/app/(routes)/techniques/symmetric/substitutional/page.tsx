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

export default function SubstitutionalTechniques() {
  return (
    <Technique>
      <TechniqueTitle>Substitutional Ciphers</TechniqueTitle>
      <TechniqueDescription>
        <TechniqueIntroduction>
          Substitutional ciphers are all about swapping stuff! 🧠 Each letter or group of letters in the plaintext is replaced with another letter or group, following a specific rule or key. It’s like writing a secret language where A becomes D, B becomes E, and so on.
        </TechniqueIntroduction>

        <TechniqueSubtitle>How It Works</TechniqueSubtitle>
        <Ul>
          <Li>
            <Strong>One-to-one mapping:</Strong> Each character in the original message maps to a different one.
          </Li>
          <Li>
            <Strong>Fixed rule or key:</Strong> The rule stays the same throughout the message.
          </Li>
          <Li>
            <Strong>Readable pattern:</Strong> Still looks kind of normal — just jumbled!
          </Li>
        </Ul>

        <TechniqueSubtitle>Example: Caesar Cipher</TechniqueSubtitle>
        <TechniqueIntroduction>
          A classic example is the Caesar Cipher — it shifts each letter in the alphabet by a certain number. Julius Caesar used it (because why not flex on enemies *and* cryptography).
        </TechniqueIntroduction>
        <Ul>
          <Li>
            Let’s shift everything by 3 positions:
            <Diagram center>
              <DiagramBox>HELLO</DiagramBox>
              <DiagramArrow direction="x" size="small" />
              <DiagramBox>KHOOR</DiagramBox>
            </Diagram>
          </Li>
          <Li>
            So A becomes D, B becomes E, and so on. Easy to implement, easy to crack!
          </Li>
        </Ul>

        <TechniqueSubtitle>Properties</TechniqueSubtitle>
        <Ul>
          <Li>
            <Strong>Simple:</Strong> Easy to understand and implement.
          </Li>
          <Li>
            <Strong>Pattern-based:</Strong> Vulnerable to frequency analysis.
          </Li>
          <Li>
            <Strong>Fixed mapping:</Strong> One character always maps to the same one.
          </Li>
        </Ul>

        <TechniqueSubtitle>Popular Techniques</TechniqueSubtitle>
        <Ul>
          <Li>
            <Strong>Caesar Cipher:</Strong> Shift characters by a fixed number.
          </Li>
          <Li>
            <Strong>Playfair Cipher:</Strong> Uses pairs of letters and a 5×5 grid to encrypt.
          </Li>
        </Ul>
      </TechniqueDescription>
    </Technique>
  );
}
