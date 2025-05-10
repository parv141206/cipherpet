import { Text } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

type TextComponentProps = {
  opacity: number;
};

export function TextComponent({ opacity }: TextComponentProps) {
  const { viewport } = useThree();

  return (
    <Text
      font="/fonts/fonts.ttf"
      fontSize={viewport.width / 7}
      position={[0, 0, -1]}
      visible={opacity === 0 ? false : true}
      fillOpacity={opacity}
      strokeOpacity={opacity}
      outlineOpacity={opacity}
    >
      CipherPet
    </Text>
  );
}
