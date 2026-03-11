const person = {
    name: "Marcelo",
    age: 39,
    prof: "engineer",
    free: ["read", "soccer", "software","tv"],

    presentation: function(){
        return `Hi , I am ${this.name} and i have ${this.age} years old`;
    },

    freeTime: function(){
        return `free time:  ${this.free.join(",")}`;
    },

     job: function(){
        return `Hi, I am ${this.name} and mi profession is a ${this.prof}`  ;
   }
};

console.log(person.presentation());
console.log(person.freeTime());
console.log(person.job());
