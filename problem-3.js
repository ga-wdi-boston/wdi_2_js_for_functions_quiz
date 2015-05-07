
A senior project manager at the company you're working on was recently very embarassed by a demo that crashed hard because a developer used a color name that Microsoft Internet Explorer didn't recognize.

So senior management declared that no string, value, object, or entity could be used as a color unless it was the return value of a all
So senior managment has decreed that no color name may be used
So the new rule is that no string, value, object, or entity is acceptable to use in your firm's code unless it is the return value of a call to the function normalizeHtmlColorName().

As a developer, you don't deal much with color names or hex values directly, but you find this line in your code:

$('p.commented').click(function(){
    $(this).css('background-color', 'rebecca    purple')
});
