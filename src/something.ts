class JustAThing {
  constructor(protected things: number) { }

  get stuff() { return this.things }
}


function tagIt(val: TemplateStringsArray, x: any) {
  let thing = val[0] + x;
  console.log(thing);
}

let poo = new JustAThing(555);

tagIt` how many: ${poo.stuff}`