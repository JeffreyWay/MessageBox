# Message Box jQuery Plugin

Simple plugin for displaying custom message boxes to the user.

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/JeffreyWay/MessageBox/master/dist/MessageBox.min.js
[max]: https://raw.github.com/JeffreyWay/MessageBox/master/dist/MessageBox.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="MessageBox.min.js"></script>
<script>
$.message('The most basic usage.');
</script>
```

Or, to specify an icon and buttons:

```
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

These are the built-in choices, however, you can specify any string as the value for `icon`. That value will then be applied to a new class: `message-box-VALUE_YOU_PROVIDED`. So, if you set `icon: mine`, a class of `message-box-mine` will be applied. You can then set a custom background image, accordingly. Refer to the icons directory in this repo for a variety of choices.

### Button Options

Pass an array, where each item represents a button that should be displayed in the message box.



## Examples

#### Basic Usage
```js
$.message('Here is my first message box.');
```

![image](https://www.evernote.com/shard/s14/sh/b114cd05-1039-4c3a-9b43-f982e92cb105/9441bf9cc6b78bf7538f905820a3af5a/res/9777f89c-84ee-4471-bb93-4d8969dd6d9d/index.html%23-20120828-170445.jpg.jpg)


#### With Icon
```js
$.message('Here is another message.', { icon: 'alert'});
```

![image](https://www.evernote.com/shard/s14/sh/1eedfaef-2d30-4d9e-9fe0-e8ee0b49e794/bb6bee0f1cd418d9b5a4c1a7c87023f7/res/e4cda164-096d-44d1-933a-bc75baee10f2/index.html%23-20120828-170545.jpg.jpg)


#### Specifying Buttons
```js
$.message('Are you sure that you wish to proceed? If so, please click "Yes."', { icon: 'setting', buttons: ['Yes', 'No', 'Cancel']});
```

![image](https://www.evernote.com/shard/s14/sh/84f50d8c-2a56-4337-b186-491c7b2ed7ea/3e7e7e35082d52a5b7223d5d118c6248/res/ac3895d4-1790-46f2-9775-de1f2b7ab682/index.html%23-20120828-170758.jpg.jpg)


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