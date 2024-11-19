import {LemonAPC} from './dist/lemonAPC.js'

LemonAPC.confirm({
  text: 'Is Markiplier good?',
  imageURL: "markiplier.jpeg",
  showImage: true,
  callback: () => {
    LemonAPC.alert({
      title: "Cool",
      text: "Markiplier is awesome as hell",
      showImage: true,
      imageURL: 'markiplier.jpeg'
    })
  }
})