import { useState } from 'react'
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Svg, { Path, Circle, Line } from 'react-native-svg'
import { Colors, Fonts, Radius } from '../../constants/theme'

const JOBS = [
  { id: 'JOB-081', customer: 'Karlsson Bygg AB', site: 'Storgatan 14, Göteborg', status: 'Pågående', panes: 24 },
  { id: 'JOB-080', customer: 'Eriksson Fastigheter', site: 'Lindgatan 3, Malmö', status: 'Offert', panes: 8 },
  { id: 'JOB-079', customer: 'Nordic Construct', site: 'Hamngatan 9, Stockholm', status: 'Avslutat', panes: 56 },
  { id: 'JOB-078', customer: 'Svensson & Son', site: 'Kyrkogatan 2, Uppsala', status: 'Avslutat', panes: 12 },
  { id: 'JOB-077', customer: 'Lindqvist Renovering', site: 'Parkgatan 7, Linköping', status: 'Pågående', panes: 18 },
]

const STATUS_COLORS: Record<string, string> = {
  'Pågående': Colors.pane,
  'Offert': Colors.copper,
  'Avslutat': Colors.paneDark,
}

const FILTERS = ['Alla', 'Pågående', 'Offert', 'Avslutat']

export default function JobsScreen() {
  const [filter, setFilter] = useState('Alla')
  const [search, setSearch] = useState('')

  const visible = JOBS.filter((j) => {
    const matchStatus = filter === 'Alla' || j.status === filter
    const matchSearch = search === '' ||
      j.customer.toLowerCase().includes(search.toLowerCase()) ||
      j.site.toLowerCase().includes(search.toLowerCase())
    return matchStatus && matchSearch
  })

  return (
    <SafeAreaView style={s.safe}>
      <View style={s.header}>
        <Text style={s.title}>Jobb</Text>
        <TouchableOpacity style={s.newBtn} activeOpacity={0.85}>
          <PlusIcon />
          <Text style={s.newBtnText}>Nytt</Text>
        </TouchableOpacity>
      </View>

      <View style={s.searchWrap}>
        <SearchIcon />
        <TextInput
          style={s.searchInput}
          placeholder="Sök jobb, kunder, adresser..."
          placeholderTextColor={Colors.textSubtle}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={s.filterScroll} contentContainerStyle={s.filters}>
        {FILTERS.map((f) => (
          <TouchableOpacity
            key={f}
            style={[s.filterChip, filter === f && s.filterActive]}
            onPress={() => setFilter(f)}
            activeOpacity={0.8}
          >
            <Text style={[s.filterText, filter === f && s.filterTextActive]}>{f}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView contentContainerStyle={s.list} showsVerticalScrollIndicator={false}>
        {visible.map((job) => (
          <TouchableOpacity key={job.id} style={s.card} activeOpacity={0.75}>
            <View style={s.cardTop}>
              <View style={s.cardLeft}>
                <Text style={s.cardId}>{job.id}</Text>
                <Text style={s.cardCustomer}>{job.customer}</Text>
                <Text style={s.cardSite}>{job.site}</Text>
              </View>
              <View style={[s.badge, { backgroundColor: STATUS_COLORS[job.status] + '18' }]}>
                <Text style={[s.badgeText, { color: STATUS_COLORS[job.status] }]}>{job.status}</Text>
              </View>
            </View>
            <View style={s.cardFooter}>
              <Text style={s.cardMeta}>{job.panes} glas</Text>
              <ChevronIcon />
            </View>
          </TouchableOpacity>
        ))}
        {visible.length === 0 && (
          <Text style={s.empty}>Inga jobb hittades.</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

function PlusIcon() {
  return <Svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2.5} strokeLinecap="round"><Path d="M12 5v14M5 12h14"/></Svg>
}
function SearchIcon() {
  return <Svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke={Colors.mist} strokeWidth={2} strokeLinecap="round"><Circle cx="11" cy="11" r="8"/><Line x1="21" y1="21" x2="16.65" y2="16.65"/></Svg>
}
function ChevronIcon() {
  return <Svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke={Colors.mist} strokeWidth={2} strokeLinecap="round"><Path d="M9 18l6-6-6-6"/></Svg>
}

const s = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.bg },
  header: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingHorizontal: 20, paddingTop: 20, paddingBottom: 16,
  },
  title: { fontFamily: Fonts.headingBold, fontSize: 26, color: Colors.slate },
  newBtn: {
    flexDirection: 'row', alignItems: 'center', gap: 6,
    backgroundColor: Colors.pane, borderRadius: Radius.sm,
    paddingHorizontal: 14, paddingVertical: 9,
  },
  newBtnText: { fontFamily: Fonts.bodySemiBold, fontSize: 13, color: Colors.white },
  searchWrap: {
    flexDirection: 'row', alignItems: 'center', gap: 8,
    backgroundColor: Colors.white, borderRadius: Radius.sm,
    borderWidth: 1, borderColor: Colors.border,
    marginHorizontal: 20, paddingHorizontal: 12, marginBottom: 12,
  },
  searchInput: { flex: 1, paddingVertical: 11, fontFamily: Fonts.body, fontSize: 14, color: Colors.slate },
  filterScroll: { marginBottom: 16 },
  filters: { paddingHorizontal: 20, gap: 8 },
  filterChip: {
    paddingHorizontal: 14, paddingVertical: 7,
    borderRadius: Radius.full, backgroundColor: Colors.white,
    borderWidth: 1, borderColor: Colors.border,
  },
  filterActive: { backgroundColor: 'rgba(31,138,158,0.1)', borderColor: Colors.pane },
  filterText: { fontFamily: Fonts.bodyMedium, fontSize: 13, color: Colors.mist },
  filterTextActive: { color: Colors.pane },
  list: { paddingHorizontal: 20, gap: 12, paddingBottom: 40 },
  card: {
    backgroundColor: Colors.white, borderRadius: Radius.md,
    padding: 16, gap: 12,
    shadowColor: Colors.slate, shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05, shadowRadius: 8, elevation: 2,
  },
  cardTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  cardLeft: { flex: 1, gap: 3 },
  cardId: { fontFamily: 'Inter_400Regular', fontSize: 11, color: Colors.mist },
  cardCustomer: { fontFamily: Fonts.bodySemiBold, fontSize: 15, color: Colors.slate },
  cardSite: { fontFamily: Fonts.body, fontSize: 13, color: Colors.mist },
  badge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: Radius.full },
  badgeText: { fontFamily: Fonts.bodySemiBold, fontSize: 12 },
  cardFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 8, borderTopWidth: 1, borderTopColor: Colors.border },
  cardMeta: { fontFamily: Fonts.body, fontSize: 13, color: Colors.mist },
  empty: { textAlign: 'center', color: Colors.mist, fontFamily: Fonts.body, fontSize: 14, paddingTop: 48 },
})
