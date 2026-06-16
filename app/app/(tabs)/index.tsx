import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Svg, { Polygon, Line, Path, Circle } from 'react-native-svg'
import { Colors, Fonts, Radius } from '../../constants/theme'

const STATS = [
  { label: 'Aktiva jobb', value: '12', delta: '+3 denna vecka', up: true },
  { label: 'Avslutade', value: '47', delta: '+8 denna månad', up: true },
  { label: 'Väntande offert', value: '5', delta: '2 försenade', up: false },
  { label: 'Omsättning', value: '284k', delta: '+12% vs förra mån', up: true },
]

const RECENT = [
  { id: 'JOB-081', customer: 'Karlsson Bygg AB', status: 'Pågående', color: Colors.pane },
  { id: 'JOB-080', customer: 'Eriksson Fastigheter', status: 'Offert', color: Colors.copper },
  { id: 'JOB-079', customer: 'Nordic Construct', status: 'Avslutat', color: Colors.paneDark },
]

export default function OverviewScreen() {
  return (
    <SafeAreaView style={s.safe}>
      <ScrollView contentContainerStyle={s.scroll} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={s.header}>
          <View>
            <Text style={s.greeting}>Välkommen tillbaka</Text>
            <Text style={s.name}>Martin Olsson</Text>
          </View>
          <View style={s.avatar}>
            <Text style={s.avatarText}>M</Text>
          </View>
        </View>

        {/* Stats grid */}
        <View style={s.statsGrid}>
          {STATS.map((stat) => (
            <View key={stat.label} style={s.statCard}>
              <Text style={s.statLabel}>{stat.label}</Text>
              <Text style={s.statValue}>{stat.value}</Text>
              <Text style={[s.statDelta, { color: stat.up ? Colors.pane : Colors.copper }]}>
                {stat.delta}
              </Text>
            </View>
          ))}
        </View>

        {/* Quick actions */}
        <Text style={s.sectionTitle}>Snabbåtgärder</Text>
        <View style={s.actions}>
          <TouchableOpacity style={s.actionBtn} activeOpacity={0.8}>
            <View style={[s.actionIcon, { backgroundColor: 'rgba(31,138,158,0.1)' }]}>
              <PlusIcon color={Colors.pane} />
            </View>
            <Text style={s.actionLabel}>Nytt jobb</Text>
          </TouchableOpacity>
          <TouchableOpacity style={s.actionBtn} activeOpacity={0.8}>
            <View style={[s.actionIcon, { backgroundColor: 'rgba(197,121,62,0.1)' }]}>
              <CalcIcon color={Colors.copper} />
            </View>
            <Text style={s.actionLabel}>Ny kalkyl</Text>
          </TouchableOpacity>
          <TouchableOpacity style={s.actionBtn} activeOpacity={0.8}>
            <View style={[s.actionIcon, { backgroundColor: 'rgba(31,138,158,0.08)' }]}>
              <CameraIcon color={Colors.pane} />
            </View>
            <Text style={s.actionLabel}>Foto</Text>
          </TouchableOpacity>
        </View>

        {/* Recent jobs */}
        <View style={s.sectionRow}>
          <Text style={s.sectionTitle}>Senaste jobb</Text>
          <TouchableOpacity><Text style={s.seeAll}>Visa alla</Text></TouchableOpacity>
        </View>
        <View style={s.jobList}>
          {RECENT.map((job) => (
            <TouchableOpacity key={job.id} style={s.jobRow} activeOpacity={0.7}>
              <View style={s.jobLeft}>
                <Text style={s.jobId}>{job.id}</Text>
                <Text style={s.jobCustomer}>{job.customer}</Text>
              </View>
              <View style={[s.badge, { backgroundColor: job.color + '18' }]}>
                <Text style={[s.badgeText, { color: job.color }]}>{job.status}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

function PlusIcon({ color }: { color: string }) {
  return <Svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2.5} strokeLinecap="round"><Path d="M12 5v14M5 12h14"/></Svg>
}
function CalcIcon({ color }: { color: string }) {
  return <Svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round"><Path d="M4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM8 6h8M8 10h2M14 10h2M8 14h2M14 14h2M8 18h8"/></Svg>
}
function CameraIcon({ color }: { color: string }) {
  return <Svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round"><Path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><Circle cx="12" cy="13" r="4"/></Svg>
}

const s = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.bg },
  scroll: { padding: 20, paddingBottom: 40 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  greeting: { fontFamily: Fonts.body, fontSize: 13, color: Colors.mist },
  name: { fontFamily: Fonts.headingBold, fontSize: 22, color: Colors.slate, marginTop: 2 },
  avatar: {
    width: 42, height: 42, borderRadius: 21,
    backgroundColor: Colors.pane,
    alignItems: 'center', justifyContent: 'center',
  },
  avatarText: { fontFamily: Fonts.headingBold, fontSize: 16, color: Colors.white },
  statsGrid: {
    flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginBottom: 28,
  },
  statCard: {
    width: '47%',
    backgroundColor: Colors.white,
    borderRadius: Radius.md,
    padding: 16,
    shadowColor: Colors.slate,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    gap: 4,
  },
  statLabel: { fontFamily: Fonts.body, fontSize: 11, color: Colors.mist, textTransform: 'uppercase', letterSpacing: 0.5 },
  statValue: { fontFamily: Fonts.headingBold, fontSize: 26, color: Colors.slate, lineHeight: 32 },
  statDelta: { fontFamily: Fonts.bodyMedium, fontSize: 12 },
  sectionTitle: { fontFamily: Fonts.heading, fontSize: 16, color: Colors.slate, marginBottom: 12 },
  sectionRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  seeAll: { fontFamily: Fonts.bodyMedium, fontSize: 13, color: Colors.pane },
  actions: { flexDirection: 'row', gap: 12, marginBottom: 28 },
  actionBtn: { flex: 1, alignItems: 'center', gap: 8 },
  actionIcon: {
    width: 52, height: 52, borderRadius: Radius.md,
    alignItems: 'center', justifyContent: 'center',
  },
  actionLabel: { fontFamily: Fonts.bodyMedium, fontSize: 12, color: Colors.slate },
  jobList: {
    backgroundColor: Colors.white,
    borderRadius: Radius.md,
    overflow: 'hidden',
    shadowColor: Colors.slate,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  jobRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  jobLeft: { gap: 3 },
  jobId: { fontFamily: 'Inter_400Regular', fontSize: 11, color: Colors.mist },
  jobCustomer: { fontFamily: Fonts.bodySemiBold, fontSize: 14, color: Colors.slate },
  badge: {
    paddingHorizontal: 10, paddingVertical: 4,
    borderRadius: Radius.full,
  },
  badgeText: { fontFamily: Fonts.bodySemiBold, fontSize: 12 },
})
