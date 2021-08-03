
const firebase = require('firebase');
const database = firebase.database();

module.exports = async (client, dados) => {
//dumond
    database.ref(`msg`)
    .once('value').then(async function (snap) {
  
      if (snap.val() == null) return;
            
      let msg = snap.val().mensagemID
      let serv = snap.val().server
      let carg = snap.val().cargoID

    if(dados.t !== "MESSAGE_REACTION_ADD" && dados.t !== "MESSAGE_REACTION_REMOVE") return 
    if(dados.d.message_id != msg) return
  
    let servidor = client.guilds.cache.get(serv)
    let membro = servidor.members.cache.get(dados.d.user_id)
  
    let gratis = servidor.roles.cache.get(carg)
  
    if(dados.t == "MESSAGE_REACTION_ADD"){
      if(dados.d.emoji.name === "💯"){
        membro.roles.add(gratis)
      }
    }
    if(dados.t == "MESSAGE_REACTION_REMOVE"){
      if(dados.d.emoji.name === "💯"){
        membro.roles.remove(gratis)
      }
    }

  }) 
//parceiros da loucura
  if(dados.t !== "MESSAGE_REACTION_ADD" && dados.t !== "MESSAGE_REACTION_REMOVE") return 
  if(dados.d.message_id != "858111704550080522") return

  let servidor = client.guilds.cache.get("545386837846523905")
  let membro = servidor.members.cache.get(dados.d.user_id)

  let gratis = servidor.roles.cache.get("854498073244860446")

  if(dados.t == "MESSAGE_REACTION_ADD"){
    if(dados.d.emoji.name === "💯"){
      membro.roles.add(gratis)
    }
  }
  if(dados.t == "MESSAGE_REACTION_REMOVE"){
    if(dados.d.emoji.name === "💯"){
      membro.roles.remove(gratis)
    }
  }

}