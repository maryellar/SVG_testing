var s = Snap("#Layer_1");
document.body.appendChild(s.node); // Append the SVG element to the DOM

// Create a circle
var circle = s.circle(100, 100, 50);
circle.attr({ fill: "red", stroke: "black" });

// Create a rectangle
var rect = s.rect(200, 200, 100, 50);
rect.attr({ fill: "blue" });

// Add text
var text = s.text(300, 300, "Hello, Snap.svg!");
text.attr({ fontSize: "20px" });

// Animate an element
circle.animate({ r: 100 }, 1000); // Increase the radius in 1 second