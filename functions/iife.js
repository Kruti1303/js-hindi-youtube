// Immediately Invoked Function Expressions (IIFE)
(function chai(){// named iife
    console.log(`DB connected`);
    
})();//; is mantodary is another function is there
// global pollution ko hatane k lie iife ka use krte hai aur is se function jldi execute ho jta hai
((name)=>{
    console.log(`DB Connected to ${name}`);
    
})('hietsh')