# SDatepickerComponent

Extends **SWebComponent**

Provide a nice and powerful datepicker component around the nice flatpickr plugin.
Features:
- Fully featured datepicker (thanks to flatpick)
- Ability to display inline as well as on field focus
- Timepicker support
- And more...

### Example
```html
	<input name="my-cool-date" class="form-input" />
<s-datepicker for="my-cool-date"></s-datepicker>
```
See : **Flatpickr documentation** : [https://flatpickr.js.org/options/](https://flatpickr.js.org/options/)

Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com)




## Attributes

Here's the list of available attribute(s).

### for

Specify the name or id of the field to link the datepicker to

Type : **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**

Default : **null**


### color

Specify the color to use to skin the datepicker.

Type : **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**

Default : **null**


### flatpickr

All the option that propose the flatpickr library.
You can find these options [here](https://flatpickr.js.org/options/).
This component uses the flatpickr v4.x

Type : **{ Mixed }**





## Events


### change

Dispatched on date change