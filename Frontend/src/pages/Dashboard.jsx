import { useAuth } from '../context/AuthContext';

const stats = [
  { label: 'Total Projects', value: '12', change: '+2 this week', icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z', color: 'from-blue-500 to-indigo-600' },
  { label: 'Tasks Done', value: '48', change: '+8 today', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', color: 'from-green-500 to-emerald-600' },
  { label: 'Team Members', value: '7', change: '1 pending invite', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z', color: 'from-purple-500 to-violet-600' },
  { label: 'Hours Logged', value: '134', change: '+6 this week', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', color: 'from-orange-500 to-pink-500' },
];

const recentActivity = [
  { user: 'Alice', action: 'completed task', target: 'Design homepage mockup', time: '2 min ago', avatar: 'A', color: 'bg-pink-500' },
  { user: 'Bob', action: 'commented on', target: 'API integration spec', time: '15 min ago', avatar: 'B', color: 'bg-blue-500' },
  { user: 'Carol', action: 'created project', target: 'Mobile App v2', time: '1 hr ago', avatar: 'C', color: 'bg-green-500' },
  { user: 'Dave', action: 'uploaded file to', target: 'Brand assets folder', time: '3 hr ago', avatar: 'D', color: 'bg-purple-500' },
  { user: 'Eve', action: 'closed issue in', target: 'Backend repo', time: 'Yesterday', avatar: 'E', color: 'bg-orange-500' },
];

const tasks = [
  { title: 'Update landing page copy', priority: 'High', status: 'In Progress', due: 'Today' },
  { title: 'Fix login redirect bug', priority: 'High', status: 'Todo', due: 'Today' },
  { title: 'Write unit tests for auth', priority: 'Medium', status: 'Todo', due: 'Tomorrow' },
  { title: 'Review pull request #42', priority: 'Low', status: 'Done', due: 'Done' },
  { title: 'Deploy staging environment', priority: 'Medium', status: 'In Progress', due: 'Fri' },
];

const priorityBadge = {
  High: 'bg-red-100 text-red-700',
  Medium: 'bg-yellow-100 text-yellow-700',
  Low: 'bg-green-100 text-green-700',
};

const statusBadge = {
  'In Progress': 'bg-blue-100 text-blue-700',
  Todo: 'bg-gray-100 text-gray-600',
  Done: 'bg-emerald-100 text-emerald-700',
};

export default function Dashboard() {
  const { user } = useAuth();
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 rounded-2xl p-6 mb-8 text-white shadow-xl">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-white/80 text-sm font-medium">{greeting} 👋</p>
              <h1 className="text-2xl font-bold mt-1">{user?.full_name}</h1>
              <p className="text-white/70 text-sm mt-1">{user?.email}</p>
            </div>
            <div className="hidden sm:flex items-center gap-3">
              <div className="bg-white/10 rounded-xl px-4 py-3 text-center">
                <p className="text-2xl font-bold">Wed</p>
                <p className="text-white/70 text-xs">Today</p>
              </div>
              <div className="bg-white/10 rounded-xl px-4 py-3 text-center">
                <p className="text-2xl font-bold">May</p>
                <p className="text-white/70 text-xs">2026</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow`}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                  </svg>
                </div>
              </div>
              <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
              <p className="text-sm font-medium text-gray-600 mt-0.5">{stat.label}</p>
              <p className="text-xs text-gray-400 mt-1">{stat.change}</p>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Tasks Table */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-gray-800">Recent Tasks</h2>
              <button className="text-sm text-indigo-600 font-medium hover:text-indigo-700">View all</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    <th className="px-6 py-3 text-left">Task</th>
                    <th className="px-6 py-3 text-left">Priority</th>
                    <th className="px-6 py-3 text-left">Status</th>
                    <th className="px-6 py-3 text-left">Due</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {tasks.map((task, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-3.5 text-sm text-gray-700 font-medium">{task.title}</td>
                      <td className="px-6 py-3.5">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${priorityBadge[task.priority]}`}>
                          {task.priority}
                        </span>
                      </td>
                      <td className="px-6 py-3.5">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusBadge[task.status]}`}>
                          {task.status}
                        </span>
                      </td>
                      <td className="px-6 py-3.5 text-sm text-gray-500">{task.due}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Activity Feed */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-gray-800">Activity</h2>
              <span className="text-xs bg-indigo-100 text-indigo-600 font-semibold px-2 py-1 rounded-full">Live</span>
            </div>
            <div className="p-4 space-y-4">
              {recentActivity.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-full ${item.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                    {item.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">{item.user}</span>{' '}
                      <span className="text-gray-500">{item.action}</span>{' '}
                      <span className="font-medium text-indigo-600 truncate">{item.target}</span>
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
