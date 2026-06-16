import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import { router } from 'expo-router'
import Svg, { Polygon, Line, Path, Rect, G } from 'react-native-svg'
import { Colors, Fonts, Radius } from '../constants/theme'

export default function LoginScreen() {
  return (
    <SafeAreaView style={s.safe}>
      <View style={s.screen}>
        <View style={s.top}>
          <GlasKlartMark size={64} />
          <Text style={s.wordmark}>
            <Text style={s.glas}>Glas</Text>
            <Text style={s.klart}>Klart</Text>
          </Text>
          <Text style={s.tagline}>klar sikt, varje gång</Text>
        </View>

        <View style={s.card}>
          <Text style={s.cardTitle}>Logga in</Text>
          <Text style={s.cardSub}>Välj hur du vill logga in</Text>

          <TouchableOpacity style={s.btn} onPress={() => router.replace('/(tabs)')} activeOpacity={0.85}>
            <GoogleIcon />
            <Text style={s.btnText}>Fortsätt med Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={s.btn} onPress={() => router.replace('/(tabs)')} activeOpacity={0.85}>
            <MicrosoftIcon />
            <Text style={s.btnText}>Fortsätt med Microsoft</Text>
          </TouchableOpacity>

          <Text style={s.terms}>
            Genom att logga in godkänner du våra{' '}
            <Text style={s.link}>Användarvillkor</Text>
            {' '}och{' '}
            <Text style={s.link}>Integritetspolicy</Text>.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

function GlasKlartMark({ size }: { size: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 100 100">
      <Polygon points="50,6 94,50 50,50" fill="#1F8A9E" />
      <Polygon points="94,50 50,94 50,50" fill="#BFDCE3" />
      <Polygon points="50,94 6,50 50,50" fill="#142430" />
      <Polygon points="6,50 50,6 50,50"  fill="#C5793E" />
      <Line x1="50" y1="6" x2="50" y2="94" stroke="#F4F9FB" strokeOpacity={0.45} strokeWidth={1.2} />
      <Line x1="6" y1="50" x2="94" y2="50" stroke="#F4F9FB" strokeOpacity={0.45} strokeWidth={1.2} />
    </Svg>
  )
}

function GoogleIcon() {
  return (
    <Svg width={20} height={20} viewBox="0 0 24 24">
      <Path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <Path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <Path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <Path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </Svg>
  )
}

function MicrosoftIcon() {
  return (
    <Svg width={20} height={20} viewBox="0 0 24 24">
      <Rect x="1" y="1" width="10.5" height="10.5" fill="#F25022" />
      <Rect x="12.5" y="1" width="10.5" height="10.5" fill="#7FBA00" />
      <Rect x="1" y="12.5" width="10.5" height="10.5" fill="#00A4EF" />
      <Rect x="12.5" y="12.5" width="10.5" height="10.5" fill="#FFB900" />
    </Svg>
  )
}

const s = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Colors.ice,
  },
  screen: {
    flex: 1,
    backgroundColor: Colors.ice,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    paddingBottom: 40,
    paddingTop: 60,
  },
  top: {
    alignItems: 'center',
    gap: 8,
  },
  wordmark: {
    fontSize: 28,
    marginTop: 12,
  },
  glas: {
    fontFamily: Fonts.heading,
    color: Colors.slate,
  },
  klart: {
    fontFamily: Fonts.headingBold,
    color: Colors.pane,
  },
  tagline: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: Colors.mist,
    letterSpacing: 0.5,
    marginTop: 2,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: Radius.lg,
    padding: 28,
    shadowColor: Colors.slate,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 4,
    gap: 12,
  },
  cardTitle: {
    fontFamily: Fonts.headingBold,
    fontSize: 22,
    color: Colors.slate,
    marginBottom: 2,
  },
  cardSub: {
    fontFamily: Fonts.body,
    fontSize: 14,
    color: Colors.mist,
    marginBottom: 8,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: Colors.surface2,
    borderWidth: 1.5,
    borderColor: Colors.border,
    borderRadius: Radius.sm,
    paddingVertical: 13,
    paddingHorizontal: 20,
  },
  btnText: {
    fontFamily: Fonts.bodySemiBold,
    fontSize: 14,
    color: Colors.slate,
  },
  terms: {
    fontFamily: Fonts.body,
    fontSize: 12,
    color: Colors.mist,
    textAlign: 'center',
    lineHeight: 18,
    marginTop: 4,
  },
  link: {
    color: Colors.pane,
  },
})
