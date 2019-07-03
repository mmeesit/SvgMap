# SvgMap

Basically, I am doing this with SVG image paths - I am searching the map point
path position in relation to main svg element. Then I am searching for random map point
between 1-6175 (current map point amount) and adding a map pin to it.
Some pins will become absolute, ie Moscow, Berlin, New York, which also have
a text and info card or sorts.
It will find random map points every 15 seconds, except the static points, until 5 minutes runs out.

Currently pins are added already in the main SVG, inside a group.
If i wanted to do this more dynamically, I'd loop the creation in javascript,
but for now this seemed like a good option (mainly time constriction).
Also, if the page is bigger, i wouldn't use inline svg image, external
svg is better for performance (mainly caching).
I'd also create the static points with text in javascript for better
code structure and maintenance (in case i want to add/delete pins).
For instance, the last element (location performance elements) should 
all be in one place in JS, where it's easily duplicated and changed.

This is a MVP, not the perfect product.

The data cards are all static html elements for presentation purposes only.

![alt](https://imgur.com/a/xnkoJxY)
