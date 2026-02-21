
document.getElementById("date").innerHTML = new Date().toDateString();

let students = [
"AARTHI V","ABDUL KHALIQ A","ABINAYA B","AJAYPRAKASH K","AKASH S",
"AL SAYAN HAMEED S","AMARDEEN P","AMIRTHAVARSHINI S",
"ANBU RAJA LINGAM K","ANUSUYA P","ARI PRAKASH T","ASHINA J",
"ASMA S","BEAULA ROSE T","DEEPIKA M","DHARANI B",
"DHARANIDHARAN M","DHARSINI J","GOKUL B","GOKUL V",
"GOKULAKRISHNAN M","GOWTHAM P","HAARUN RASIDSHA S",
"HARINI L","HARINI SRI R","IBTHIHA S","JANANI T",
"JENITA ARASI L","JESIMA BANU R","JEYA MEENA M",
"JOEL SOUNDARARAJ P","JUMANA HAZAN M","KALAIYARASI R",
"KALEESWARAN S","KALI RAJAN J","KALIRAJ M",
"KASTHURI KANI A","KAVIYA A","KAVIYA R",
"KAVIYADHARSHINI R","KAVYA S","KEERTHANA N A",
"KESAVAN SREE K","KHALILULLAH SHERIFF A",
"KOWSHICK K","LINGESWARI R","MADHU SELVA P",
"MOHAMED ASLAM N","MOHAMED HAROON M",
"MOHAMED JAZEER S","MOHAMED KAIF BAWA B",
"MOHAMED SUHAIL P","MOHAMED TAWFIQ",
"MOHAMED ABUBAKAR SIDHIK M","MOHAMMED REHAF A",
"MOHAMMEDH RASIN S","MOHANKUMAR S",
"MUBASEER AHAMED M","MUGESH SETHUPATHY D",
"MUNEESWARAN S","MURUGANANDHAM M R"
];

let colors = [
"#ff6b6b","#6bcB77","#4d96ff","#f06595",
"#845ef7","#ffa94d","#20c997","#fab005"
];

let studentList = document.getElementById("studentList");

students.forEach((name, index) => {

    let color = colors[index % colors.length];

    studentList.innerHTML += `
    <div class="student-card" style="background:${color}; color:white;">
        <span>${name}</span>
        <select id="status-${index}">
            <option value="Present">Present</option>
            <option value="Absent">Absent</option>
            <option value="On Duty">On Duty</option>
        </select>
    </div>
    `;
});

function saveAttendance() {

    let present = 0;
    let absent = 0;
    let onDuty = 0;
    let output = "";

    students.forEach((name, index) => {

        let status = document.getElementById(`status-${index}`).value;

        if(status === "Present") present++;
        else if(status === "Absent") absent++;
        else if(status === "On Duty") onDuty++;

        output += `${name} - ${status} <br>`;
    });

    document.getElementById("summary").innerHTML =
    `Total: ${students.length} | Present: ${present} | Absent: ${absent} | On Duty: ${onDuty}`;

    document.getElementById("savedData").innerHTML = output;

    localStorage.setItem("attendanceData", output);
}
