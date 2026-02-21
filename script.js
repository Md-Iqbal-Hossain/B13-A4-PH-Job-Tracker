let interviewList = [];
let rejectedList = [];

let total = document.getElementById("total");
let interviewCount = document.getElementById("interviewCount");
let rejectedCount =  document.getElementById("rejectedCount");
let jobs = document.getElementById('jobs');

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');

const allCardSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main');

function calculateCount(){
    total.innerText = allCardSection.children.length;
    jobs.innerText = allCardSection.children.length;

    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;

}
calculateCount();

function toggleStyle(id){

    //if any button has blue bg then remove
    allFilterBtn.classList.remove('bg-blue-700', 'text-white');
    interviewFilterBtn.classList.remove('bg-blue-700', 'text-white');
    rejectedFilterBtn.classList.remove('bg-blue-700', 'text-white');

    //adding white bg for all
    allFilterBtn.classList.add('bg-white', 'text-gray-600');
    interviewFilterBtn.classList.add('bg-white', 'text-gray-600');
    rejectedFilterBtn.classList.add('bg-white', 'text-gray-600');

    const selected = document.getElementById(id);

    //adding blue bg for current button
    selected.classList.remove('bg-white', 'text-gray-600');
    selected .classList.add('bg-blue-700', 'text-white');
    
}