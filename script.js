
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

const colors = ["#FF5733","#33FF57","#3357FF","#FF33A8","#FF8C33","#33FFF2"];

function loadStudents(){
  const list = document.getElementById("studentList");
  students.forEach((name,index)=>{
    const div = document.createElement("div");
    div.className="student";
    div.style.background = colors[index % colors.length];
    div.innerHTML = `
      <b>${name}</b><br>
      <label><input type="radio" name="${name}" value="Present"> Present</label>
      <label><input type="radio" name="${name}" value="Absent"> Absent</label>
      <label><input type="radio" name="${name}" value="On Duty"> On Duty</label>
    `;
    list.appendChild(div);
  });
}

function saveAttendance(){
  let attendance = {};
  let present=0, absent=0, duty=0;

  students.forEach(name=>{
    const selected = document.querySelector(`input[name="${name}"]:checked`);
    if(selected){
      attendance[name] = selected.value;
      if(selected.value=="Present") present++;
      if(selected.value=="Absent") absent++;
      if(selected.value=="On Duty") duty++;
    }
  });

  localStorage.setItem("attendance", JSON.stringify(attendance));

  document.getElementById("summary").innerText =
    `Present: ${present} | Absent: ${absent} | On Duty: ${duty}`;
}

function viewAttendance(){
  const data = JSON.parse(localStorage.getItem("attendance"));
  const savedDiv = document.getElementById("savedData");
  savedDiv.innerHTML="";

  if(data){
    for(let name in data){
      savedDiv.innerHTML += `<p>${name} - ${data[name]}</p>`;
    }
  }
}

function shareAttendance(){
  const data = localStorage.getItem("attendance");
  if(navigator.share){
    navigator.share({
      title: "Attendance",
      text: data
    });
  }else{
    alert("Sharing not supported in this browser");
  }
}

loadStudents();
