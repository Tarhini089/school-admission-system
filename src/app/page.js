'use client'

export default function AdminPage() {
  const statuses = {
    Approved: 'bg-green-100 text-green-800',
    Pending: 'bg-yellow-100 text-yellow-800',
    Rescheduled: 'bg-blue-100 text-blue-800',
    Rejected: 'bg-red-100 text-red-800',
    'Contract sent': 'bg-orange-100 text-orange-800',
    'Package Sent': 'bg-purple-100 text-purple-800',
    Void: 'bg-gray-100 text-gray-800',
    Submitted: 'bg-indigo-100 text-indigo-800',
    Enrolled: 'bg-teal-100 text-teal-800'
  };

  const students = [
    { id: 635146, sex: '♂', first: 'Ahmad', last: 'Yousaf', grade: 'Pre-k', school: 'Prev School A', status: 'Scheduled', update: '1 hr', note: 'Note' },
    { id: 635146, sex: '♀', first: 'Rose', last: 'Charara', grade: 'KG', school: 'Prev School B', status: 'Approved', update: '4 hrs', note: 'Note' },
    // Add more here
  ];

  return (
    <div>
      {/* Top Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-semibold">Admission Flow <span className="text-orange-500">TRACK: 2025-26</span></h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-white border px-4 py-2 rounded-lg">Show / Hide</button>
          <div className="w-10 h-10 rounded-full bg-gray-300"></div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-4 border-b">
        <button className="py-2 px-4 border-b-2 border-blue-600 text-blue-600 font-medium">New applicants</button>
        <button className="py-2 px-4 text-gray-600 hover:text-blue-600">Returning families</button>
      </div>

      {/* Search + total */}
      <div className="flex justify-between items-center mb-4">
        <p className="text-sm font-medium">All students <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs ml-2">Total: 100</span></p>
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-lg px-3 py-1 w-60"
        />
      </div>

      {/* Table */}
      <div className="overflow-auto rounded-lg border">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-gray-600 font-semibold">
            <tr>
              <th className="p-3 text-left">Student ID</th>
              <th className="p-3 text-left">Sex</th>
              <th className="p-3 text-left">First Name</th>
              <th className="p-3 text-left">Last Name</th>
              <th className="p-3 text-left">Grade level</th>
              <th className="p-3 text-left">Previous school</th>
              <th className="p-3 text-left">Phase</th>
              <th className="p-3 text-left">Last update</th>
              <th className="p-3 text-left">Notes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {students.map((s, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="p-3">{s.id}</td>
                <td className="p-3">{s.sex}</td>
                <td className="p-3">{s.first}</td>
                <td className="p-3">{s.last}</td>
                <td className="p-3">{s.grade}</td>
                <td className="p-3">{s.school}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statuses[s.status] || 'bg-gray-200 text-gray-700'}`}>
                    {s.status}
                  </span>
                </td>
                <td className="p-3">{s.update}</td>
                <td className="p-3">{s.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
 