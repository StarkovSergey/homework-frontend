export type Student = {
  id: number
  fullName: string
  registrationDate: string
  course: 'Frontend' | 'Backend' | 'HTML/CSS' | 'DevClub' | 'DevOps' | 'Career Booster' | 'Fullstack'
}

// Не изменяйте этот массив! Эти данные будут использоваться для тестирования.
const students: Student[] = [
  { id: 20, fullName: 'Ella Scott', registrationDate: '2025-01-07', course: 'DevOps' },
  { id: 19, fullName: 'Lucas King', registrationDate: '2024-12-03', course: 'DevClub' },
  { id: 18, fullName: 'Amelia Young', registrationDate: '2024-12-01', course: 'Career Booster' },
  { id: 17, fullName: 'Elijah Allen', registrationDate: '2024-11-28', course: 'Backend' },
  { id: 16, fullName: 'Harper Hall', registrationDate: '2024-10-25', course: 'Frontend' },
  { id: 15, fullName: 'Alexander Walker', registrationDate: '2024-09-22', course: 'Career Booster' },
  { id: 14, fullName: 'Mia Robinson', registrationDate: '2024-09-18', course: 'Fullstack' },
  { id: 13, fullName: 'Ethan Lewis', registrationDate: '2024-09-15', course: 'HTML/CSS' },
  { id: 12, fullName: 'Ava Clark', registrationDate: '2024-02-12', course: 'Career Booster' },
  { id: 11, fullName: 'William Harris', registrationDate: '2024-03-08', course: 'Backend' },
  { id: 10, fullName: 'Charlotte White', registrationDate: '2024-03-05', course: 'Frontend' },
  { id: 9, fullName: 'Benjamin Taylor', registrationDate: '2024-03-03', course: 'DevOps' },
  { id: 8, fullName: 'Olivia Thomas', registrationDate: '2024-03-01', course: 'DevClub' },
  { id: 7, fullName: 'James Anderson', registrationDate: '2024-02-25', course: 'Backend' },
  { id: 6, fullName: 'Emma Martinez', registrationDate: '2023-02-22', course: 'Frontend' },
  { id: 5, fullName: 'Daniel Wilson', registrationDate: '2023-02-20', course: 'HTML/CSS' },
  { id: 4, fullName: 'Sophia Davis', registrationDate: '2023-02-15', course: 'Backend' },
  { id: 3, fullName: 'Michael Brown', registrationDate: '2022-02-10', course: 'Frontend' },
  { id: 2, fullName: 'Emily Johnson', registrationDate: '2022-02-05', course: 'Backend' },
  { id: 1, fullName: 'John Smith', registrationDate: '2021-02-01', course: 'Frontend' },
]

export const studentsApi = {
  getStudents({ startDate, endDate }: StudentFilterParams = {}) {
    return new Promise<Student[]>((resolve) => {
      setTimeout(() => {
        const filteredStudents = filterStudents(students, { startDate, endDate })

        resolve(filteredStudents)
      }, 500)
    })
  },
}

export type StudentFilterParams = {
  startDate?: Date | null
  endDate?: Date | null
}

const filterStudents = (students: Student[], { startDate, endDate }: StudentFilterParams) => {
  // Если не переданы даты, то возвращаем всех студентов

  if (!startDate && !endDate) {
    return students
  }

  return students.filter((student) => {
    const registrationDate = new Date(student.registrationDate)

    if (startDate && endDate) {
      return registrationDate >= startDate && registrationDate <= endDate
    }

    if (startDate) {
      return registrationDate >= startDate
    }

    if (endDate) {
      return registrationDate <= endDate
    }
  })
}
