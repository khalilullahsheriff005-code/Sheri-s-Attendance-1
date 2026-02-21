

document.getElementById("date").innerHTML = new Date().toDateString();


let students = [
"AARTHI V",
"ABDUL KHALIQ A",
"ABINAYA B",
"AJAYPRAKASH K",
"AKASH S",
"AL SAYAN HAMEED S",
"AMARDEEN P",
"AMIRTHAVARSHINI S",
"ANBU RAJA LINGAM K",
"ANUSUYA P",
"ARI PRAKASH T",
"ASHINA J",
"ASMA S",
"BEAULA ROSE T",
"DEEPIKA M",
"DHARANI B",
"DHARANIDHARAN M",
"DHARSINI J",
"GOKUL B",
"GOKUL V",
"GOKULAKRISHNAN M",
"GOWTHAM P",
"HAARUN RASIDSHA S",
"HARINI L",
"HARINI SRI R",
"IBTHIHA S",
"JANANI T",
"JENITA ARASI L",
"JESIMA BANU R",
"JEYA MEENA M",
"JOEL SOUNDARARAJ P",
"JUMANA HAZAN M",
"KALAIYARASI R",
"KALEESWARAN S",
"KALI RAJAN J",
"KALIRAJ M",
"KASTHURI KANI A",
"KAVIYA A",
"KAVIYA R",
"KAVIYADHARSHINI R",
"KAVYA S",
"KEERTHANA N A",
"KESAVAN SREE K",
"KHALILULLAH SHERIFF A",
"KOWSHICK K",
"LINGESWARI R",
"MADHU SELVA P",
"MOHAMED ASLAM N",
"MOHAMED HAROON M",
"MOHAMED JAZEER S",
"MOHAMED KAIF BAWA B",
"MOHAMED SUHAIL P",
"MOHAMED TAWFIQ",
"MOHAMED ABUBAKAR SIDHIK M",
"MOHAMMED REHAF A",
"MOHAMMEDH RASIN S",
"MOHANKUMAR S",
"MUBASEER AHAMED M",
"MUGESH SETHUPATHY D",
"MUNEESWARAN S",
"MURUGANANDHAM M R"
];


let studentList = document.getElementById("studentList");

students.forEach(function(name) {
    studentList.innerHTML += 
    `<label>
        <input type="checkbox" class="student">
        ${name}
    </label>`;
});


function searchStudent() {
    let input = document.getElementById("search").value.toUpperCase();
    let labels = document.querySelectorAll("#studentList label");

    labels.forEach(function(label) {
        if (label.innerText.toUpperCase().includes(input)) {
            label.style.display = "block";
        } else {
            label.style.display = "none";
        }
    });
}


function calculateAttendance() {
    let checkboxes = document.querySelectorAll(".student");
    let present = 0;

    checkboxes.forEach(function(box) {
        if(box.checked) {
            present++;
        }
    });

    let total = students.length;
    let absent = total - present;
    let percentage = ((present / total) * 100).toFixed(2);

    let resultText = 
    `Total: ${total} | Present: ${present} | Absent: ${absent} | Attendance: ${percentage}%`;

    document.getElementById("result").innerHTML = resultText;

    localStorage.setItem("attendanceData", resultText);
}


window.onload = function() {
    let savedData = localStorage.getItem("attendanceData");
    if(savedData) {
        document.getElementById("result").innerHTML = savedData;
    }
}