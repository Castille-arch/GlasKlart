import { useState } from 'react'
import { ScrollView, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors, Fonts, Radius } from '../../constants/theme'

export default function CalculateScreen() {
  const [width, setWidth]   = useState('')
  const [height, setHeight] = useState('')
  const [qty, setQty]       = useState('1')
  const [price, setPrice]   = useState('')

  const w = parseFloat(width) || 0
  const h = parseFloat(height) || 0
  const q = parseInt(qty) || 1
  const p = parseFloat(price) || 0

  const areaSingle = (w * h) / 1_000_000  // mm² → m²
  const areaTotal  = areaSingle * q
  const cost       = areaTotal * p

  return (
    <SafeAreaView style={s.safe}>
      <ScrollView contentContainerStyle={s.scroll} keyboardShouldPersistTaps="handled">
        <Text style={s.title}>Kalkylator</Text>
        <Text style={s.sub}>Beräkna yta och kostnad</Text>

        <View style={s.card}>
          <Text style={s.cardTitle}>Glasmått</Text>

          <View style={s.row}>
            <View style={s.field}>
              <Text style={s.label}>Bredd (mm)</Text>
              <TextInput
                style={s.input}
                keyboardType="numeric"
                placeholder="t.ex. 900"
                placeholderTextColor={Colors.textSubtle}
                value={width}
                onChangeText={setWidth}
              />
            </View>
            <View style={s.field}>
              <Text style={s.label}>Höjd (mm)</Text>
              <TextInput
                style={s.input}
                keyboardType="numeric"
                placeholder="t.ex. 1200"
                placeholderTextColor={Colors.textSubtle}
                value={height}
                onChangeText={setHeight}
              />
            </View>
          </View>

          <View style={s.row}>
            <View style={s.field}>
              <Text style={s.label}>Antal</Text>
              <TextInput
                style={s.input}
                keyboardType="numeric"
                placeholder="1"
                placeholderTextColor={Colors.textSubtle}
                value={qty}
                onChangeText={setQty}
              />
            </View>
            <View style={s.field}>
              <Text style={s.label}>Pris per m² (kr)</Text>
              <TextInput
                style={s.input}
                keyboardType="numeric"
                placeholder="t.ex. 450"
                placeholderTextColor={Colors.textSubtle}
                value={price}
                onChangeText={setPrice}
              />
            </View>
          </View>
        </View>

        <View style={s.resultCard}>
          <Text style={s.resultTitle}>Resultat</Text>
          <View style={s.resultRow}>
            <Text style={s.resultLabel}>Yta per glas</Text>
            <Text style={s.resultValue}>{areaSingle.toFixed(3)} m²</Text>
          </View>
          <View style={s.divider} />
          <View style={s.resultRow}>
            <Text style={s.resultLabel}>Total yta ({q} st)</Text>
            <Text style={s.resultValue}>{areaTotal.toFixed(3)} m²</Text>
          </View>
          <View style={s.divider} />
          <View style={s.resultRow}>
            <Text style={s.resultLabel}>Beräknad kostnad</Text>
            <Text style={s.resultBig}>{cost > 0 ? `${Math.round(cost).toLocaleString('sv-SE')} kr` : '—'}</Text>
          </View>
        </View>

        <TouchableOpacity style={s.saveBtn} activeOpacity={0.85}>
          <Text style={s.saveBtnText}>Spara kalkyl</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

const s = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.bg },
  scroll: { padding: 20, paddingBottom: 48 },
  title: { fontFamily: Fonts.headingBold, fontSize: 26, color: Colors.slate, marginBottom: 4 },
  sub: { fontFamily: Fonts.body, fontSize: 14, color: Colors.mist, marginBottom: 24 },
  card: {
    backgroundColor: Colors.white, borderRadius: Radius.md, padding: 20,
    gap: 16, marginBottom: 16,
    shadowColor: Colors.slate, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 8, elevation: 2,
  },
  cardTitle: { fontFamily: Fonts.heading, fontSize: 15, color: Colors.slate },
  row: { flexDirection: 'row', gap: 12 },
  field: { flex: 1, gap: 6 },
  label: { fontFamily: Fonts.bodyMedium, fontSize: 12, color: Colors.mist },
  input: {
    backgroundColor: Colors.surface2, borderWidth: 1.5, borderColor: Colors.border,
    borderRadius: Radius.sm, paddingHorizontal: 12, paddingVertical: 11,
    fontFamily: Fonts.body, fontSize: 15, color: Colors.slate,
  },
  resultCard: {
    backgroundColor: Colors.slate, borderRadius: Radius.md, padding: 20,
    gap: 0, marginBottom: 20,
  },
  resultTitle: { fontFamily: Fonts.heading, fontSize: 13, color: Colors.mist, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 16 },
  resultRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10 },
  resultLabel: { fontFamily: Fonts.body, fontSize: 14, color: Colors.frost },
  resultValue: { fontFamily: 'Inter_500Medium', fontSize: 15, color: Colors.white },
  resultBig: { fontFamily: Fonts.headingBold, fontSize: 22, color: Colors.paneLight },
  divider: { height: 1, backgroundColor: 'rgba(255,255,255,0.06)' },
  saveBtn: {
    backgroundColor: Colors.pane, borderRadius: Radius.sm,
    paddingVertical: 14, alignItems: 'center',
  },
  saveBtnText: { fontFamily: Fonts.bodySemiBold, fontSize: 15, color: Colors.white },
})
