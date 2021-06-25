

module.exports = async (client, dados) => {
// Parceiros da loucura
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