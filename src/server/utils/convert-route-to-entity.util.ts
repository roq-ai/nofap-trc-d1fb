const mapping: Record<string, string> = {
  'day-planners': 'day_planner',
  'day-streaks': 'day_streak',
  inspirations: 'inspiration',
  quotes: 'quote',
  teams: 'team',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
