const students = [
"AARTHI V","ABDUL KHALIQ A","ABINAYA B","AJAYPRAKASH K",
"AKASH S","AL SAYAN HAMEED S","AMARDEEN P","AMIRTHAVARSHINI S",
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

const colors = ["#ff6b6b","#6bcB77","#4d96ff","#ff9f1c","#c77dff","#00b4d8"];

function loadStudents() {
  const list = document.getElementById("studentList");

  students.forEach((name, index) => {
    const div = document.createElement("div");
    div.className = "student";
    div.style.backgroundColor = colors[index % colors.length];

    div.innerHTML = `
      ${name}<br>
      <label><input type="radio" name="${name}" value="PRESENT"> PRESENT</label>
      <label><input type="radio" name="${name}" value="ABSENT"> ABSENT</label>
      <label><input type="radio" name="${name}" value="ON DUTY"> ON DUTY</label>
    `;

    list.appendChild(div);
  });
}

function saveAttendance() {
  let present = 0;
  let absent = 0;
  let duty = 0;

  students.forEach(name => {
    const selected = document.querySelector(`input[name="${name}"]:checked`);
    if (selected) {
      if (selected.value === "PRESENT") present++;
      if (selected.value === "ABSENT") absent++;
      if (selected.value === "ON DUTY") duty++;
    }
  });

  document.getElementById("summary").innerText =
    "TOTAL PRESENT: " + present +
    " | TOTAL ABSENT: " + absent +
    " | TOTAL ON DUTY: " + duty;
}

window.onload = loadStudents;

