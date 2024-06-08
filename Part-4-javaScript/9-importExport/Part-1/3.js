//--------------------------------------------------------------------
// Infinite scrolling
// Introduction
// Infinity scrolling, also known as endless scrolling, is a user interface design pattern that allows content to continuously load as the user scrolls down a webpage or application. This technique is commonly used in websites and mobile apps to provide a seamless browsing experience without the need for pagination. Understanding how infinity scrolling works and its implementation is crucial for developers working on modern web and mobile applications.
//--------------------------------------------------------------------
// Detailed Explanation
// What is the concept?
// Infinity scrolling is a method of displaying content where new items are loaded dynamically as the user scrolls down a webpage or app. Instead of traditional pagination where users have to click on next or load more buttons to view additional content, infinity scrolling automatically fetches and appends new data as the user reaches the bottom of the current content.

// Why is it useful?
// Infinity scrolling enhances user experience by eliminating the need for manual interaction to load more content. It creates a seamless browsing experience, especially on platforms with large amounts of data such as social media feeds or e-commerce websites. Additionally, it provides a sense of endless exploration, keeping users engaged for longer periods.

// Real-world examples or analogies
// Imagine browsing through a social media feed where new posts appear as you scroll down without having to click on a "load more" button. This continuous flow of content mimics the experience of flipping through an endless magazine, providing users with a seamless browsing experience.

// Visual models:
//--------------------------------------------------------------------
// Code Implementation | Examples
// Difference between offsetHeight, clientHeight and scrollHeight

// scrollHeight: The scrollHeight value is equal to the minimum height the element would require in order to fit all the content in the viewport without using a vertical scrollbar.

// ENTIRE content & padding (visible or not)

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
//--------------------------------------------------------------------
//--------------------------------------------------------------------
//--------------------------------------------------------------------
//--------------------------------------------------------------------
//--------------------------------------------------------------------
//--------------------------------------------------------------------
//--------------------------------------------------------------------
//--------------------------------------------------------------------
//--------------------------------------------------------------------
//--------------------------------------------------------------------
//--------------------------------------------------------------------
//--------------------------------------------------------------------
//--------------------------------------------------------------------
//--------------------------------------------------------------------