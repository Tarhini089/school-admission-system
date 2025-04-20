'use client';
import { useState } from 'react';

export default function AdminPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [visible, setVisible] = useState(true); // 👈 Add toggle state

  const statuses = {
    Approved: 'bg-green-100 text-green-800',
    Pending: 'bg-yellow-100 text-yellow-800',
    Rescheduled: 'bg-blue-100 text-blue-800',
    Rejected: 'bg-red-100 text-red-800',
    'Contract sent': 'bg-orange-100 text-orange-800',
    'Package Sent': 'bg-purple-100 text-purple-800',
    Void: 'bg-gray-100 text-gray-800',
    Submitted: 'bg-indigo-100 text-indigo-800',
    Enrolled: 'bg-teal-100 text-teal-800',
    Scheduled: 'bg-yellow-100 text-yellow-800',
  };

  const students = [{ id: 635146, sex: '♂', first: 'Ahmad', last: 'Yousaf', grade: 'Pre-k', school: 'Prev School A', status: 'Scheduled', update: '1 hr', note: 'Note' },
    { id: 635147, sex: '♀', first: 'Rose', last: 'Charara', grade: 'KG', school: 'Prev School B', status: 'Approved', update: '4 hrs', note: 'Note' },
    { id: 635148, sex: '♂', first: 'John', last: 'Doe', grade: '1st Grade', school: 'Prev School C', status: 'Pending', update: '2 hrs', note: 'Note' },
    { id: 635149, sex: '♀', first: 'Emma', last: 'Johnson', grade: '2nd Grade', school: 'Prev School D', status: 'Approved', update: '5 hrs', note: 'Note' },
    { id: 635150, sex: '♂', first: 'James', last: 'Smith', grade: '3rd Grade', school: 'Prev School E', status: 'Scheduled', update: '30 min', note: 'Note' },
    { id: 635151, sex: '♀', first: 'Sophia', last: 'Martinez', grade: 'Pre-k', school: 'Prev School F', status: 'Rejected', update: '3 hrs', note: 'Note' },
    { id: 635152, sex: '♂', first: 'Lucas', last: 'Brown', grade: 'KG', school: 'Prev School G', status: 'Enrolled', update: '1 day', note: 'Note' },
    { id: 635153, sex: '♀', first: 'Olivia', last: 'Davis', grade: '1st Grade', school: 'Prev School H', status: 'Approved', update: '6 hrs', note: 'Note' },
    { id: 635154, sex: '♂', first: 'Liam', last: 'Miller', grade: '2nd Grade', school: 'Prev School I', status: 'Rescheduled', update: '10 min', note: 'Note' },
    { id: 635155, sex: '♀', first: 'Ava', last: 'Garcia', grade: '3rd Grade', school: 'Prev School J', status: 'Contract sent', update: '12 hrs', note: 'Note' },
    { id: 635156, sex: '♂', first: 'Ethan', last: 'Rodriguez', grade: '4th Grade', school: 'Prev School K', status: 'Package Sent', update: '2 days', note: 'Note' },
    { id: 635157, sex: '♀', first: 'Mia', last: 'Martinez', grade: '5th Grade', school: 'Prev School L', status: 'Submitted', update: '5 days', note: 'Note' },
    { id: 635158, sex: '♂', first: 'Alexander', last: 'Hernandez', grade: '1st Grade', school: 'Prev School M', status: 'Approved', update: '2 days', note: 'Note' },
    { id: 635159, sex: '♂', first: 'Noah', last: 'Taylor', grade: 'KG', school: 'Prev School N', status: 'Pending', update: '1 hr', note: 'Note' },
    { id: 635160, sex: '♀', first: 'Isabella', last: 'Anderson', grade: '2nd Grade', school: 'Prev School O', status: 'Approved', update: '2 hrs', note: 'Note' },
    { id: 635161, sex: '♂', first: 'Benjamin', last: 'Thomas', grade: '3rd Grade', school: 'Prev School P', status: 'Rejected', update: '5 min', note: 'Note' },
    { id: 635162, sex: '♀', first: 'Emily', last: 'Jackson', grade: '4th Grade', school: 'Prev School Q', status: 'Scheduled', update: '30 min', note: 'Note' },
    { id: 635163, sex: '♂', first: 'Elijah', last: 'White', grade: '5th Grade', school: 'Prev School R', status: 'Package Sent', update: '3 hrs', note: 'Note' },
    { id: 635164, sex: '♀', first: 'Charlotte', last: 'Harris', grade: 'Pre-k', school: 'Prev School S', status: 'Submitted', update: '1 day', note: 'Note' },
    { id: 635165, sex: '♂', first: 'William', last: 'Martin', grade: '1st Grade', school: 'Prev School T', status: 'Approved', update: '6 hrs', note: 'Note' },
    { id: 635166, sex: '♀', first: 'Amelia', last: 'Thompson', grade: 'KG', school: 'Prev School U', status: 'Void', update: '4 hrs', note: 'Note' },
    { id: 635167, sex: '♂', first: 'Logan', last: 'Garcia', grade: '2nd Grade', school: 'Prev School V', status: 'Pending', update: '12 hrs', note: 'Note' },
    { id: 635168, sex: '♀', first: 'Evelyn', last: 'Martinez', grade: '3rd Grade', school: 'Prev School W', status: 'Contract sent', update: '2 days', note: 'Note' },
    { id: 635169, sex: '♂', first: 'Jacob', last: 'Robinson', grade: '4th Grade', school: 'Prev School X', status: 'Rescheduled', update: '10 hrs', note: 'Note' },
    { id: 635170, sex: '♀', first: 'Harper', last: 'Clark', grade: '5th Grade', school: 'Prev School Y', status: 'Enrolled', update: '8 hrs', note: 'Note' },
    { id: 635171, sex: '♂', first: 'Henry', last: 'Rodriguez', grade: 'Pre-k', school: 'Prev School Z', status: 'Approved', update: '4 days', note: 'Note' },
    { id: 635172, sex: '♀', first: 'Abigail', last: 'Lewis', grade: '1st Grade', school: 'Prev School AA', status: 'Rejected', update: '2 days', note: 'Note' },
    { id: 635173, sex: '♂', first: 'Sebastian', last: 'Lee', grade: 'KG', school: 'Prev School AB', status: 'Scheduled', update: '1 day', note: 'Note' },
    { id: 635174, sex: '♀', first: 'Ella', last: 'Walker', grade: '2nd Grade', school: 'Prev School AC', status: 'Contract sent', update: '6 hrs', note: 'Note' },
    { id: 635175, sex: '♂', first: 'Daniel', last: 'Hall', grade: '3rd Grade', school: 'Prev School AD', status: 'Submitted', update: '3 hrs', note: 'Note' },
    { id: 635176, sex: '♀', first: 'Sofia', last: 'Allen', grade: '4th Grade', school: 'Prev School AE', status: 'Pending', update: '9 hrs', note: 'Note' },
    { id: 635177, sex: '♂', first: 'Matthew', last: 'Young', grade: '5th Grade', school: 'Prev School AF', status: 'Approved', update: '11 hrs', note: 'Note' },
    { id: 635178, sex: '♀', first: 'Aria', last: 'King', grade: 'Pre-k', school: 'Prev School AG', status: 'Enrolled', update: '5 hrs', note: 'Note' },
    { id: 635179, sex: '♂', first: 'David', last: 'Wright', grade: '1st Grade', school: 'Prev School AH', status: 'Void', update: '7 hrs', note: 'Note' },
    { id: 635180, sex: '♀', first: 'Grace', last: 'Scott', grade: 'KG', school: 'Prev School AI', status: 'Rescheduled', update: '1 hr', note: 'Note' },
    { id: 635181, sex: '♂', first: 'Joseph', last: 'Torres', grade: '2nd Grade', school: 'Prev School AJ', status: 'Package Sent', update: '4 hrs', note: 'Note' },
    { id: 635182, sex: '♀', first: 'Chloe', last: 'Nguyen', grade: '3rd Grade', school: 'Prev School AK', status: 'Submitted', update: '8 hrs', note: 'Note' },
    { id: 635183, sex: '♂', first: 'Samuel', last: 'Hill', grade: '4th Grade', school: 'Prev School AL', status: 'Approved', update: '1 day', note: 'Note' },
    { id: 635184, sex: '♀', first: 'Lily', last: 'Flores', grade: '5th Grade', school: 'Prev School AM', status: 'Pending', update: '12 hrs', note: 'Note' },
    { id: 635185, sex: '♂', first: 'Anthony', last: 'Green', grade: 'Pre-k', school: 'Prev School AN', status: 'Contract sent', update: '3 days', note: 'Note' },
    { id: 635186, sex: '♀', first: 'Zoey', last: 'Adams', grade: '1st Grade', school: 'Prev School AO', status: 'Rejected', update: '2 hrs', note: 'Note' },
    { id: 635187, sex: '♂', first: 'Christopher', last: 'Nelson', grade: 'KG', school: 'Prev School AP', status: 'Scheduled', update: '6 hrs', note: 'Note' },
    { id: 635188, sex: '♀', first: 'Nora', last: 'Baker', grade: '2nd Grade', school: 'Prev School AQ', status: 'Enrolled', update: '1 hr', note: 'Note' },
    { id: 635189, sex: '♂', first: 'Andrew', last: 'Rivera', grade: '3rd Grade', school: 'Prev School AR', status: 'Void', update: '30 min', note: 'Note' },
    { id: 635190, sex: '♀', first: 'Hannah', last: 'Campbell', grade: '4th Grade', school: 'Prev School AS', status: 'Submitted', update: '7 hrs', note: 'Note' },
    { id: 635191, sex: '♂', first: 'Joshua', last: 'Mitchell', grade: '5th Grade', school: 'Prev School AT', status: 'Approved', update: '9 hrs', note: 'Note' },
    { id: 635192, sex: '♀', first: 'Scarlett', last: 'Perez', grade: 'Pre-k', school: 'Prev School AU', status: 'Contract sent', update: '11 hrs', note: 'Note' },
    { id: 635193, sex: '♂', first: 'Isaac', last: 'Roberts', grade: '1st Grade', school: 'Prev School AV', status: 'Pending', update: '4 hrs', note: 'Note' },
    { id: 635194, sex: '♀', first: 'Victoria', last: 'Turner', grade: 'KG', school: 'Prev School AW', status: 'Package Sent', update: '1 day', note: 'Note' },
    { id: 635195, sex: '♂', first: 'Owen', last: 'Phillips', grade: '2nd Grade', school: 'Prev School AX', status: 'Rescheduled', update: '2 hrs', note: 'Note' },
    { id: 635196, sex: '♀', first: 'Ella', last: 'Campbell', grade: '3rd Grade', school: 'Prev School AY', status: 'Rejected', update: '3 hrs', note: 'Note' },
    { id: 635197, sex: '♂', first: 'Wyatt', last: 'Parker', grade: '4th Grade', school: 'Prev School AZ', status: 'Scheduled', update: '10 hrs', note: 'Note' },
    { id: 635198, sex: '♀', first: 'Layla', last: 'Evans', grade: '5th Grade', school: 'Prev School BA', status: 'Approved', update: '6 hrs', note: 'Note' },
];

  const filteredStudents = students.filter((s) => {
    const search = searchTerm.toLowerCase();
    return (
      s.first.toLowerCase().includes(search) ||
      s.last.toLowerCase().includes(search) ||
      s.grade.toLowerCase().includes(search) ||
      s.school.toLowerCase().includes(search) ||
      s.status.toLowerCase().includes(search) ||
      String(s.id).includes(search)
    );
  });

  const totalPages = Math.ceil(filteredStudents.length / rowsPerPage);
  const paginatedStudents = filteredStudents.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div>
      {/* Top Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold">Admission Flow <span className="text-orange-500">TRACK: 2025-26</span></h1>
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-4 border-b">
        <button className="py-2 px-4 border-b-2 border-blue-600 text-blue-600 font-medium">New applicants</button>
        <button className="py-2 px-4 text-gray-600 hover:text-blue-600">Returning families</button>
      </div>

      {/* Search + Toggle */}
      <div className="flex justify-between items-center mb-4">
        <p className="text-sm font-medium">
          All students <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs ml-2">Total: {filteredStudents.length}</span>
        </p>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="border rounded-lg px-3 py-1 w-60"
          />
          {/* 👇 Toggle Button */}
          <button
            onClick={() => setVisible((prev) => !prev)}
            className="bg-white border px-4 py-2 rounded-lg"
          >
            {visible ? 'Hide Table' : 'Show Table'}
          </button>
        </div>
      </div>

      {/* 👇 Conditional render of table and pagination */}
      {visible && (
        <div className="overflow-auto rounded-lg border">
          <table className="min-w-full text-sm">
            <thead className="bg-blue-600 text-white font-semibold">
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
              {paginatedStudents.map((s, i) => (
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

          {/* Pagination controls */}
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">View</span>
              <select
                value={rowsPerPage}
                onChange={(e) => {
                  setRowsPerPage(parseInt(e.target.value));
                  setCurrentPage(1);
                }}
                className="border rounded px-2 py-1 text-sm"
              >
                {[5, 10, 15, 20].map((num) => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
              <span className="text-sm">Per page</span>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="border px-3 py-1 rounded disabled:opacity-50"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                <button
                  key={num}
                  onClick={() => setCurrentPage(num)}
                  className={`px-3 py-1 rounded ${num === currentPage ? 'bg-blue-600 text-white' : 'border'}`}
                >
                  {num}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="border px-3 py-1 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}