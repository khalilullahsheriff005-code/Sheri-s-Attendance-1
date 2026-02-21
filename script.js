

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
"MOHAMED ABUBAKAR SIDHIK M",
"MOHAMMED REHAF A","MOHAMMEDH RASIN S",
"MOHANKUMAR S","MUBASEER AHAMED M",
"MUGESH SETHUPATHY D","MUNEESWARAN S",
"MURUGANANDHAM M R"
];

let studentList = document.getElementById("studentList");

students.forEach(function(name, index) {
    studentList.innerHTML += 
    `<div class="studentRow" id="row${index}">
        <span>${name}</span>
        <label><input type="radio" name="student${index}" value="Present"> Present</label>
        <label><input type="radio" name="student${index}" value="Absent"> Absent</label>
        <label><input type="radio" name="student${index}" value="On Duty"> On Duty</label>
    </div>`;
});

function calculateAttendance() {

    let present = 0;
    let absent = 0;
    let onDuty = 0;
    let attendanceData = [];

    students.forEach(function(name, index) {

        let selected = document.querySelector(`input[name="student${index}"]:checked`);
        let status = selected ? selected.value : "Not Marked";

        let row = document.getElementById("row" + index);

        if(status === "Present"){
            present++;
            row.style.backgroundColor = "#d4edda";
        }
        else if(status === "Absent"){
            absent++;
            row.style.backgroundColor = "#f8d7da";
        }
        else if(status === "On Duty"){
            onDuty++;
            row.style.backgroundColor = "#fff3cd";
        }
        else{
            row.style.backgroundColor = "";
        }

        attendanceData.push({name:name,status:status});
    });

    let total = students.length;

    let resultText =
    `Total: ${total} | Present: ${present} | Absent: ${absent} | On Duty: ${onDuty}`;

    document.getElementById("result").innerHTML = resultText;

    localStorage.setItem("attendanceFullData", JSON.stringify(attendanceData));
}

function searchStudent() {
    let input = document.getElementById("search").value.toUpperCase();
    let rows = document.querySelectorAll(".studentRow");

    rows.forEach(function(row) {
        if (row.innerText.toUpperCase().includes(input)) {
            row.style.display = "block";
        } else {
            row.style.display = "none";
        }
    });
}

function shareAttendance() {

    let data = localStorage.getItem("attendanceFullData");

    if(!data){
        alert("No attendance data to share!");
        return;
    }

    let text = "Today's Attendance:\n\n";

    JSON.parse(data).forEach(function(item){
        text += item.name + " - " + item.status + "\n";
    });

    if(navigator.share){
        navigator.share({
            title: "Attendance Report",
            text: text
        });
    } else {
        alert("Sharing not supported in this device.");
    }
}

function changeTheme(){
    if(document.body.style.backgroundColor === "black"){
        document.body.style.backgroundColor = "#f2f2f2";
        document.body.style.color = "black";
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
}
