const applyBtn = document.getElementById('apply-btn');
const resetBtn = document.getElementById('reset-btn');
const wallId = document.getElementById('wall-id');
const wallcolor = document.getElementById('wall-color');

function getIdFunc(){
 const blockWithId = document.getElementById(wallId.value);
  blockWithId.style.background = wallcolor.value;
}
applyBtn.addEventListener('click', getIdFunc)

function resetApply(){
    const blocks = document.querySelectorAll('.block');
    blocks.style.background = 'transparent'
}
resetBtn.addEventListener('click', resetApply);