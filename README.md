1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans. getElementById actually selects one element by its unique id. We can access that element using the id.

getElementsByClassName selects all elements with the same class. It gives an HTML collection of these elements.

querySelector selects the first element that matches a class, id, or tag.

querySelectorAll selects all elements with a class, id, or tag. It gives a NodeList of these elements.

2. How do you create and insert a new element into the DOM?

Ans. We create a new element using ‘createElement()’, add content using ‘innerText’ or ‘innerHTML’, and then insert it into the page using ‘appendChild()’. For example:

 const para = document.createElement("p");
 para.innerText = "Hello, I am Md.Iqbal Hossain.";
 document.body.appendChild(para);

So, with these three steps, we can create and insert a new item into the DOM.

3. What is Event Bubbling? And how does it work?

Ans. Actually, Event Bubbling is when an event starts on the target element and moves up through its parent elements in the DOM. 
It begins at the element where the event occurs and goes all the way to the top of the DOM tree. The event first triggers on the element where it occurs, then on each ancestor in the DOM tree. It continues bubbling up until it reaches the topmost element. The process can be stopped at any point using stopPropagation.
That is why Event Bubbling is useful for handling events on multiple child elements through a parent.


4. What is Event Delegation in JavaScript? Why is it useful?

Ans.Event Delegation is a technique where a parent element handles events for its child elements.

There are many advantages to using it. They are: 
First of all, it reduces the number of event listeners needed, improving performance. Moreover, it allows handling events for dynamically added elements without attaching new listeners. In addition, it makes code cleaner and easier to maintain by managing events in one place.


5. What is the difference between preventDefault() and stopPropagation() methods?

Ans.Basically, preventDefault() stops the browser's default action for an event, like following a link. It does not stop the event from reaching other elements.

stopPropagation() stops the event from bubbling up to parent elements in the DOM. This does not prevent the browser's default action.

Here, for example, suppose there is a link and clicking that link can use preventDefault() method to not navigate, and we can use stopPropagation() method to not trigger parent click events.
