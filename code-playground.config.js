module.exports = {
	// server port
	port : 3000,

	// title
	title : 's-datepicker-component',

	// layout
	layout : 'right',

	// compile server
	compileServer : {

		// compile server port
		port : 4000

	},

	// editors
	editors : {
		html : {
			language : 'html',
			data : `
				<div class="container">
					<h1 class="h1 m-b-small">
						Coffeekraken s-datepicker-component
					<h1>
					<p class="p m-b-bigger">
						Provide a nice and powerful datepicker component around the nice flatpikr plugin.
					</p>
					<input name="my-cool-date" class="form-input m-b" />
				    <s-datepicker color="primary" for="my-cool-date"></s-datepicker>
					<input name="my-cool-inline-date" class="form-input m-b" value="2017-11-10" />
				    <s-datepicker color="primary m-b" for="my-cool-inline-date" inline></s-datepicker>
				</div>
			`
		},
		css : {
			language : 'sass',
			data : `
				@import 'node_modules/coffeekraken-sugar/index';
				@import 'index';
				@include s-init();
				@include s-classes();
				@include s-typography-classes();
				@include s-form-classes();
				body {
					background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
				}
				.container {
					@include s-position(absolute, middle, center);
					min-width:80vw;
				}
				// component css here...
				@include s-datepicker-classes(
					$colors : default primary secondary
				);
			`
		},
		js : {
			language : 'js',
			data : `
				import 'webcomponents.js/webcomponents-lite'
				import SDatepickerComponent from './dist/index'
			`
		}
	}
}
