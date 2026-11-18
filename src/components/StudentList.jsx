import {initialStudents}  from '../initialStudents.js'
import { useState } from "react";

export const StudentList = () => {
    const [students, setStudents] = useState(initialStudents)

    const handleAddStudent=()=>{
        setStudents((prev) =>{
            const alreadyAdded = prev.some((student) => student.name === newStudent.name);

            if (alreadyAdded) {
                return prev;
            }

            return [...prev, newStudent];
        });
        const newStudent = {
            id: crypto.randomUUID(),
            name: "Sarah"
        };
    }
  

    
    
    return <div>

            {students.map((student) => (
                <p key={student.id}>
                    {student.name}
                </p>
            ))}
        <button onClick={handleAddStudent}> Добавить Sarah</button>
        </div>

}
