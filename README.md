# jQuery Infinite Scroll

A lightweight (**0.8kb**) jQuery plugin that provides a basic mechanism for triggering more results to be loaded when the bottom of the page is reached. It's simple and designed not to get in the way.

See it in action! — ["Explore" on DIY](https://diy.org/explore).

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
		<td valign="top"><code>int</code></td>
		<td valign="top"><code>500</code></td>
		<td valign="top">When the user scrolls to this many pixels from the bottom, <code>loadMore</code> is called.</td>
	</tr>
	<tr>
		<td valign="top">onEnd</td>
		<td valign="top"><code>function()</code></td>
		<td valign="top"><code>null</code></td>
		<td valign="top">Invoked when no more results are available (i.e. when <code>false</code> is passed to the callback provided to the <code>onBottom</code> method).</td>
	</tr>
	<tr>
		<td valign="top">onBottom</td>
		<td valign="top"><code>function(callback)</code></td>
		<td valign="top"><code>null</code></td>
		<td valign="top"><strong>(required)</strong> Invoked when the user reaches the end of the page. When you're done loading more results / updating views, invoke <code>callback()</code> with one argument: a bool representing whether there are more results available. If no argument is provided, the plugin assumes there are more results.</td>
	</tr>
</table>

### Reset

If you need to reset the infinite scrolling mechanism (like if the user switches search criteria, section, whatever), simply call:

```javascript
$('#results').infiniteScroll('reset');
```

## License

Copyright (c) 2010 DIY Co

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.