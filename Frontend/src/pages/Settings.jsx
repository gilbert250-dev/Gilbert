export default function Settings() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Settings</h1>

        <div className="space-y-5">
          {/* Notifications */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="font-semibold text-gray-800 mb-4">Notifications</h2>
            <div className="space-y-3">
              {['Email notifications', 'Push notifications', 'Weekly digest'].map((item) => (
                <div key={item} className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">{item}</span>
                  <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-indigo-500 transition-colors focus:outline-none">
                    <span className="inline-block h-4 w-4 transform translate-x-6 rounded-full bg-white shadow transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Appearance */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="font-semibold text-gray-800 mb-4">Appearance</h2>
            <div className="flex gap-3">
              {['Light', 'Dark', 'System'].map((theme) => (
                <button
                  key={theme}
                  className={`flex-1 py-2.5 rounded-xl text-sm font-medium border transition-all ${
                    theme === 'Light'
                      ? 'bg-indigo-50 border-indigo-300 text-indigo-700'
                      : 'bg-gray-50 border-gray-200 text-gray-600 hover:border-gray-300'
                  }`}
                >
                  {theme}
                </button>
              ))}
            </div>
          </div>

          {/* Danger Zone */}
          <div className="bg-white rounded-2xl shadow-sm border border-red-100 p-6">
            <h2 className="font-semibold text-red-600 mb-2">Danger Zone</h2>
            <p className="text-sm text-gray-500 mb-4">Permanently delete your account and all associated data.</p>
            <button className="px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 text-sm font-semibold rounded-xl border border-red-200 transition-all">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
