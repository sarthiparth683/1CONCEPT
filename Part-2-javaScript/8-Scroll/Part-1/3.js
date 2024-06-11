//----------------------------------------------------------------------------------------
// Infinite scrolling
// Difference between offsetHeight, clientHeight and scrollHeight

// scrollHeight: The scrollHeight value is equal to the minimum height the element would require in order to fit all the content in the viewport without using a vertical scrollbar.

// clientHeight: it includes the element’s padding, but not its border, margin or horizontal scrollbar (if present). It can also include the height of pseudo-elements such as [::before](https://developer.mozilla.org/en-US/docs/Web/CSS/::before) or [::after](https://developer.mozilla.org/en-US/docs/Web/CSS/::after). If the element's content can fit without a need for vertical scrollbar, its scrollHeight is equal to[clientHeight](https://developer.mozilla.org/en-US/docs/Web/API/Element/clientHeight). VISIBLE content & padding

// offsetHeight: is a measurement in pixels of the element’s CSS height, including border, padding and the element’s horizontal scrollbar (if present, if rendered). It does not include the height of pseudo-elements such as [::before](https://developer.mozilla.org/en-US/docs/Web/CSS/::before) or [::after](https://developer.mozilla.org/en-US/docs/Web/CSS/::after).

// The following equivalence returns true if an element is at the end of its scroll, false if it isn't.

// **element.scrollHeight - element.scrollTop === element.clientHeight**
// scrollHeight: ENTIRE content & padding (visible or not)
// Height of all content + paddings, despite of height of the element.

// clientHeight: VISIBLE content & padding
// Only visible height: content portion limited by explicitly defined height of the element.

// offsetHeight: VISIBLE content & padding + border + scrollbar
// Height occupied by the element on document.
//---------------------------------------------------------------------------