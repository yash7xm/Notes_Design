const scrollContainer = document.querySelector('.scroll-container');
let frontBox = document.querySelector('.front-box');
let prevBox = document.querySelector('.prev-box');
let nextBox = document.querySelector('.next-box');

const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');

function center(){
    scrollContainer.scrollLeft = (document.querySelector('.front-box').offsetLeft - scrollContainer.offsetWidth / 2) + (document.querySelector('.front-box').offsetWidth / 2);
}

window.addEventListener('load', () => {
    center();
    writeText();
})

prevBtn.addEventListener('click', () => {
    heha();
    const newPrev = document.createElement('div');
    newPrev.classList.add('prev-box');
    prevBox.insertAdjacentElement('beforebegin', newPrev);
    scrollContainer.scrollLeft -= scrollContainer.offsetWidth / 2;
    setTimeout(function() {
        nextBox.remove();
      }, 500);
      console.log('hi');
  prevBox.classList.remove('prev-box');
  prevBox.classList.add('front-box');
  frontBox.classList.remove('front-box');
  frontBox.classList.add('next-box');
  writeText();
  const nextElement = document.querySelector('.next-box .given-text');
  nextElement.remove();
});

nextBtn.addEventListener('click', () => {
    heha();
  const newNext = document.createElement('div');
  newNext.classList.add('next-box');
  nextBox.insertAdjacentElement('afterend', newNext);
  scrollContainer.scrollLeft += scrollContainer.offsetWidth / 2;
  setTimeout(function() {
      prevBox.remove();
    }, 500);
nextBox.classList.remove('next-box');
nextBox.classList.add('front-box');
frontBox.classList.remove('front-box');
frontBox.classList.add('prev-box');
writeText();
const prevElement = document.querySelector('.prev-box .given-text');
prevElement.remove();
});


function heha(){
  frontBox = document.querySelector('.front-box');
  prevBox = document.querySelector('.prev-box');
  nextBox = document.querySelector('.next-box');
}

function writeText(){
  heha();
  const text = document.createElement('p');
  text.classList.add('given-text');
  text.innerText = 'A stack is a fundamental data structure in programming that follows the Last-In-First-Out (LIFO) principle. It is a collection of elements that can be added and removed only from the top of the stack. In other words, the last element added to the stack is the first one to be removed.'+

  'Stacks are used in many programming applications, such as expression evaluation, function call management, and undo-redo operations. The basic operations on a stack are push, pop, and peek. The push operation adds an element to the top of the stack, the pop operation removes the topmost element from the stack, and the peek operation returns the topmost element without removing it.'+
  
  'One of the key benefits of using a stack is that it allows us to efficiently manage the memory of our programs. For example, when a function is called in a program, the variables and parameters of the function are pushed onto the stack. When the function completes, the variables and parameters are popped off the stack, freeing up memory for other parts of the program.'+
  
  'Another benefit of using a stack is that it allows us to easily implement undo-redo operations in our programs. By using a stack to store the history of user actions, we can easily undo the last action by popping it off the stack, or redo the last action by pushing it back onto the stack.'+
  
 'In conclusion, stacks are a simple and powerful data structure that follow the LIFO principle and allow us to efficiently manage memory and implement undo-redo operations in our programs. By using stacks, we can easily add and remove elements from the top of the stack, making programming tasks much more efficient and effective.'
  frontBox.appendChild(text);
}