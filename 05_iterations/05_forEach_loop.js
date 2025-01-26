const programming = ["js", "rb", "python", "cpp"];

programming.forEach((element) => {
  console.log(element + " hello");
});

programming.forEach((element,index,arr)=> {
    console.log(element,index,arr)
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js",
    },
    {
        languageName: "java",
        languageFileName: "java",
    },
    {
        languageName: "python",
        languageFileName: "py",
    },
]

myCoding.forEach((element) => {
console.log(element.languageName)
})
