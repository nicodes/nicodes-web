* Use view transitions animation when navigating off side nav

* Update CT Calc so it's not so ugly

[Google Drive Folder](https://drive.google.com/drive/folders/1i476mRYvRDnQr0bQcq0lBzdbxZcs2s3F?usp=sharing)

Last thing, make the red border shrink on navigation to index, like how the nav auto collapses

**VIEW TRANSITIONS!!!**

Why does `transition: animate` make the nav break? Content is leaking through.

Use border right and left on the header to make the bottom red border more consistent. Add the spacing for mobile.

There's an issue when doing this because the border bottom "pinches". Ask ChatGPT.

Add animation to red borders so they grow on load.

Maybe replace red borders with divs so they can have border-radius?