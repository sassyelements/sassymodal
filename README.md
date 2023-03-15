# Sassy Modal

A very light vanilla JavaScript plugin for creating modals. You only write the
HTML and the rest will be taken care of by the plugin.

## Demo
To try out Sassy Modal clone this repo and run the following commands.

First install npm packages
```bash
npm install
```

Then run
```bash
npm start

# output
> sassymodal@1.0.0 start
> parcel index.html

Server running at http://localhost:1234
Built in 1.60s
```
Visit `http://localhost:1234` to see the result. Your port may not be `1234`!

## How to Use Sassy Modal

First you need to get the plugin file `SassyModal.js`. Copy it to your JS
directory. You can create a directory called `plugins/` in your JS directory
and put the `SassyModal.js` there.

In your index.js file you want to instantiate the modal object as shown in example
below:

```javascript
import SassyModal from './js/plugins/SassyModal';

const modal = new SassyModal({
    blur: true,
    centered: true,
    animation: 'fade-in',
    showModalCSS: 'show-modal'
});
```

The `SassyModal` object takes an object as an argument which allow you to
customize the modal a little. See the object below to see all the attributes you
can customize.
```javascript
const modal = new SassyModal({
    blur: true,                             // Backdrop blur
    centered: true,                         // Modal position centered
    animation: 'fade-in',                   // Animations: fade-in/fade-out
    showModalCSS: 'show-modal',             // CSS class that shows modal
    dataAttributes: {
        trigger: 'data-modal-trigger',      // Data attribute for triggers
        closer: 'data-modal-close',         // Data attribute for close buttons
        id: 'data-modal-id'                 // Data attribute for modal IDs
    }
});
```

The HTML for the modal could look like following:
```html
<!-- Modal Triggers -->
<div class="modal__triggers">
    <a class="btn btn--default btn--round" href="#" data-modal-trigger="modal-one">Modal One</a>
</div>

<!-- Modal One -->
<div class="modal__container" data-modal-id="modal-one">
    <div class="modal__backdrop"></div>
    <div class="modal__content">
        <div class="modal__head">
            <h3 class="heading-light heading-3">Modal One</h3>
        </div>
        <div class="modal__body">
            <h3 class="heading-light heading-3">This is the modal body!</h3>
        </div>
        <div class="modal__foot">
            <a class="btn btn--default" href="#" data-modal-close="modal-one">Close</a>
        </div>
    </div>
</div>
```

## Custom Events
Sassy Modal also provides custom events like Bootstrap. There are four custom
events you can use the `before_open`, `after_open`, `before_close` and
`after_close`. Those events can be utilized to update the content of the modal
after or before it's opened or closed. See the example below on how to use them!

Let's suppose we want to change the title of the modal after it's opened.
```javascript
const modalOne = document.querySelector('[data-modal-id="modal-one"]');
modalOne.addEventListener('after_open', (event) => {
    const targetModal = event.detail;
    targetModal.querySelector('.modal__content h3').innerText = "Modal One - After Open Event";
});
```

The other events can be used similarly.
```javascript
obj.addEventListener('after_close', function(){...});
obj.addEventListener('before_open', function(){...});
```

For the animations you've to either use the animation from Sassy Modal or you
write your own CSS animations see the default theme file inside
`src/sass/themes/` directory. For the styles you can basically copy the
default theme and modify it to suit your needs. However it's not necessary
you're totally free to write your own HTML and CSS.
