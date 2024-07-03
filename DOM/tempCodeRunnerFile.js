const student ={
    name: "aman",
    marks: 56,
    prop: this, //global scope
    getname: function(){
        console.log(this);
        return this.name;
    },
    getmarks: () => {
        console.log(this);
        return this.name;
    }
};