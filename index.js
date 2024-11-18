LemonAPC.confirm({
  text: 'Is Markiplier good?',
  imageURL: "markiplier.jpeg",
  showImage: true,
  callbackDelay: 500,
  callback: (input) => {
    if(input){
      LemonAPC.alert({
        title: `Indeed!!`,
        imageURL: 'markiplier.jpeg',
        showImage: true
      })
    } else {
      LemonAPC.alert({
        title: `Disagree!!`,
        imageURL: 'markiplier.jpeg',
        showImage: true
      })
    }
  }
})