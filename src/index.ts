type StudentStatus = 'active' | 'inactive';

interface Student {
  id: number;
  name: string;
  email: string;
  status: StudentStatus;
}

interface ApiResponse<T> {
  success: boolean;
  data: T;
}

function formatStudent(student: Student): string {
  return `${student.id} - ${student.name} (${student.status})`;
}

function isStudent(value: unknown): value is Student {
  return (
    typeof value === 'object' &&
    value !== null &&
    'id' in value &&
    typeof value.id === 'number' &&
    'name' in value &&
    typeof value.name === 'string' &&
    'email' in value &&
    typeof value.email === 'string' &&
    'status' in value &&
    (value.status === 'active' || value.status === 'inactive')
  );
}

const sampleStudent: Student = {
  id: 1001,
  name: 'Alex Rivera',
  email: 'alex.rivera@example.edu',
  status: 'active',
};

const studentResponse: ApiResponse<Student> = {
  success: true,
  data: sampleStudent,
};

const studentListResponse: ApiResponse<Student[]> = {
  success: true,
  data: [sampleStudent],
};

const validationExamples: unknown[] = [
  sampleStudent,
  { ...sampleStudent, id: '1002' },
  { id: 1003, email: 'no.name@example.edu', status: 'inactive' },
];

console.log(formatStudent(studentResponse.data));
console.log(studentListResponse.data.map(formatStudent));

for (const value of validationExamples) {
  console.log(isStudent(value) ? formatStudent(value) : 'Invalid student data');
}
