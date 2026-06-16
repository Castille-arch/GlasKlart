import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import Svg, { Path, Circle, Line } from 'react-native-svg'
import { Colors, Fonts, Radius } from '../../constants/theme'
import GlasKlartMark from '../../components/GlasKlartMark'

const MENU = [
  { label: 'Mitt företag', icon: BuildingIcon },
  { label: 'Inställningar', icon: SettingsIcon },
  { label: 'Support', icon: HelpIcon },
]

export default function ProfileScreen() {
  return (
    <SafeAreaView style={s.safe}>
      <ScrollView contentContainerStyle={s.scroll}>
        <Text style={s.title}>Profil</Text>

        <View style={s.profileCard}>
          <View style={s.avatar}>
            <Text style={s.avatarText}>M</Text>
          </View>
          <View style={s.profileInfo}>
            <Text style={s.profileName}>Martin Olsson</Text>
            <Text style={s.profileEmail}>martin@glasklart.se</Text>
            <View style={s.roleBadge}>
              <Text style={s.roleText}>Administratör</Text>
            </View>
          </View>
        </View>

        <View style={s.menuCard}>
          {MENU.map(({ label, icon: Icon }, i) => (
            <TouchableOpacity key={label} style={[s.menuRow, i < MENU.length - 1 && s.menuBorder]} activeOpacity={0.7}>
              <View style={s.menuIcon}><Icon /></View>
              <Text style={s.menuLabel}>{label}</Text>
              <ChevronIcon />
            </TouchableOpacity>
          ))}
        </View>

        <View style={s.brandRow}>
          <GlasKlartMark size={20} />
          <Text style={s.brandText}><Text style={{ color: Colors.slate }}>Glas</Text><Text style={{ color: Colors.pane }}>Klart</Text> v1.0.0</Text>
        </View>

        <TouchableOpacity style={s.logoutBtn} onPress={() => router.replace('/login')} activeOpacity={0.85}>
          <Text style={s.logoutText}>Logga ut</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

function BuildingIcon() {
  return <Svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke={Colors.mist} strokeWidth={2} strokeLinecap="round"><Path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><Path d="M9 22V12h6v10"/></Svg>
}
function SettingsIcon() {
  return <Svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke={Colors.mist} strokeWidth={2} strokeLinecap="round"><Circle cx="12" cy="12" r="3"/><Path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></Svg>
}
function HelpIcon() {
  return <Svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke={Colors.mist} strokeWidth={2} strokeLinecap="round"><Circle cx="12" cy="12" r="10"/><Path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><Line x1="12" y1="17" x2="12.01" y2="17"/></Svg>
}
function ChevronIcon() {
  return <Svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke={Colors.textSubtle} strokeWidth={2} strokeLinecap="round"><Path d="M9 18l6-6-6-6"/></Svg>
}

const s = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.bg },
  scroll: { padding: 20, paddingBottom: 48 },
  title: { fontFamily: Fonts.headingBold, fontSize: 26, color: Colors.slate, marginBottom: 24 },
  profileCard: {
    backgroundColor: Colors.white, borderRadius: Radius.md, padding: 20,
    flexDirection: 'row', alignItems: 'center', gap: 16, marginBottom: 16,
    shadowColor: Colors.slate, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 8, elevation: 2,
  },
  avatar: {
    width: 56, height: 56, borderRadius: 28,
    backgroundColor: Colors.pane, alignItems: 'center', justifyContent: 'center',
  },
  avatarText: { fontFamily: Fonts.headingBold, fontSize: 22, color: Colors.white },
  profileInfo: { flex: 1, gap: 4 },
  profileName: { fontFamily: Fonts.headingBold, fontSize: 18, color: Colors.slate },
  profileEmail: { fontFamily: Fonts.body, fontSize: 13, color: Colors.mist },
  roleBadge: {
    alignSelf: 'flex-start', marginTop: 4,
    backgroundColor: 'rgba(31,138,158,0.1)', borderRadius: Radius.full,
    paddingHorizontal: 10, paddingVertical: 3,
  },
  roleText: { fontFamily: Fonts.bodyMedium, fontSize: 11, color: Colors.pane },
  menuCard: {
    backgroundColor: Colors.white, borderRadius: Radius.md, marginBottom: 24,
    shadowColor: Colors.slate, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 8, elevation: 2,
    overflow: 'hidden',
  },
  menuRow: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 15, gap: 12 },
  menuBorder: { borderBottomWidth: 1, borderBottomColor: Colors.border },
  menuIcon: { width: 24, alignItems: 'center' },
  menuLabel: { flex: 1, fontFamily: Fonts.bodyMedium, fontSize: 15, color: Colors.slate },
  brandRow: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    gap: 8, marginBottom: 16,
  },
  brandText: { fontFamily: Fonts.heading, fontSize: 14 },
  logoutBtn: {
    backgroundColor: 'rgba(192,57,43,0.08)', borderRadius: Radius.sm,
    paddingVertical: 14, alignItems: 'center',
    borderWidth: 1, borderColor: 'rgba(192,57,43,0.15)',
  },
  logoutText: { fontFamily: Fonts.bodySemiBold, fontSize: 15, color: Colors.danger },
})
