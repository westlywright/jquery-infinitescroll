# jQuery Infinite Scroll

A lightweight (**1kb**) jQuery plugin that provides a basic mechanism for triggering more results to be loaded when the bottom of the page is reached. It's simple and designed not to get in the way. In addition to working on all major browsers, it supports [iScroll](https://github.com/cubiq/iscroll) (for scrolling content on iOS devices).

## Usage

```javascript
$('#results').infiniteScroll({
	threshold: 800,
	onEnd: function() {
		console.log('No more results!');
	},
	onBottom: function(callback) {
		console.log('At the end of the page. Loading more!');
		
		// (load results & update views)
		var moreResults = true;
		
		callback(moreResults);
	}
});
```

### Using with iScroll

It's *super* easy, just set the `iScroll` option to the iScroll instance.

```javascript
var scroller = new iScroll('results', {
	desktopCompatibility: true,
	hScrollbar: false,
	vScrollbar: false,
	snap: 'li',
	momentum: false
});

$('#results').infiniteScroll({
	iScroll: scroller,
	onBottom: function(callback) {
		console.log('At the end of the page. Loading more!');
		callback();
	}
});
```

For more information on iScroll implementation, check out the [documentation](http://cubiq.org/iscroll-4).

### Options

<table>
	<tr>
		<th>Option</th>
		<th>Type</th>
		<th>Default</th>
		<th>Description</th>
	</tr>
	<tr>
		<td valign="top">threshold</td>
		<td valign="top">int</td>
		<td valign="top">500</td>
		<td valign="top">When the user scrolls to this many pixels from the bottom, `loadMore` is called.</td>
	</tr>
	<tr>
		<td valign="top">onEnd</td>
		<td valign="top">function()</td>
		<td valign="top">null</td>
		<td valign="top">Invoked when no more results are available (i.e. when <code>false</code> is passed to the callback provided to the <code>onBottom</code> method).</td>
	</tr>
	<tr>
		<td valign="top">onBottom</td>
		<td valign="top">function(callback)</td>
		<td valign="top">null</td>
		<td valign="top"><strong>(required)</strong> Invoked when the user reaches the end of the page. When you're done loading more results / updating views, invoke callback() with one argument: a bool representing whether there are more results available. If no arguments are provided, the plugin assumes there are more results.</td>
	</tr>
	<tr>
		<td valign="top">iScroll</td>
		<td valign="top">instance</td>
		<td valign="top">null</td>
		<td valign="top">An iScroll instance that you wish to add infinite scrolling to.</td>
	</tr>
</table>

### Reset

If you need to reset the infinite scrolling mechanism (like if the user switches search criteria, section, whatever), simply call `$('#results').infiniteScroll('reset');`.