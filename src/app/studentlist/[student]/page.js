"use client";

import { use } from "react";

export default function Student({ params }) {
    const { student } = use(params);

    console.log(student);

    return (
        <div>
            <h1>Student Details</h1>
            <h2>Student Name: {student}</h2>
        </div>
    );
}