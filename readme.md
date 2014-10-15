jq.chewingGum
==========

------------------------------


###What is it?

- jQuery plugin
- Allow you to stick a DOM element somewhere in a webpage, by affect a class on it when you go through.

###How it work?

```js
$(".mynode").chewingGum();
```

```css
body .fixed{position:fixed;}
```


###Params

- nameClassStick: a string. default "fixed". What class is applied when you go beyond the line
- nameClassUStick: a string. default "display". What class is applied when your element is not beyond the line of windows.
- affected: jquery object. Add and remove the same class as nameClassStick to an other element you choose, when targeted node triggered or not.

###Licence

MIT
