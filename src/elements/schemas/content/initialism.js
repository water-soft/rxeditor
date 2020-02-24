import {OptionFragment} from "../option-fragment"

class TypyInitialism extends OptionFragment{
  constructor(){
    super()
    this.schema = {
      label:'Initialism',
      widget:'OpSwitch',
      required:true,
      group:'typographyOptions',
      onValue:'initialism',
      offValue:'',
      defaultValue:'',
    }

    this.fieldName = 'typyInitialism'
  }

  copyMeta(from, to){
    to[this.fieldName] = from[this.fieldName]
  }

  metaToModel(model, meta){
    let metaFragment = meta[this.fieldName]
    model.classList.add(metaFragment)
  }
}

var addonTypyInitialism = (node, groupName)=>{
  let typyInitialism = new TypyInitialism
  typyInitialism.addon(node, groupName)
  return typyInitialism
}

export {addonTypyInitialism}
