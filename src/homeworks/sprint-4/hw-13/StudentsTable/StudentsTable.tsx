import { Student } from '../students-fake-api.ts'
import s from './StudentsTable.module.css'

export const StudentsTable = ({ students }: { students: Student[] }) => {
  if (students.length === 0) {
    return <p id="hw13-no-students">No students</p>
  }

  return (
    <table id="hw13-students-table" className={s.table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Registration Date</th>
          <th>Course</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.fullName}</td>
            <td>{student.registrationDate}</td>
            <td>{student.course}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
