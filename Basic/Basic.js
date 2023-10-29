const input1=document.querySelector('.inp1');
const input2=document.querySelector('.inp2');
const addBtn=document.querySelector('.add');
let output1,output2;
if (addBtn) {
    addBtn.addEventListener('click', () => {
      output1 = input1.value;
      output2 = input2.value;
      alert("You Must write Something"+output2,output1);
      console.log(output1 +" "+ output2);
    });
  } else {
    console.error('Button not found.');
  }
  console.log(output1 +" "+ output2);
  