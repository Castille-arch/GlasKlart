import { Tabs } from 'expo-router'
import { View, StyleSheet } from 'react-native'
import Svg, { Rect, Path, Circle, Line, Polygon } from 'react-native-svg'
import { Colors, Fonts } from '../../constants/theme'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.bar,
        tabBarActiveTintColor: Colors.pane,
        tabBarInactiveTintColor: Colors.mist,
        tabBarLabelStyle: styles.label,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Översikt',
          tabBarIcon: ({ color }) => <GridIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="jobs"
        options={{
          title: 'Jobb',
          tabBarIcon: ({ color }) => <BriefcaseIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="calculate"
        options={{
          title: 'Kalkyl',
          tabBarIcon: ({ color }) => <CalcIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profil',
          tabBarIcon: ({ color }) => <PersonIcon color={color} />,
        }}
      />
    </Tabs>
  )
}

function GridIcon({ color }: { color: string }) {
  return (
    <Svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <Rect x="3" y="3" width="7" height="7" />
      <Rect x="14" y="3" width="7" height="7" />
      <Rect x="3" y="14" width="7" height="7" />
      <Rect x="14" y="14" width="7" height="7" />
    </Svg>
  )
}

function BriefcaseIcon({ color }: { color: string }) {
  return (
    <Svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <Rect x="2" y="7" width="20" height="14" rx="2" />
      <Path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </Svg>
  )
}

function CalcIcon({ color }: { color: string }) {
  return (
    <Svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <Rect x="4" y="2" width="16" height="20" rx="2" />
      <Line x1="8" y1="6" x2="16" y2="6" />
      <Line x1="8" y1="10" x2="10" y2="10" />
      <Line x1="14" y1="10" x2="16" y2="10" />
      <Line x1="8" y1="14" x2="10" y2="14" />
      <Line x1="14" y1="14" x2="16" y2="14" />
      <Line x1="8" y1="18" x2="16" y2="18" />
    </Svg>
  )
}

function PersonIcon({ color }: { color: string }) {
  return (
    <Svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <Path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <Circle cx="12" cy="7" r="4" />
    </Svg>
  )
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: Colors.white,
    borderTopColor: Colors.border,
    borderTopWidth: 1,
    height: 80,
    paddingBottom: 16,
    paddingTop: 10,
    shadowColor: Colors.slate,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 8,
  },
  label: {
    fontFamily: 'Inter_500Medium',
    fontSize: 11,
  },
})
