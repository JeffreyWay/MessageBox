# Message Box jQuery Plugin

Simple plugin for displaying custom message boxes to the user.

## Getting Started
Download the [production version][min] or the [development version][max], as well as the [associated stylesheet][style] and [images][imgs].

[min]: https://raw.github.com/JeffreyWay/MessageBox/master/dist/MessageBox.min.js
[max]: https://raw.github.com/JeffreyWay/MessageBox/master/dist/MessageBox.js
[style]: https://raw.github.com/JeffreyWay/MessageBox/master/css/message.css
[imgs]: https://github.com/JeffreyWay/MessageBox/tree/master/images

In your web page:

```html
<link rel="stylesheet" href="css/message.css">

<script src="jquery.js"></script>
<script src="MessageBox.min.js"></script>
<script>
$.message('The most basic usage.');
</script>
```

Or, to specify an icon and buttons:

```js
<script>
$.message(
	'Message box with settings.',
	{
		icon: 'setting',
		buttons: ['Yes', 'No', 'Cancel'],
		callback: function(buttonVal) {
			// buttonVal = Yes | No | Cancel
			// this = instance
		}
	}
);
</script>
```

### Icon Choices

- setting
- info
- notification
- alert
- accept

These are the built-in choices, however, you can specify any string as the value for `icon`. That value will then be applied to a new class: `message-box-VALUE_YOU_PROVIDED`. So, if you set `icon: mine`, a class of `message-box-mine` will be applied. You can then set a custom background image, accordingly. Refer to the icons directory in this repo for a variety of choices.g

### Button Options

Pass an array, where each item represents a button that should be displayed in the message box.



## Examples

#### Basic Usage
```js
$.message('Here is my first message box.');
```

![image](https://raw.github.com/JeffreyWay/MessageBox/master/docs/images/basic.jpeg)


#### With Icon
```js
$.message('Here is another message.', { icon: 'alert'});
```

![image](https://raw.github.com/JeffreyWay/MessageBox/master/docs/images/icon.jpeg)


#### Specifying Buttons
```js
$.message('Are you sure that you wish to proceed? If so, please click "Yes."', { icon: 'setting', buttons: ['Yes', 'No', 'Cancel']});
```

![image](https://raw.github.com/JeffreyWay/MessageBox/master/docs/images/settings.jpeg)


#### Adding a Callback
```js
$.message(
	'Are you sure?',
	{ 
		icon: 'setting',
		buttons: ['Yes', 'No'],
		callback: function(buttonVal) {
			if ( buttonVal === 'Yes' ) {
				$.message('You clicked Yes! Now you\'d proceed, accordingly.');
				console.log(buttonVal, this);
			}
		}
	}
);
```


## License
Copyright (c) 2012 Jeffrey Way  
Licensed under the GPL license.