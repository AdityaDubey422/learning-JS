// Immediately Invoked Function Expressions (IIFE)
// Global scope ke declaration se pollution na ho isiliye iife use karte hai

(function chai() {
    // named IIFE ( because iss function ka ek naam hai)
    console.log("Database connected");
})();

( (name) => {
    console.log(`DB connected ${name}`);
} )("Aditya");

