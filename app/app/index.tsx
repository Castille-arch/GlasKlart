import { useEffect, useRef } from 'react'
import { View, Text, StyleSheet, Animated, Easing } from 'react-native'
import { router } from 'expo-router'
import Svg, { Polygon, Line, Defs, ClipPath, LinearGradient, Stop, Rect, G } from 'react-native-svg'
import { Colors, Fonts } from '../constants/theme'

export default function SplashPage() {
  const facetTop    = useRef(new Animated.Value(0)).current
  const facetRight  = useRef(new Animated.Value(0)).current
  const facetBottom = useRef(new Animated.Value(0)).current
  const facetLeft   = useRef(new Animated.Value(0)).current
  const wordOpacity = useRef(new Animated.Value(0)).current
  const wordY       = useRef(new Animated.Value(10)).current
  const tagOpacity  = useRef(new Animated.Value(0)).current
  const barWidth    = useRef(new Animated.Value(0)).current
  const barOpacity  = useRef(new Animated.Value(0)).current

  useEffect(() => {
    const ease = Easing.out(Easing.back(1.4))

    Animated.sequence([
      Animated.stagger(130, [
        Animated.timing(facetTop,    { toValue: 1, duration: 600, easing: ease, useNativeDriver: true }),
        Animated.timing(facetRight,  { toValue: 1, duration: 600, easing: ease, useNativeDriver: true }),
        Animated.timing(facetBottom, { toValue: 1, duration: 600, easing: ease, useNativeDriver: true }),
        Animated.timing(facetLeft,   { toValue: 1, duration: 600, easing: ease, useNativeDriver: true }),
      ]),
      Animated.parallel([
        Animated.timing(wordOpacity, { toValue: 1, duration: 600, easing: Easing.out(Easing.quad), useNativeDriver: true }),
        Animated.timing(wordY,       { toValue: 0, duration: 600, easing: Easing.out(Easing.quad), useNativeDriver: true }),
      ]),
      Animated.timing(tagOpacity, { toValue: 1, duration: 400, useNativeDriver: true }),
      Animated.parallel([
        Animated.timing(barOpacity, { toValue: 1, duration: 300, useNativeDriver: true }),
        Animated.timing(barWidth,   { toValue: 120, duration: 1800, easing: Easing.inOut(Easing.quad), useNativeDriver: false }),
      ]),
    ]).start()

    const timer = setTimeout(() => {
      router.replace('/login')
    }, 3200)
    return () => clearTimeout(timer)
  }, [])

  const makeFacetStyle = (anim: Animated.Value, tx: number, ty: number) => ({
    opacity: anim,
    transform: [
      { translateX: anim.interpolate({ inputRange: [0, 1], outputRange: [tx, 0] }) },
      { translateY: anim.interpolate({ inputRange: [0, 1], outputRange: [ty, 0] }) },
      { scale:     anim.interpolate({ inputRange: [0, 1], outputRange: [0.7, 1] }) },
    ],
  })

  return (
    <View style={s.screen}>
      <View style={s.markWrap}>
        <Svg width={120} height={120} viewBox="0 0 100 100">
          <Defs>
            <ClipPath id="diamond">
              <Polygon points="50,6 94,50 50,94 6,50" />
            </ClipPath>
            <LinearGradient id="shine" x1="0" y1="0" x2="1" y2="0">
              <Stop offset="0%" stopColor="#fff" stopOpacity={0} />
              <Stop offset="50%" stopColor="#fff" stopOpacity={0.5} />
              <Stop offset="100%" stopColor="#fff" stopOpacity={0} />
            </LinearGradient>
          </Defs>
          <Polygon points="50,6 94,50 50,50" fill="#5FB9CC" />
          <Polygon points="94,50 50,94 50,50" fill="#BFDCE3" />
          <Polygon points="50,94 6,50 50,50" fill="#0B1820" />
          <Polygon points="6,50 50,6 50,50"  fill="#C5793E" />
          <Line x1="50" y1="6" x2="50" y2="94" stroke="#142430" strokeOpacity={0.55} strokeWidth={1.4} />
          <Line x1="6" y1="50" x2="94" y2="50" stroke="#142430" strokeOpacity={0.55} strokeWidth={1.4} />
        </Svg>

        {/* Animated facet overlays — positioned over the SVG */}
        <Animated.View style={[s.facet, s.facetTop,    makeFacetStyle(facetTop,    -26, -34)]} />
        <Animated.View style={[s.facet, s.facetRight,  makeFacetStyle(facetRight,   34, -12)]} />
        <Animated.View style={[s.facet, s.facetBottom, makeFacetStyle(facetBottom,  20,  34)]} />
        <Animated.View style={[s.facet, s.facetLeft,   makeFacetStyle(facetLeft,   -34,  16)]} />
      </View>

      <Animated.View style={{ opacity: wordOpacity, transform: [{ translateY: wordY }], flexDirection: 'row', marginTop: 28 }}>
        <Text style={s.wordGlas}>Glas</Text>
        <Text style={s.wordKlart}>Klart</Text>
      </Animated.View>

      <Animated.Text style={[s.tag, { opacity: tagOpacity }]}>
        klar sikt, varje gång
      </Animated.Text>

      <Animated.View style={[s.barTrack, { opacity: barOpacity }]}>
        <Animated.View style={[s.barFill, { width: barWidth }]} />
      </Animated.View>
    </View>
  )
}

const s = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#142430',
    alignItems: 'center',
    justifyContent: 'center',
  },
  markWrap: {
    width: 120,
    height: 120,
    position: 'relative',
  },
  facet: {
    position: 'absolute',
    width: 0,
    height: 0,
  },
  facetTop:    {},
  facetRight:  {},
  facetBottom: {},
  facetLeft:   {},
  wordGlas: {
    fontFamily: 'SpaceGrotesk_600SemiBold',
    fontSize: 26,
    color: '#BFDCE3',
    letterSpacing: 0.3,
  },
  wordKlart: {
    fontFamily: 'SpaceGrotesk_700Bold',
    fontSize: 26,
    color: '#5FB9CC',
    letterSpacing: 0.3,
  },
  tag: {
    fontFamily: 'Inter_400Regular',
    fontSize: 11,
    color: '#7E9AA4',
    letterSpacing: 1,
    marginTop: 10,
  },
  barTrack: {
    width: 120,
    height: 3,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 99,
    marginTop: 30,
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    backgroundColor: Colors.copper,
    borderRadius: 99,
  },
})
