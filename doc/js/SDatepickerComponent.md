# SDatepickerComponent  extends SWebComponent
Provide a nice and powerful datepicker component around the nice flatpickr plugin.
Features:
- Fully featured datepicker (thanks to flatpick)
- Ability to display inline as well as on field focus
- Timepicker support
- And more...

#### Example
```html
	<input name="my-cool-date" class="form-input" />
<s-datepicker for="my-cool-date"></s-datepicker>
```
Flatpickr documentation : [https://github.com/chmln/flatpickr/tree/v2.3.3](https://github.com/chmln/flatpickr/tree/v2.3.3)

Author : Olivier Bossel <olivier.bossel@gmail.com>



## Examples

Here's some usage examples.

### Datepicker

Provide a way to display a nice datepicker

#### Example
```html
	<div style="height:28em">
	<input name="my-cool-date" class="form-input" />
 <s-datepicker for="my-cool-date"></s-datepicker>
</div>
```
See more : [https://github.com/Coffeekraken/s-datepicker-component](https://github.com/Coffeekraken/s-datepicker-component)

Author : Olivier Bossel <olivier.bossel@gmail.com>


### Datepicker inline

Provide a way to display a nice datepicker

#### Example
```html
	<div style="height:28em">
	<input name="my-cool-date" class="visually-hidden" />
 <s-datepicker for="my-cool-date" inline></s-datepicker>
</div>
```
Author : Olivier Bossel <olivier.bossel@gmail.com>


### Datepicker with time

Provide a way to display a nice datepicker

#### Example
```html
	<div style="height:32em">
	<input name="my-cool-date" class="form-input" />
 <s-datepicker for="my-cool-date" date-format="Y-m-d H:i" enable-time></s-datepicker>
</div>
```
Author : Olivier Bossel <olivier.bossel@gmail.com>


## Attributes

Here's the list of available attribute to set on the element.

### for

Specify the name or id of the field to link the datepicker to

Type : **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**


### inline

Displays the calendar inline

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**


### color

Specify the color to use to skin the datepicker.

Type : **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**


### allowInput

Allows the user to enter a date directly input the input field. By default, direct entry is disabled.

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**


### clickOpens

Clicking on the input opens the date (time) picker. Disable this if you wish to open the calendar manually with `.open()`

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**


### dateFormat

A string of characters which are used to define how the date will be displayed in the input box. The supported characters are defined in the table below.

Type : **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**


### defaultDate

Set the initial selected date. Same as preloading a date string into an input's value attribute, but can also handle a Date object.

Type : **{ [Date](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date) , [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**


### disable

Disable some dates

See more : [https://chmln.github.io/flatpickr/#disable](https://chmln.github.io/flatpickr/#disable)

Type : **{ [Array](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array) }**


### disabled

Specify if the datepicker is disabled or not

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**


### enable

Disable all dates except the ones you specify.

See more : [https://chmln.github.io/flatpickr/#enable](https://chmln.github.io/flatpickr/#enable)

Type : **{ [Array](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array) }**


### enableTime

Enables time picker

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**


### enableSeconds

Enables seconds in the time picker.

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**


### hourIncrement

Adjusts the step for the hour input (incl. scrolling)

Type : **{ Integer }**


### minuteIncrement

Adjusts the step for the minute input (incl. scrolling)

Type : **{ Integer }**


### maxDate

The maximum date that a user can pick to.

Type : **{ [Date](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date) , [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**


### minDate

The minimum date that a user can start picking from

Type : **{ [Date](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date) , [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**


### noCalendar

Hides the calendar. For use along with enableTime.

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**


### onChange

Function(s) to trigger on every date selection

See more : [https://chmln.github.io/flatpickr/#eventsAPI](https://chmln.github.io/flatpickr/#eventsAPI)

Type : **{ [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**


### onClose

Function(s) to trigger on every time the calendar is closed

See more : [https://chmln.github.io/flatpickr/#eventsAPI](https://chmln.github.io/flatpickr/#eventsAPI)

Type : **{ [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**


### onOpen

Function(s) to trigger on every time the calendar is opened

See more : [https://chmln.github.io/flatpickr/#eventsAPI](https://chmln.github.io/flatpickr/#eventsAPI)

Type : **{ [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**


### onReady

Function to trigger when the calendar is ready

See more : [https://chmln.github.io/flatpickr/#eventsAPI](https://chmln.github.io/flatpickr/#eventsAPI)

Type : **{ [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**


### parseDate

Function that expects a date string and must return a Date object

Type : **{ [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**


### shorthandCurrentMonth

Show the month using the shorthand version (ie, Sep instead of September).

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**


### time24hr

Displays time picker in 24 hour mode without AM/PM selection when enabled.

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**


### utc

When true, dates will parsed, formatted, and displayed in UTC. It's recommended that date strings contain the timezone, but not necessary

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**


### weekNumbers

Enables display of week numbers in calendar

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**


### wrap

flatpickr can parse an input group of textboxes and buttons, common in Bootstrap and other frameworks.

See more : [https://chmln.github.io/flatpickr/#strap](https://chmln.github.io/flatpickr/#strap)

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**