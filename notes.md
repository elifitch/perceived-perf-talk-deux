TODOS:

Need to remove minimum viable layout thing from unsuck passive waiting time section?  Rendering minimum viable layout seems more like an objective performance thing; I'm also hurting for time soooooo.....?

In the react immediately section, the transition between 100ms stuff and 1000ms stuff (click event shit) needs to be smoothed over.

Is the animation/jank/100ms immediate shit off topic?

Structure 5/31:
* Intro
* why percieved perf matters
* How humans sense time (active vs passive)
* How to keep users active
	- don't show loaders
	- immediate response (removed animation)
	- respond quickly with mousedown/touchstart
	- use interstitial anims
* How to make passive waits seem to pass more quickly
	- Good loader animations (progress bars)
	- How to make a good fake progress bar
	- [[Hide long loading time with extraneous stuff]]
* Predictive design (short circuiting this process)
	- Houston story: consultants predicted that after getting off the plane, people go to pick up their bags, and loaded their 
	- We can predict user behavior too, you've probably done it before
	- 


Laura notes 6/4
* ✅50ms (active animation bonus) isn't perceived? But it can make a difference when added to the total time
* ✅change "give users certainty" to match the intro list heading
* ✅change don't overdo it slide
* ✅include mech turk study for explained progress bars
* fake progress bars real world examples (twitter)
* your talky on the fake progress bar slide blows
* ✅styling of code block.
* Is code block really the best way to present this information??
* admit that going from a slow connection to a faster connection can fuck things up
* ✅maybe don't inclue mass effect because people hate it
* find a silly game example
* ✅remove uber loading screen
* remove word "snowflake"
* make predictive form more like a chekcot flow
* ✅unfuck your 3d example
* demo of shitty wifi infinite scroll
* unfuck conclusion

Notes 6/12
* predictive design: really aggressive, data driven preloading
* maybe make some sort of note that "get people into content as fast as possible" is great for perceived perf, but is still an objective time oriented measure, so you're gonna skip it for now; lots of other folk have already talked about this
* taco slide
* transition from amazon to time demarkations
* transitions within immediacy section
* Immediacy section: keep talking about keeping users active; use the words
* change touchmove demo to have touchmove listener on whole page, not just button; use grabby hand
* put active animations buy more time before the touchmove thing
* add reset button to fake progress bars
* fake progress bar make demo of bad fake progress bars (fast and slow)
	- if its too slow you're going to sit there and stare at it until you lose your mind, and you're never going to visit it again; unless its twitter and you're addicted to it because it makes you feel bad
* re normalize for your users? does this make sense?
* viget loader study do one for interactive loaders? make shit up?
* checkout form: note there is complex javascript and imagers and stuff on the checkout page
* predictive design: react as soon as users signal intent; go back to this concept
* go thru conclusion again