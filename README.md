# Halo Quiz

## Overview

This project was intended to showcase DOM manipulation, creation of new HTML elements, editing preexisting elements, setting and getting information from local storage, and navigating this information between pages.

The page is static until the user hits the start button. When the user clicks on the start button, a series of functions will trigger. The first, a timer that displays time remaining in seconds to users. The second, the first quiz question will appear with four clickable buttons. When the user clicks on a button one of two things will happen. Either the user was correct and the next question appears without any negative effect, or the user was incorrect, 10 seconds will be docked from the time, and the next question will appear. When either the time runs out or the quiz is completed, the timer will stop and the text area will now display a list of high scores pulled from local storage. If the quiz was completed before the time runs out, the user will be asked to input their initials. The initials along with their score, time remaining, will be push into local storage.

In the future, I hope to add images that apply to the questions, a more robust local storage/display of highscores on my webpage, A background that isn't a solid color, and add more style that I currently have.

## Acknowledgments 

I frequented w3schools DOM and localStorage articles frequently. 

## Images
![Example gif that shows how the quiz operates](assets/images/example.gif)