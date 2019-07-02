# SvgMap

Basically, I am doing this with SVG image paths - I am searching the map point
path position in relation to main svg element. Then I am finding random map point
between 1-6175 (current map point amount) and adding a map pin to it.
Some pins will become absolute, ie Moscow, Berlin, New York, which also have
a text pint or sorts.

Currently pins are added already in the main SVG, inside a group.
If i wanted to do this more dynamically, I'd loop the creation in javascript,
but for now this seemed like a good option (mainly time constriction).

