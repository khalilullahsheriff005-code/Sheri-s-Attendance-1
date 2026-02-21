
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

let studentList = document.getElementById("studentList");

students.forEach((name, index) => {
    studentList.innerHTML += `
    <div class="student-card">
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

    let attendance = {};
    let present = 0;

    students.forEach((name, index) => {
        let status = document.getElementById(`status-${index}`).value;
        attendance[name] = status;
        if(status === "Present") present++;
    });

    localStorage.setItem("attendanceData", JSON.stringify(attendance));

    document.getElementById("result").innerHTML =
    `Attendance Saved! Present: ${present} / ${students.length}`;
}

function viewAttendance() {

    let data = JSON.parse(localStorage.getItem("attendanceData"));
    let output = "";

    if(!data){
        output = "No saved attendance found.";
    } else {
        for(let name in data){
            output += `${name} - ${data[name]} <br>`;
        }
    }

    document.getElementById("savedData").innerHTML = output;
}

function shareAttendance() {

    let data = JSON.parse(localStorage.getItem("attendanceData"));
    if(!data){
        alert("No attendance to share!");
        return;
    }

    let text = "Attendance Report\n\n";
    for(let name in data){
        text += `${name} - ${data[name]}\n`;
    }

    if(navigator.share){
        navigator.share({
            title: "Attendance Report",
            text: text
        });
    } else {
        alert("Sharing not supported in this device.");
    }
}
