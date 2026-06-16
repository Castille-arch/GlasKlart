import Svg, { Polygon, Line } from 'react-native-svg'

interface Props {
  size?: number
}

export default function GlasKlartMark({ size = 40 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 100 100">
      <Polygon points="50,6 94,50 50,50" fill="#1F8A9E" />
      <Polygon points="94,50 50,94 50,50" fill="#BFDCE3" />
      <Polygon points="50,94 6,50 50,50" fill="#142430" />
      <Polygon points="6,50 50,6 50,50" fill="#C5793E" />
      <Line x1="50" y1="6" x2="50" y2="94" stroke="#F4F9FB" strokeOpacity={0.45} strokeWidth={1.2} />
      <Line x1="6" y1="50" x2="94" y2="50" stroke="#F4F9FB" strokeOpacity={0.45} strokeWidth={1.2} />
    </Svg>
  )
}
