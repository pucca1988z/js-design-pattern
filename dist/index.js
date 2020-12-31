let loadImg = (src) => {
    return new Promise((resolve, rejects)=>{
      let img = document.createElement('img')
      img.onload = () =>  resolve(img);
      img.onerror = () => rejects('error here')
      img.src = src
    })
  }
  let src = 'https://cdn2.techbang.com/system/excerpt_images/1429/original/31bd7a721e1cbecd169b61da5c179794884a4aff.jpg'
  loadImg(src)
  .then((img)=>{
    console.log(img.width)
    return img
  })
  .then((img)=>{
      console.log(img.height)
  })
  .catch(err => console.log(err)) 