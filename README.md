Answer the following questions clearly:
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer:
In DOM manipulation
The getElementById Returns a single element with that ID. That id must be unique.
The getElementsByClassName that Returns a live HTMLCollection of all elements with that class. Because class is not mandatory that they must main the unique ness they can be many class name same
The querySelector Returns the first element that matches a CSS selector in the html file the fist match property.
And the last one is querySelectorAll it returns a static NodeList of all elements matching the selector in the html file.

2. How do you create and insert a new element into the DOM?
Answer:

const ToCreateANewDiv = document.createElement('div'); // this line is for creating the div tag
ToCreateANewDiv.innerText = 'Hello i am shadman' 
ToCreateANewDiv.className = 'i am student in aiub  // those two we set the attributes
document.body.appendChild(ToCreateANewDiv);    //  by using this one we can add this two line inside the div tag

3. What is Event Bubbling and how does it work?
Answer:

Event Bubbling means when an event is triggered on a child element like we are searching something like a 'p' tag in 'div' the parent is the div tag and p is child tag, it first runs on that element means it first go to the p and then bubbles up to its parent of for my example it find the div, then to the grandparent if it had any, and lastly so on up to the document.

4. What is Event Delegation in JavaScript? Why is it useful?
Answer:

Event Delegation is basically a pattern to handle events efficiently. suppose we have various buttons and we need multiple event listener so instead of adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event on a particular target using the this '.target' property of the event object.And buy using it we can make our code more readable to other and can work more effectively.

5. What is the difference between preventDefault() and stopPropagation() methods?
Answer:

preventDefault() this is stops the default browser behavior. like in button it take as a submit from and sometime it take it's time to show the value and there is why we use that function to prevent that default browser behavior
and the another one is stopPropagation() which basically stops the event from reaching parent elements. this is mainly used to stop the bubbling so that it do not give other value 
When we click an element, the event first runs on that element, then bubbles up: child to parent to grandparent then the lastly document. When we call event.stopPropagation(), we are saying that run the event only on this element. Don’t let it bubble up to parents. we stop the bubbling


