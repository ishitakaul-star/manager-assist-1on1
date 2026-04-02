export interface Employee {
  id: string;
  name: string;
  role: string;
  team: string;
  avatarInitials: string;
  managerId: string;
  startDate: string;
}

export interface JiraTicket {
  key: string;
  summary: string;
  status: 'To Do' | 'In Progress' | 'In Review' | 'Done' | 'Blocked';
  priority: 'Critical' | 'High' | 'Medium' | 'Low';
  type: 'Bug' | 'Feature' | 'Improvement' | 'Task';
  assigneeId: string;
  storyPoints: number;
  sprintName: string;
  updatedAt: string;
  dueDate: string | null;
  project: string;
}

export interface GitHubPR {
  title: string;
  repo: string;
  state: 'open' | 'merged' | 'closed';
  reviewStatus: 'approved' | 'changes_requested' | 'pending' | null;
  createdAt: string;
  linesAdded: number;
  linesRemoved: number;
  afterHours: boolean;
}

export interface GitHubActivity {
  employeeId: string;
  prsOpened: number;
  prsMerged: number;
  prsReviewed: number;
  commitsLast14Days: number;
  recentPRs: GitHubPR[];
}

export interface SnowIncident {
  id: string;
  number: string;
  shortDescription: string;
  priority: 1 | 2 | 3 | 4;
  state: 'New' | 'In Progress' | 'Resolved' | 'Closed';
  assignedToId: string;
  createdAt: string;
  resolvedAt: string | null;
  isMajor: boolean;
  slackChannel: string | null;
}

export interface PagerDutyData {
  employeeId: string;
  isOnCall: boolean;
  onCallSchedule: string | null;
  incidentsLast30Days: number;
  afterHoursPages: number;
  weekendPages: number;
  lastPagedAt: string | null;
}

export interface CalendarMeeting {
  id: string;
  employeeId: string;
  title: string;
  startTime: string;
  endTime: string;
  type: 'ceremonial' | 'tech_collab' | 'operational' | 'cross_functional' | 'knowledge_share' | 'manager_org' | 'other';
  durationMinutes: number;
}

export interface TimeDistribution {
  incidents: number;
  projectWork: number;
  codeReview: number;
  meetings: number;
  other: number;
}

export interface WinItem {
  text: string;
  source: 'Jira' | 'GitHub' | 'SNOW' | 'PagerDuty' | 'Calendar';
  date: string;
}

export interface RiskItem {
  text: string;
  severity: 'high' | 'medium' | 'low';
  source: string;
}

export interface OpenLoopItem {
  text: string;
  source: string;
  daysSinceLastUpdate: number;
}

export interface EmployeeInsights {
  employeeId: string;
  recentWins: WinItem[];
  risks: RiskItem[];
  openLoops: OpenLoopItem[];
  managerTalkingPoints: string[];
  employeeTalkingPoints: string[];
}

export interface AgendaItem {
  id: string;
  text: string;
  addedBy: 'manager' | 'employee' | 'system';
  completed: boolean;
  order: number;
  category?: 'wins' | 'workload' | 'risks' | 'invisible_work' | 'growth' | 'custom';
}

export type ViewMode = 'landing' | 'manager' | 'employee';

export interface InvisibleWorkPrompt {
  category: string;
  managerPrompt: string;
  employeePrompt: string;
}
