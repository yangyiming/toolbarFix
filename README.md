# toolbarFix

you can fix the div in anywhere

## how to use?
toolbarfix depends on jQuery. Include them both in end of your HTML code:
<pre>
    <script type="text/javascript" src="../dist/jquery-1.9.1.min.js"></script>
    <script type="text/javascript" src="../dist/toolbarFix.min.js"></script>
</pre>
## html code:
<pre>
	<div id="sector" class="selctor" style="position:fixed">
		<a href=""></a>
		<a href=""></a>
		<a href=""></a>
		<a href=""></a>
	</div>
	<div class="section">111</div>
	<div class="section">222</div>
	<div class="section">333</div>
	<div class="section">444</div>
</pre>
## js init:
<pre>
$("#sector").fixed({
    position:444,//Offset value to the scroll bar to scroll to what position
    offset:50,//Initial an offset value relative to the top
    selector:"a",//The anchor
    section:".section",//Anchor point corresponding positioning module
    activeClass:"active" //active class
})
</pre>