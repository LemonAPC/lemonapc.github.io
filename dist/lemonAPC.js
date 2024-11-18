const LemonAPC = {
  /**
  alert() but better
  */
  "alert": ({title = '', text = '', showImage = false, imageURL = '', close = true, time = 2000, font = 'Arial', width = '500px', height = '500px',callbackDelay = 0, callback = () => {}} = {}) => {
    const popup = document.createElement("dialog");
    const popupTitle = document.createElement("h2");
    const popupText = document.createElement("h4");
    
    popup.style.border = "none";
    popup.style.outline = "none";
    popup.style.borderRadius = "20px";
    
    popupTitle.style.textAlign = 'center'
    popupTitle.style.fontFamily = font;
    popupTitle.style.opacity = 0;
    popupTitle.style.transition = 'all 0.5s ease';
    popupTitle.textContent = title;
    
    popupText.style.textAlign = 'center'
    popupText.style.fontFamily = font;
    popupText.style.opacity = 0;
    popupText.style.transition = 'all 0.5s ease';
    popupText.textContent = text;
    
    popup.style.width = '0px';
    popup.style.height = '0px';
    
    popup.style.display = 'flex';
    popup.style.flexDirection = 'column';
    popup.style.justifyContent = 'center';
    popup.style.alignItems = 'center';
    
    popup.style.transition = 'all 0.5s ease'
    
    const image = document.createElement("img");
    
    image.style.width = '0px';
    image.style.borderRadius = '10px';
    image.style.transition = 'all 0.5s ease';
      
    image.src = imageURL;
    
    if (Boolean(showImage)) {
      popup.appendChild(image);
      popup.appendChild(document.createElement("br"));
    }
    
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        image.style.width = 'calc(0.1vw + 200px)';
      })
    })
    
    document.body.appendChild(popup);
    popup.appendChild(popupTitle);
    popup.appendChild(popupText);
    
    popup.showModal()
    
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        popup.style.width = `calc(0.1vw + ${width})`;
        popup.style.height = `calc(0.11vh + ${height})`;
        
        popupTitle.style.opacity = 1;
        popupText.style.opacity = 1;
      })
    })
    
    if(Boolean(close)) {
      setTimeout(() => {
        closePopup({callback: callback, time: time, callbackDelay: callbackDelay})
      }, Number(time))
    } else {
      const closeButton = document.createElement("button");
      closeButton.style.fontFamily = font;
      closeButton.style.border = "none";
      closeButton.style.height = "calc(0.1vh + 45px)";
      closeButton.style.width = "calc(0.1vw + 150px)";
      closeButton.style.borderRadius = "10px";
      closeButton.style.backgroundColor = "royalblue";
      closeButton.style.color = "white";
      closeButton.style.fontWeight = "bold";
      closeButton.textContent = "Close Popup";
      popup.appendChild(closeButton);
      
      closeButton.addEventListener("click", () => {
        closePopup({callback: callback, callbackDelay: callbackDelay});
      })
    }
    
    function closePopup({callback, time = 0, callbackDelay = 0} = {}) {
      popup.style.opacity = 0;
      
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          popup.style.width = '0px';
          popup.style.height = '0px';
          image.style.width = '0px';
        })
      })
      setTimeout(() => {
        popup.close();
        document.body.removeChild(popup);
      }, 500)
      setTimeout(() => {
        callback();
      }, Number(callbackDelay))
    }
  },
  "prompt": ({question = '',imageURL = '', showImage = false, width = '500px', height = '500px', font = 'Arial', callbackDelay = 0, callback = () => {}} = {}) => {
    const popup = document.createElement("dialog");
    const popupQuestion = document.createElement("h2");
    const image = document.createElement("img");
    const inputBar = document.createElement("input");
    
    popup.style.outline = 'none';
    popup.style.border = 'none';
    
    popup.style.display = 'flex';
    popup.style.flexDirection = 'column';
    popup.style.alignItems = 'center';
    popup.style.justifyContent = 'center';
    
    popupQuestion.style.fontFamily = font;
    
    popupQuestion.textContent = question;
    popupQuestion.style.textAlign = 'center'
    
    image.src = imageURL;
    
    popup.style.borderRadius = '20px';
    image.style.borderRadius = '10px';
    inputBar.style.borderRadius = '10px';
    
    inputBar.style.borderStyle = 'solid';
    
    const buttonHandler = document.createElement("span");
    
    buttonHandler.style.gap = '10px';
    buttonHandler.style.display = 'flex';
    
    const submitButton = document.createElement("button");
    submitButton.style.fontFamily = font;
    submitButton.style.border = "none";
    submitButton.style.height = "calc(0.1vh + 45px)";
    submitButton.style.width = "calc(0.1vw + 150px)";
    submitButton.style.borderRadius = "10px";
    submitButton.style.backgroundColor = "green";
    submitButton.style.color = "white";
    submitButton.style.fontWeight = "bold";
    submitButton.textContent = "Submit";
      
    submitButton.addEventListener("click", () => {
      closePopup({callback: callback, callbackDelay: callbackDelay, input: inputBar.value});
    })
    
    buttonHandler.appendChild(submitButton);
    
    const cancelButton = document.createElement("button");
    cancelButton.style.fontFamily = font;
    cancelButton.style.border = "none";
    cancelButton.style.height = "calc(0.1vh + 45px)";
    cancelButton.style.width = "calc(0.1vw + 150px)";
    cancelButton.style.borderRadius = "10px";
    cancelButton.style.backgroundColor = "red";
    cancelButton.style.color = "white";
    cancelButton.style.fontWeight = "bold";
    cancelButton.textContent = "Cancel";
      
    cancelButton.addEventListener("click", () => {
      closePopup({callback: callback, callbackDelay: callbackDelay});
    })
    
    buttonHandler.appendChild(cancelButton);
    
    if(Boolean(showImage)) {
      popup.appendChild(image);
      popup.appendChild(document.createElement('br'));
    }
    
    popup.appendChild(popupQuestion);
    popup.appendChild(inputBar);
    popup.appendChild(document.createElement('br'));
    popup.appendChild(buttonHandler);
    
    document.body.appendChild(popup);
    
    image.style.width = '0px';
    popup.style.width = '0px'
    popup.style.height = '0px';
    inputBar.style.width = '0px';
    inputBar.style.height = '0px';
    
    image.style.opacity = 0;
    popup.style.opacity = 0;
    popupQuestion.style.opacity = 0;
    inputBar.style.opacity = 0;
    
    popup.showModal();
    
    popup.style.transition = 'all 0.5s ease';
    image.style.transition = 'all 0.5s ease';
    inputBar.style.transition = 'all 0.5s ease';
    
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        popup.style.width = `calc(0.1vw + ${width})`;
        popup.style.height = `calc(0.1vh + ${height})`;
        image.style.width = `calc(0.1vw + 200px)`;
        inputBar.style.height = 'calc(0.51vh + 25px)';
        inputBar.style.width = 'calc(0.1vw + 200px)';
        
        popup.style.opacity = 1;
        popupQuestion.style.opacity = 1;
        image.style.opacity = 1;
        inputBar.style.opacity = 1;
      })
    })
    
    function closePopup({callback, time = 0, callbackDelay = 0, input = null} = {}) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          popup.style.width = '0px';
          popup.style.height = '0px';
          image.style.width = '0px';
          
          popup.style.opacity = 0;
          popupQuestion.style.opacity = 0;
          image.style.opacity = 0;
        })
      })
      setTimeout(() => {
        popup.close();
        document.body.removeChild(popup);
      }, 500)
      setTimeout(() => {
        callback(input)
      }, Number(callbackDelay))
    }
  },
  "confirm": ({text = '',imageURL = '', showImage = false, width = '500px', height = '500px', font = 'Arial', callbackDelay = 0, callback = () => {}} = {}) => {
    const popup = document.createElement("dialog");
    const popupText = document.createElement("h2");
    const image = document.createElement("img");
    
    popup.style.outline = 'none';
    popup.style.border = 'none';
    
    popup.style.display = 'flex';
    popup.style.flexDirection = 'column';
    popup.style.alignItems = 'center';
    popup.style.justifyContent = 'center';
    
    popupText.style.fontFamily = font;
    
    popupText.textContent = text;
    popupText.style.textAlign = 'center'
    
    image.src = imageURL;
    
    popup.style.borderRadius = '20px';
    image.style.borderRadius = '10px';
    
    const buttonHandler = document.createElement("span");
    
    buttonHandler.style.gap = '10px';
    buttonHandler.style.display = 'flex';
    
    const okButton = document.createElement("button");
    okButton.style.fontFamily = font;
    okButton.style.border = "none";
    okButton.style.height = "calc(0.1vh + 45px)";
    okButton.style.width = "calc(0.1vw + 150px)";
    okButton.style.borderRadius = "10px";
    okButton.style.backgroundColor = "royalblue";
    okButton.style.color = "white";
    okButton.style.fontWeight = "bold";
    okButton.textContent = "Ok";
      
    okButton.addEventListener("click", () => {
      closePopup({callback: callback, callbackDelay: callbackDelay, input: true});
    })
    
    buttonHandler.appendChild(okButton);
    
    const cancelButton = document.createElement("button");
    cancelButton.style.fontFamily = font;
    cancelButton.style.border = "none";
    cancelButton.style.height = "calc(0.1vh + 45px)";
    cancelButton.style.width = "calc(0.1vw + 150px)";
    cancelButton.style.borderRadius = "10px";
    cancelButton.style.backgroundColor = "#EEE";
    cancelButton.style.color = "#222";
    cancelButton.style.fontWeight = "bold";
    cancelButton.textContent = "Cancel";
      
    cancelButton.addEventListener("click", () => {
      closePopup({callback: callback, callbackDelay: callbackDelay});
    })
    
    buttonHandler.appendChild(cancelButton);
    
    if(Boolean(showImage)) {
      popup.appendChild(image);
      popup.appendChild(document.createElement('br'));
    }
    
    popup.appendChild(popupText);
    popup.appendChild(buttonHandler);
    
    document.body.appendChild(popup);
    
    image.style.width = '0px';
    popup.style.width = '0px'
    popup.style.height = '0px';
    
    image.style.opacity = 0;
    popup.style.opacity = 0;
    popupText.style.opacity = 0;
    
    popup.showModal();
    
    popup.style.transition = 'all 0.5s ease';
    image.style.transition = 'all 0.5s ease';
    
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        popup.style.width = `calc(0.1vw + ${width})`;
        popup.style.height = `calc(0.1vh + ${height})`;
        image.style.width = `calc(0.1vw + 200px)`;
        
        popup.style.opacity = 1;
        popupText.style.opacity = 1;
        image.style.opacity = 1;
      })
    })
    
    function closePopup({callback, time = 0, callbackDelay = 0, input = false} = {}) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          popup.style.width = '0px';
          popup.style.height = '0px';
          image.style.width = '0px';
          
          popup.style.opacity = 0;
          popupText.style.opacity = 0;
          image.style.opacity = 0;
        })
      })
      setTimeout(() => {
        popup.close();
        document.body.removeChild(popup);
      }, 500)
      setTimeout(() => {
        callback(input)
      }, Number(callbackDelay))
    }
  }
}
